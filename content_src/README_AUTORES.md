# Guía para autores de misiones (Lara · Aventura / Biblioteca)

Cada misión del Excel `Misiones6.xlsx` (40 en total) es un fichero `content_src/mNN.js` (NN = id con dos cifras: `m03.js`, `m27.js`).
Los metadatos (título, objetivo de aprendizaje, XP) están en `js/aventura/meta.js`: **lee el objetivo de tu misión y cúbrelo entero**.
Ejemplos de referencia (léelos antes de escribir): `content_src/m01.js` (Lengua, sin generadores) y `content_src/m12.js` (Matemáticas, con generadores).

## Estructura

```js
Adv.register(ID, {
  stations: [            // EXACTAMENTE 3 estaciones, de lo más básico a lo más aplicado
    { title: '...', intro: [ {i:'📍', h:'Título corto', p:'Explicación'} , ... ],   // 1-3 píldoras de teoría por estación
      ex: [ ...ejercicios... ] },
    { ... }, { ... }
  ]
});
```
- Los ficheros se envuelven en una función al construirse: puedes declarar `const R = Adv.rnd, ...` arriba sin miedo a chocar con otros ficheros.
- Texto en HTML mínimo permitido: `<b> <i> <u> <br> <sup> <sub> <strong> <em> <span>`. Nada más. Fracciones: `Adv.frac(3,4)` dentro de un generador.
- Píldora (`intro`): `h` = título (≤60 caracteres), `p` = explicación breve (50–520 caracteres), `i` = un emoji. Sin muros de texto: ejemplos concretos, listas con `<br>`.
- Estación: `title` de 5–60 caracteres. **Mínimo 8 ejercicios fijos y 12 en total** por estación (un generador cuenta como 3). Objetivo recomendado: **12 ejercicios fijos por estación**.

## Tipos de ejercicio (todos llevan `q` y `why`)

| `t` | Campos | Notas |
|---|---|---|
| `choice` | `o:[2-4 opciones]`, `a:índice correcto` | Las opciones se barajan solas. Si usas «Todas/Ninguna/Ambas» o un orden fijo, añade `keep:true`. |
| `tf` | `a:true/false` | Afirmación clara y sin trampa. Equilibra verdaderos y falsos. |
| `num` | `a:número`, opcional `alt:[otras respuestas válidas]`, `u:'unidad'`, `neg:true` si puede ser negativa | Teclado numérico en pantalla. Respuesta entera o con ≤4 decimales. |
| `order` | `items:[3-6 elementos EN EL ORDEN CORRECTO]` | Se barajan solos. Elementos distintos entre sí. |
| `match` | `pairs:[[izq,der],…]` (3-5 pares) | Elementos de cada columna sin repetir. |
| `sort` | `cats:[2-3 categorías]`, `items:[{x:'texto', c:índiceCategoría}, …]` (4-8) | Toda categoría debe tener al menos 1 item. |
| `tap` | `words:[palabras…]`, `wrong:[índices de las palabras erróneas]` | «Cazar errores» en un texto. Las palabras llevan su puntuación pegada. |
| `gen` | `f: () => ({ t:'num'|'tf'|'choice'|..., q, a, why, ... })` | Genera el ejercicio con números aleatorios y **calcula la respuesta con código**. Ver m12.js. |

## Reglas de calidad (OBLIGATORIAS)

1. **Cero errores.** Incluye solo datos de los que estés 100 % seguro (fechas, cifras, nombres, reglas ortográficas, definiciones). Si dudas de una cifra o una fecha, NO la uses: pregunta por el concepto. Toda pregunta tiene **una única respuesta correcta indiscutible** y distractores plausibles pero claramente incorrectos. Nada de preguntas trampa ni de matices opinables.
2. **Currículo de 6.º de Primaria (Aragón, Decreto 111/2022).** Vocabulario y dificultad para niñas de 11–12 años. Cuando el objetivo mencione Aragón (Moncayo, Ebro, Cortes, Justicia, Sitios de Zaragoza…), úsalo con precisión y solo en lo que sepas con certeza.
3. **Sin repeticiones.** No preguntes dos veces lo mismo (ni con distinta redacción) dentro de una misión; el validador rechaza enunciados idénticos. Las tres estaciones deben cubrir partes distintas del objetivo.
4. **Variedad.** Usa al menos 5 de los 7 tipos fijos cuando el tema lo permita, y reparte los tipos entre estaciones. No pongas solo `choice`.
5. **Enseñar, no solo evaluar.** `why` (≥12 caracteres) explica **la regla o el motivo**, tanto si aciertan como si fallan («Porque…», con un ejemplo). Es la parte pedagógica más importante.
6. **Todo en texto.** No dependas de imágenes ni de mapas (usa emojis con moderación). Para geografía o historia pregunta por relaciones, ubicaciones descritas con palabras, orden cronológico (`order`), emparejar (`match`), clasificar (`sort`).
7. **Tono:** cercano y motivador, ortografía impecable (tildes incluidas), español de España. Ni infantilismo excesivo ni bromas que puedan inducir a error.
8. **Matemáticas y ciencias con cálculo:** usa generadores (`gen`) para todo lo que sea calcular, con números «limpios» (resultados enteros o con ≤2 decimales), opciones sin repetir y `why` que muestre el cálculo. Deben aportar variedad real (≥25 combinaciones distintas). Mínimo 2 generadores por estación en misiones de cálculo.
9. **Tema sensible (Misión 24, reproducción humana):** enfoque científico, respetuoso, sobrio y apropiado a la edad, con vocabulario anatómico correcto, sin ningún contenido explícito ni frivolidad.
10. Ningún texto copiado de libros: redacta con tus palabras.

## Validación (obligatoria antes de terminar)

```
node tools/build.js 3 4 5        # valida solo las misiones indicadas (usa tus ids)
```
Debe terminar con `✅` y **0 errores**. Atiende también a los avisos que tengan sentido (poca variedad de tipos, tf desequilibrado, generador con poca variedad).
No ejecutes `node tools/build.js` sin argumentos y no toques ningún fichero que no sea el tuyo (`content_src/mNN.js`).
