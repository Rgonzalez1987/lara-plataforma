import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace imageQuery: "..." with id: "...", image: "assets/explora/..."

replacements = [
    (r'imageQuery:\s*"A friendly cartoon octopus named {{NAME}} changing color.*?",', 'id: "young_pulpo", image: "assets/explora/young_pulpo.jpg",'),
    (r'imageQuery:\s*"A little child astronaut named {{NAME}} sitting on a glowing silver moon.*?",', 'id: "young_luna", image: "assets/explora/young_luna.jpg",'),
    (r'imageQuery:\s*"A child named {{NAME}} walking in a glowing bioluminescent forest.*?",', 'id: "young_bosque", image: "assets/explora/young_bosque.jpg",'),
    (r'imageQuery:\s*"Cute little cartoon leafcutter ants carrying large green leaves.*?",', 'id: "young_hormigas", image: "assets/explora/young_hormigas.jpg",'),
    (r'imageQuery:\s*"A friendly happy dolphin jumping next to a child named {{NAME}}.*?",', 'id: "young_delfin", image: "assets/explora/young_delfin.jpg",'),
    
    (r'imageQuery:\s*"A scientific illustration of a child named {{NAME}} measuring their height.*?",', 'id: "middle_estatura", image: "assets/explora/middle_estatura.jpg",'),
    (r'imageQuery:\s*"An ancient Roman city of Pompeii preserved in ash,.*?",', 'id: "middle_pompeya", image: "assets/explora/middle_pompeya.jpg",'),
    (r'imageQuery:\s*"A massive glowing bioluminescent giant squid swimming deep in the dark.*?",', 'id: "middle_calamar", image: "assets/explora/middle_calamar.jpg",'),
    (r'imageQuery:\s*"A glowing network of white roots and mushroom mycelium.*?",', 'id: "middle_plantas", image: "assets/explora/middle_plantas.jpg",'),
    (r'imageQuery:\s*"A fluffy white yeti crab with hairy claws near deep sea.*?",', 'id: "middle_cangrejos", image: "assets/explora/middle_cangrejos.jpg",'),
    (r'imageQuery:\s*"A majestic ancient Roman plaza with a huge solar clock obelisk,.*?",', 'id: "middle_reloj", image: "assets/explora/middle_reloj.jpg",'),
    (r'imageQuery:\s*"A bright comet Halley with a glowing long tail crossing.*?",', 'id: "middle_cometa", image: "assets/explora/middle_cometa.jpg",'),
    (r'imageQuery:\s*"Breathtaking northern lights auroras boreales glowing green.*?",', 'id: "middle_aurora", image: "assets/explora/middle_aurora.jpg",'),
    
    (r'imageQuery:\s*"A single transparent atomic sheet of graphene honeycomb.*?",', 'id: "teen_grafeno", image: "assets/explora/teen_grafeno.jpg",'),
    (r'imageQuery:\s*"A majestic black hole with a glowing orange accretion disk.*?",', 'id: "teen_agujeros", image: "assets/explora/teen_agujeros.jpg",'),
    (r'imageQuery:\s*"A mechanical Enigma code machine with glowing light rotors,.*?",', 'id: "teen_enigma", image: "assets/explora/teen_enigma.jpg",'),
    (r'imageQuery:\s*"The breathtaking blue marble planet earth floating in a pitch black.*?",', 'id: "teen_tierra", image: "assets/explora/teen_tierra.jpg",'),
    (r'imageQuery:\s*"A beautiful cosmic web of invisible dark matter filaments connecting.*?",', 'id: "teen_materia", image: "assets/explora/teen_materia.jpg",'),
]

for target, replacement in replacements:
    content = re.sub(target, replacement, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done replacing in index.html!")
