import urllib.request
import os
import time

os.makedirs('assets/explora', exist_ok=True)

images_fallbacks = {
    # Young bracket (5)
    "young_pulpo": [
        "1546026423-cc4642628d2b",  # Coral reef octopus (primary)
        "1545671913-b89ac1b4ac10",  # Crawling octopus
        "1545671598-3eb23ea6d54d"   # Original diver fallback
    ],
    "young_luna": [
        "1532693322450-2cb5c511067d",  # Beautiful Moon (original - works)
        "1506703719100-a0f3a48c0f86",  # Moon space
        "1522030299830-16b8d3d049dc"   # Craters moon
    ],
    "young_bosque": [
        "1518818402646-74f88e4c3b73",  # Firefly magical forest
        "1502082553048-f009c37129b9",  # Dreamy trees
        "1448375240586-882707b28874"   # Original day forest (works)
    ],
    "young_hormigas": [
        "1559060017-445fb9722f2a",  # Ants on green leaves (primary - works)
        "1518063065111-b9db8b1be4b0"   # Original leaves (works)
    ],
    "young_delfin": [
        "1509205477838-a534e43a849f",  # Beautiful dolphin underwater (primary - works)
        "1607153333809-c056d7308362",  # Playful dolphin underwater
        "1570481662006-a3a13746fe4f"   # Dolphin leaping
    ],
    
    # Middle bracket (8)
    "middle_estatura": [
        "1516627145497-ae6968895b74",  # Girl measuring height (primary - works)
        "1610411333792-623fcb9bd1b3"   # Original (works)
    ],
    "middle_pompeya": [
        "1508267985204-467f1912897d",  # Pompeii / ancient ruins (primary - works)
        "1604537529428-15bccb8f40fc",  # Volcanic columns
        "1569427387346-6df7900b9575"   # Pompeii ruins
    ],
    "middle_calamar": [
        "1565945887714-d5139f4eb0ce",  # Bioluminescent sea creature (primary - works)
        "1579952362624-b65f2de6f33d",  # Deep sea luminescent creature
        "1582967788606-11411c8485bf"   # Original
    ],
    "middle_plantas": [
        "1473448912268-2022ce9509d8",  # Forest floor with plants/mushrooms (primary - works)
        "1504198453319-5ce911bafcde",  # Mushrooms forest communication bed
        "1541819974-9d51061f0d3a"   # Original
    ],
    "middle_cangrejos": [
        "1551244072-5d12893278ab",  # High-quality crab on sea floor (primary - works)
        "1582967788606-11411c8485bf",  # Deep sea corals and floor
        "1603525281488-8cdde78ff9d3"   # Original
    ],
    "middle_reloj": [
        "1552832230-c0197dd311b5",  # Sundial/obelisk Rome (primary - works)
        "1581458850604-e0c1f5892dd5"   # Original (works)
    ],
    "middle_cometa": [
        "1444703686981-a3abbc4d4fe3",  # Comet flying in space (primary - works)
        "1462331940025-496dfbfc7564"   # Original (works)
    ],
    "middle_aurora": [
        "1531366936337-7785b8849b25",  # Aurora Borealis (original - works)
        "1506318137071-a8e063b4bec0"   # Cosmic lights fallback
    ],
    
    # Teen bracket (5)
    "teen_grafeno": [
        "1507668077129-56e32842fceb",  # High-tech glowing hexagonal grid (primary - works)
        "1581090466440-fb5c4a5cda11"   # Original (works)
    ],
    "teen_agujeros": [
        "1506318137071-a8e063b4bec0",  # Cosmic vortex black hole (primary - works)
        "1462331940025-496dfbfc7564"   # Original (works)
    ],
    "teen_enigma": [
        "1526374965328-7f61d4dc18c5",  # Retro typewriter machine (original - works)
        "1518770660439-4636190af475"   # Electronics motherboard
    ],
    "teen_tierra": [
        "1614730321146-b6fa6a46bcb4",  # Blue Marble Earth sphere (primary - works)
        "1451187580459-43490279c0fa"   # Original (works)
    ],
    "teen_materia": [
        "1451187580459-43490279c0fa",  # Abstract cosmic mesh network (primary - works)
        "1507413341-f2769065d8a4"   # Original (works)
    ]
}

for name, id_list in images_fallbacks.items():
    success = False
    for img_id in id_list:
        if "-" in img_id and len(img_id) > 15:
            url = f"https://images.unsplash.com/photo-{img_id}?auto=format&fit=crop&w=800&q=80"
        else:
            url = f"https://unsplash.com/photos/{img_id}/download"
        file_path = f"assets/explora/{name}.jpg"
        print(f"Trying to download {name} using ID {img_id}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                if response.status == 200:
                    with open(file_path, 'wb') as out_file:
                        out_file.write(response.read())
                    print(f"Successfully downloaded {name} using ID {img_id}!")
                    success = True
                    break
        except Exception as e:
            print(f"Failed candidate ID {img_id}: {e}")
        time.sleep(0.3)
        
    if not success:
        print(f"ERROR: All candidate images failed for {name}!")

print("Done!")
