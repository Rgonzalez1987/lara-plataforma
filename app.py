import streamlit as st
import json
import time
import random
import os
from datetime import datetime
import pandas as pd

# --- CONFIGURACIÓN DE PÁGINA ---
st.set_page_config(page_title="Lara | Learning Platform", page_icon="⚡", layout="wide")

# --- ESTILOS PERSONALIZADOS (Glassmorphism) ---
st.markdown("""
    <style>
    .main {
        background-color: #0f172a;
        color: #f8fafc;
    }
    .stButton>button {
        width: 100%;
        border-radius: 12px;
        height: 3em;
        background-color: #8b5cf6;
        color: white;
        border: none;
        font-weight: bold;
        transition: 0.3s;
    }
    .stButton>button:hover {
        background-color: #ec4899;
        transform: scale(1.02);
    }
    .glass-card {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 2rem;
        margin-bottom: 1rem;
    }
    .stat-val {
        font-size: 2.5rem;
        font-weight: 800;
        color: #06b6d4;
    }
    .arcade-text {
        font-size: 5rem;
        font-weight: 900;
        text-align: center;
        color: #fbbf24;
        text-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
    }
    </style>
    """, unsafe_allow_html=True)

# --- GESTIÓN DE DATOS ---
DB_FILE = "datos_aprendizaje.json"

def load_data():
    if not os.path.exists(DB_FILE):
        return {
            "config": {"active_mission": "Multiplicaciones", "admin_pass": "1234"},
            "missions": {
                "Multiplicaciones": {"type": "math", "content": "1-10"},
                "Capitales": {"type": "flashcards", "content": [["España", "Madrid"], ["Francia", "París"], ["Italia", "Roma"]]}
            },
            "user": {"xp": 0, "level": 1, "history": []}
        }
    with open(DB_FILE, 'r') as f:
        return json.load(f)

def save_data(data):
    with open(DB_FILE, 'w') as f:
        json.dump(data, f, indent=4)

if 'db' not in st.session_state:
    st.session_state.db = load_data()

# --- LÓGICA DE JUEGO ---
def get_math_question():
    ops = ['+', '-', '*']
    op = random.choice(ops)
    a, b = random.randint(1, 10), random.randint(1, 10)
    if op == '-' and a < b: a, b = b, a
    return f"{a} {op} {b}", eval(f"{a}{op}{b}")

# --- SECCIONES DE LA APP ---

def admin_mode():
    st.title("👨‍🏫 Modo Papi (Admin)")
    
    tab1, tab2, tab3 = st.tabs(["🎯 Misiones", "⚙️ Contenido", "📊 Stats Globales"])
    
    with tab1:
        st.subheader("Configurar Misión Activa")
        mision = st.selectbox("Selecciona la misión para Lara", list(st.session_state.db["missions"].keys()))
        if st.button("Actualizar Misión"):
            st.session_state.db["config"]["active_mission"] = mision
            save_data(st.session_state.db)
            st.success(f"Misión '{mision}' activada")

    with tab2:
        st.subheader("Añadir Nueva Materia")
        new_name = st.text_input("Nombre de la asignatura (ej: Ortografía)")
        content_type = st.radio("Tipo", ["Matemáticas", "Flashcards (Dato:Respuesta)"])
        raw_content = st.text_area("Carga de datos (Para Flashcards: 'Dato:Respuesta', una por línea)")
        
        if st.button("Guardar Asignatura"):
            if content_type == "Matemáticas":
                st.session_state.db["missions"][new_name] = {"type": "math", "content": "custom"}
            else:
                lines = [line.split(":") for line in raw_content.split("\n") if ":" in line]
                st.session_state.db["missions"][new_name] = {"type": "flashcards", "content": lines}
            save_data(st.session_state.db)
            st.success("¡Contenido cargado con éxito!")

    with tab3:
        st.subheader("Evolución de Lara")
        hist = st.session_state.db["user"]["history"]
        if hist:
            df = pd.DataFrame(hist)
            st.line_chart(df.set_index('date')['time'])
            st.write(f"XP Total: {st.session_state.db['user']['xp']}")
        else:
            st.info("Aún no hay datos de entrenamiento.")

def arcade_mode():
    st.title("🕹️ Modo Juego (Arcade)")
    st.write("¡Bate tu récord de velocidad!")
    
    if 'arcade_q' not in st.session_state:
        st.session_state.arcade_q, st.session_state.arcade_a = get_math_question()
        st.session_state.start_time = time.time()

    st.markdown(f'<p class="arcade-text">{st.session_state.arcade_q}</p>', unsafe_allow_html=True)
    
    ans = st.number_input("Tu respuesta:", value=0, step=1, key="arcade_input")
    
    if st.button("Check! ⚡"):
        elapsed = time.time() - st.session_state.start_time
        if ans == st.session_state.arcade_a:
            st.balloons()
            xp_gain = max(5, int(10 / (elapsed + 0.1)))
            st.session_state.db["user"]["xp"] += xp_gain
            st.session_state.db["user"]["history"].append({
                "date": datetime.now().strftime("%Y-%m-%d %H:%M"),
                "type": "arcade",
                "time": elapsed,
                "success": True
            })
            save_data(st.session_state.db)
            st.success(f"¡Correcto! +{xp_gain} XP ({elapsed:.2f}s)")
            # Reset question
            st.session_state.arcade_q, st.session_state.arcade_a = get_math_question()
            st.session_state.start_time = time.time()
            st.rerun()
        else:
            st.error("¡Casi! Inténtalo de nuevo")

def study_mode():
    mision_name = st.session_state.db["config"]["active_mission"]
    mision = st.session_state.db["missions"][mision_name]
    
    st.title(f"📖 Modo Estudio: {mision_name}")
    
    if mision["type"] == "flashcards":
        if 'study_idx' not in st.session_state:
            st.session_state.study_idx = random.randint(0, len(mision["content"])-1)
            st.session_state.show_ans = False
            st.session_state.study_start = time.time()

        pair = mision["content"][st.session_state.study_idx]
        
        st.markdown(f"""
        <div class="glass-card">
            <h1 style="text-align:center;">{pair[0]}</h1>
        </div>
        """, unsafe_allow_html=True)
        
        if st.session_state.show_ans:
            st.markdown(f"<h2 style='text-align:center; color:#22c55e;'>{pair[1]}</h2>", unsafe_allow_html=True)
            if st.button("Siguiente ➡️"):
                st.session_state.study_idx = random.randint(0, len(mision["content"])-1)
                st.session_state.show_ans = False
                st.session_state.study_start = time.time()
                st.rerun()
        else:
            if st.button("Revelar Respuesta"):
                st.session_state.show_ans = True
                st.rerun()
    else:
        st.write("Esta misión es de tipo arcade. Cambia a una misión de Flashcards en el Modo Papi.")

# --- BARRA LATERAL (Navegación) ---
with st.sidebar:
    st.image("https://img.icons8.com/fluency/96/zap.png")
    st.title("Master Math Pro")
    
    level = st.session_state.db["user"]["level"]
    xp = st.session_state.db["user"]["xp"]
    st.write(f"⭐ Nivel: {level}")
    st.progress(min(1.0, (xp % 100) / 100))
    
    st.divider()
    page = st.radio("Sección", ["🕹️ Arcade", "📖 Estudio", "🔐 Modo Papi"])

if page == "🕹️ Arcade":
    arcade_mode()
elif page == "📖 Estudio":
    study_mode()
elif page == "🔐 Modo Papi":
    # Simple pass check
    if st.text_input("Contraseña Admin", type="password") == st.session_state.db["config"]["admin_pass"]:
        admin_mode()
    else:
        st.warning("Acceso restringido")
