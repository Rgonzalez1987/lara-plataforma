import urllib.request
import urllib.parse
import os
import time

os.makedirs('assets/explora', exist_ok=True)

prompts = {
    "young_pulpo": "A friendly cartoon octopus changing color to match a purple coral reef, underwater magic, highly detailed",
    "young_luna": "A little child astronaut sitting on a glowing silver moon looking at Earth, fantasy digital art",
    "young_bosque": "A child walking in a glowing bioluminescent forest with hundreds of tiny yellow fireflies",
    "young_hormigas": "Cute little cartoon leafcutter ants carrying large green leaves in a sunny garden",
    "young_delfin": "A friendly happy dolphin jumping in a sunny crystal-clear blue sea, beautiful splash",
    
    "middle_estatura": "A scientific illustration of a child measuring height against a glowing wooden ruler",
    "middle_pompeya": "An ancient Roman city of Pompeii preserved in ash, with volcano Mount Vesuvius in background",
    "middle_calamar": "A massive glowing bioluminescent giant squid swimming deep in the dark blue ocean",
    "middle_plantas": "A glowing network of white roots and mushroom mycelium connecting majestic trees underground",
    "middle_cangrejos": "A fluffy white yeti crab with hairy claws near deep sea hot water volcanic vents",
    "middle_reloj": "A majestic ancient Roman plaza with a huge solar clock obelisk, shadow casting on marble floor",
    "middle_cometa": "A bright comet Halley with a glowing long tail crossing a deep starry universe",
    "middle_aurora": "Breathtaking northern lights auroras boreales glowing green and purple over a snowy cabin in Iceland",
    
    "teen_grafeno": "A single transparent atomic sheet of graphene honeycomb carbon lattice glowing with light",
    "teen_agujeros": "A majestic black hole with a glowing orange accretion disk bending light and space",
    "teen_enigma": "A mechanical Enigma code machine with glowing light rotors, spy secret headquarters",
    "teen_tierra": "The breathtaking blue marble planet earth floating in a pitch black starry space",
    "teen_materia": "A beautiful cosmic web of invisible dark matter filaments connecting glowing baby galaxies"
}

for name, prompt in prompts.items():
    file_path = f"assets/explora/{name}.jpg"
        
    encoded_prompt = urllib.parse.quote_plus(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=800&height=450&nologo=true"
    
    print(f"Downloading {name}...")
    success = False
    retries = 3
    while not success and retries > 0:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(file_path, 'wb') as out_file:
                out_file.write(response.read())
            success = True
            time.sleep(2) # 2 second delay to avoid rate limiting
        except Exception as e:
            print(f"  Failed (retries left {retries-1}): {e}")
            retries -= 1
            time.sleep(5)

print("Finished downloading all images!")
