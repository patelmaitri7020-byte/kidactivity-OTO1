/**
 * Kids Brain-Booster Puzzle Adventure - Enhanced Logic Engine
 * Commercial Grade 2.0 - MASTER SYSTEM EDITION
 */

// --- DATA MASTER LIBRARY ---
const TOPICS = {
    "Space": {
        "Explorer": ["Sun", "Moon", "Star", "Mars", "Ship", "Sky", "Rock"],
        "Hero": ["Rocket", "Planet", "Comet", "Meteor", "Saturn", "Apollo", "Orbit"],
        "Master": ["Astronaut", "Universe", "Galaxy", "Nebula", "Satellite", "Asteroid", "Gravity"]
    },
    "Ocean": {
        "Explorer": ["Fish", "Crab", "Seal", "Blue", "Wave", "Sand", "Shell"],
        "Hero": ["Turtle", "Whale", "Coral", "Shark", "Shrimp", "Lobster", "Trench"],
        "Master": ["Seahorse", "Jellyfish", "Submarine", "Octopus", "Plankton", "Anemone", "Manatee"]
    },
    "Animals": {
        "Explorer": ["Lion", "Tiger", "Bear", "Frog", "Duck", "Cat", "Bird"],
        "Hero": ["Zebra", "Giraffe", "Monkey", "Cheetah", "Dolphin", "Penguin", "Panda"],
        "Master": ["Kangaroo", "Elephant", "Crocodile", "Hippo", "Rhinoceros", "Leopard", "Buffalo"]
    },
    "Jungle": {
        "Explorer": ["Ape", "Bird", "Leaf", "Tree", "Vine", "Ant", "Bug"],
        "Hero": ["Gorilla", "Jaguar", "Parrot", "Toucan", "Sloth", "Python", "Lizard"],
        "Master": ["Chameleon", "Rainforest", "Tarantula", "Orangutan", "Chimpanzee", "Canopy", "Monsoon"]
    },
    "Dinosaurs": {
        "Explorer": ["Egg", "Jaw", "Bone", "Claw", "Tail", "Foot", "Roar"],
        "Hero": ["Fossil", "Raptor", "Spike", "Hunter", "Lizard", "Nest", "King"],
        "Master": ["Triceratops", "Stegosaurus", "Jurassic", "Pterodactyl", "Herbivore", "Carnivore", "Mammoth"]
    },
    "Food": {
        "Explorer": ["Pie", "Jam", "Cake", "Milk", "Pear", "Egg", "Bun"],
        "Hero": ["Apple", "Pizza", "Cheese", "Cookie", "Banana", "Burger", "Donut"],
        "Master": ["Broccoli", "Sandwich", "Pineapple", "Spaghetti", "Strawberry", "Muffin", "Pancake"]
    },
    "Sports": {
        "Explorer": ["Ball", "Run", "Goal", "Win", "Bat", "Cup", "Net"],
        "Hero": ["Soccer", "Tennis", "Helmet", "Hockey", "Player", "Basket", "Skates"],
        "Master": ["Basketball", "Marathon", "Gymnastics", "Volleyball", "Wrestling", "Stadium", "Champion"]
    },
    "School": {
        "Explorer": ["Pen", "Desk", "Book", "Glue", "Page", "Math", "Art"],
        "Hero": ["Teacher", "Pencil", "Eraser", "Recess", "Folder", "Ruler", "Lesson"],
        "Master": ["Library", "Notebook", "Principal", "Calendar", "Backpack", "Science", "Homework"]
    },
    "Weather": {
        "Explorer": ["Sun", "Rain", "Snow", "Wind", "Cold", "Hot", "Fog"],
        "Hero": ["Storm", "Cloud", "Breeze", "Frost", "Shower", "Thunder", "Freeze"],
        "Master": ["Hurricane", "Lightning", "Tornado", "Blizzard", "Rainbow", "Humidity", "Forecast"]
    },
    "Garden": {
        "Explorer": ["Bee", "Bud", "Dirt", "Rose", "Leaf", "Seed", "Dig"],
        "Hero": ["Flower", "Garden", "Shovel", "Water", "Grass", "Plant", "Bloom"],
        "Master": ["Butterfly", "Sunflower", "Fertilizer", "Greenhouse", "Botanical", "Ladybug", "Blossom"]
    },
    "Superheroes": {
        "Explorer": ["Cap", "Mask", "Hero", "Save", "Fly", "Zap", "Pow"],
        "Hero": ["Power", "Shield", "Brave", "Flight", "Rescue", "Secret", "Cape"],
        "Master": ["Justice", "Invisible", "Vigilante", "Courage", "Avenger", "Stealth", "Dynamic"]
    },
    "Robots": {
        "Explorer": ["Bot", "Gear", "Wire", "Zap", "Chip", "Bolt", "Iron"],
        "Hero": ["Android", "Remote", "Screen", "Battery", "Metal", "Button", "Laser"],
        "Master": ["Artificial", "Intelligence", "Mechanic", "Computer", "Circuit", "Program", "Robotic"]
    },
    "Pirates": {
        "Explorer": ["Ship", "Map", "Gold", "Sea", "Hook", "Flag", "Deck"],
        "Hero": ["Island", "Anchor", "Parrot", "Sailor", "Chest", "Cannon", "Shore"],
        "Master": ["Treasure", "Cutlass", "Navigator", "Adventure", "Compass", "Skeleton", "Captain"]
    },
    "Fantasy": {
        "Explorer": ["Wand", "Elf", "King", "Gem", "Oak", "Tree", "Gold"],
        "Hero": ["Wizard", "Dragon", "Castle", "Knight", "Magic", "Sword", "Crown"],
        "Master": ["Enchanted", "Mythology", "Kingdom", "Sorcerer", "Folklore", "Unicorn", "Legend"]
    },
    "Spies": {
        "Explorer": ["Spy", "Key", "Code", "Bag", "Pen", "Ink", "Hat"],
        "Hero": ["Secret", "Agent", "Shadow", "Hidden", "Clue", "Watch", "Glove"],
        "Master": ["Cryptic", "Detective", "Surveillance", "Mystery", "Mission", "Evidence", "Disguise"]
    },
    "Vehicles": {
        "Explorer": ["Car", "Bus", "Van", "Bike", "Boat", "Jet", "Taxi"],
        "Hero": ["Truck", "Train", "Plane", "Motor", "Wheel", "Driver", "Travel"],
        "Master": ["Motorcycle", "Helicopter", "Ambulance", "Spaceship", "Locomotive", "Transport", "Tractor"]
    },
    "Body": {
        "Explorer": ["Arm", "Leg", "Eye", "Ear", "Nose", "Hand", "Foot"],
        "Hero": ["Heart", "Brain", "Finger", "Tooth", "Elbow", "Knee", "Mouth"],
        "Master": ["Skeleton", "Muscle", "Digestion", "Shoulder", "Intestine", "Vertebra", "Lung"]
    },
    "Insects": {
        "Explorer": ["Ant", "Fly", "Bug", "Bee", "Moth", "Worm", "Tick"],
        "Hero": ["Beetle", "Spider", "Cricket", "Mantis", "Gnat", "Larva", "Wasp"],
        "Master": ["Grasshopper", "Dragonfly", "Mosquito", "Scorpion", "Caterpillar", "Firefly", "Termite"]
    },
    "Arctic": {
        "Explorer": ["Ice", "Cold", "Snow", "Fox", "Owl", "Fur", "White"],
        "Hero": ["Polar", "Husky", "Sled", "Frost", "Seal", "Wolf", "Whale"],
        "Master": ["Glacier", "Igloo", "Expedition", "Blizzard", "Penguin", "Northern", "Tundra"]
    },
    "Desert": {
        "Explorer": ["Sun", "Dry", "Sand", "Hot", "Red", "Rock", "Dust"],
        "Hero": ["Camel", "Oasis", "Cactus", "Dune", "Snake", "Heat", "Lizard"],
        "Master": ["Scorpion", "Mirage", "Scarcity", "Caravan", "Rattlesnake", "Arid", "Sahara"]
    },
    "Music": {
        "Explorer": ["Drum", "Song", "Note", "Sing", "Bell", "Beat", "Loud"],
        "Hero": ["Piano", "Guitar", "Flute", "Violin", "Brass", "Sound", "Radio"],
        "Master": ["Orchestra", "Symphony", "Instrument", "Keyboard", "Composer", "Harmony", "Rhythm"]
    },
    "Art": {
        "Explorer": ["Pen", "Ink", "Draw", "Red", "Blue", "Glue", "Clay"],
        "Hero": ["Paint", "Brush", "Sketch", "Color", "Pastel", "Paper", "Frame"],
        "Master": ["Masterpiece", "Sculpture", "Canvas", "Portrait", "Abstract", "Gallery", "Museum"]
    },
    "Healthy": {
        "Explorer": ["Eat", "Run", "Jump", "Sleep", "Rest", "Play", "Walk"],
        "Hero": ["Fruit", "Veggie", "Water", "Clean", "Strong", "Smile", "Soap"],
        "Master": ["Nutrition", "Exercise", "Vitamin", "Protein", "Wellness", "Energy", "Hydration"]
    },
    "Time": {
        "Explorer": ["Day", "Hour", "Year", "Noon", "Date", "Past", "Now"],
        "Hero": ["Clock", "Minute", "Second", "Today", "Month", "Early", "Watch"],
        "Master": ["Calendar", "Century", "Schedule", "Timeline", "Tomorrow", "Morning", "Midnight"]
    },
    "Clothing": {
        "Explorer": ["Hat", "Sock", "Shoe", "Belt", "Coat", "Tie", "Vest"],
        "Hero": ["Shirt", "Jacket", "Shorts", "Dress", "Pants", "Glove", "Scarf"],
        "Master": ["Cardigan", "Raincoat", "Pajamas", "Trousers", "Sweater", "Costume", "Uniform"]
    },
    "Feelings": {
        "Explorer": ["Sad", "Mad", "Glad", "Calm", "Shy", "Big", "Fun"],
        "Hero": ["Happy", "Scared", "Silly", "Bored", "Proud", "Angry", "Kind"],
        "Master": ["Excitement", "Frustrated", "Confident", "Joyful", "Nervous", "Peaceful", "Curious"]
    },
    "Fairy Tales": {
        "Explorer": ["Frog", "Wolf", "Pig", "Pink", "Red", "Old", "Bad"],
        "Hero": ["Fairy", "Prince", "Magic", "Giant", "Beast", "Queen", "Wish"],
        "Master": ["Cinderella", "Storybook", "Folklore", "Mermaid", "Sleeping", "Snow-white", "Charming"]
    },
    "Farm": {
        "Explorer": ["Cow", "Pig", "Hen", "Barn", "Hay", "Mud", "Dog"],
        "Hero": ["Horse", "Sheep", "Tractor", "Field", "Farmer", "Goat", "Duck"],
        "Master": ["Harvest", "Shepherd", "Agriculture", "Rooster", "Pasture", "Orchard", "Livestock"]
    },
    "Household": {
        "Explorer": ["Bed", "Door", "Lamp", "Rug", "Wall", "Desk", "Sink"],
        "Hero": ["Table", "Fridge", "Window", "Mirror", "Stove", "Phone", "Couch"],
        "Master": ["Furniture", "Appliance", "Microwave", "Television", "Curtains", "Cupboard", "Blanket"]
    },
    "Jobs": {
        "Explorer": ["Vet", "Cook", "Cop", "Doc", "Chef", "Boss", "Mail"],
        "Hero": ["Nurse", "Pilot", "Farmer", "Baker", "Actor", "Artist", "Fire"],
        "Master": ["Scientist", "Engineer", "Architect", "Musician", "Lawyer", "Business", "Designer"]
    }
};

const WORD_MAP = {
    // Space
    "Sun": "☀️", "Moon": "🌙", "Star": "⭐", "Mars": "🔴", "Ship": "🚀", "Sky": "🌌", "Rock": "⛰️",
    "Rocket": "🚀", "Planet": "🪐", "Comet": "☄️", "Meteor": "🌠", "Saturn": "🪐", "Apollo": "🚀", "Orbit": "🔄",
    "Astronaut": "👩‍🚀", "Universe": "🌌", "Galaxy": "🌌", "Nebula": "☁️", "Satellite": "🛰️", "Asteroid": "☄️", "Gravity": "🍎",
    // Ocean
    "Fish": "🐟", "Crab": "🦀", "Seal": "🦭", "Blue": "🔵", "Wave": "🌊", "Sand": "🏖️", "Shell": "🐚",
    "Turtle": "🐢", "Whale": "🐋", "Coral": "🪸", "Shark": "🦈", "Shrimp": "🦐", "Lobster": "🦞", "Trench": "🕳️",
    "Seahorse": "🦄", "Jellyfish": "🪼", "Submarine": "🚢", "Octopus": "🐙", "Plankton": "🦠", "Anemone": "🪸", "Manatee": "🐄",
    // Animals
    "Lion": "🦁", "Tiger": "🐯", "Bear": "🐻", "Frog": "🐸", "Duck": "🦆", "Cat": "🐱", "Bird": "🐦",
    "Zebra": "🦓", "Giraffe": "🦒", "Monkey": "🐒", "Cheetah": "🐆", "Dolphin": "🐬", "Penguin": "🐧", "Panda": "🐼",
    "Kangaroo": "🦘", "Elephant": "🐘", "Crocodile": "🐊", "Hippo": "🦛", "Rhinoceros": "🦏", "Leopard": "🐆", "Buffalo": "🐃",
    // Jungle
    "Ape": "🦍", "Leaf": "🍃", "Tree": "🌳", "Vine": "🪴", "Ant": "🐜", "Bug": "🪲",
    "Gorilla": "🦍", "Jaguar": "🐆", "Parrot": "🦜", "Toucan": "🐦", "Sloth": "🦥", "Python": "🐍", "Lizard": "🦎",
    "Chameleon": "🦎", "Rainforest": "🌲", "Tarantula": "🕷️", "Orangutan": "🦧", "Chimpanzee": "🐒", "Canopy": "🌲", "Monsoon": "🌧️",
    // Dinosaurs
    "Egg": "🥚", "Jaw": "🦷", "Bone": "🦴", "Claw": "🐾", "Tail": "Rex", "Foot": "🦶", "Roar": "🦁",
    "Fossil": "🐚", "Raptor": "🦖", "Spike": "🌵", "Hunter": "🏹", "Nest": "🪹", "King": "👑",
    "Triceratops": "🦖", "Stegosaurus": "🦕", "Jurassic": "🌴", "Pterodactyl": "🦖", "Herbivore": "🍃", "Carnivore": "🥩", "Mammoth": "🐘",
    // Food
    "Pie": "🥧", "Jam": "🍓", "Cake": "🍰", "Milk": "🥛", "Pear": "🍐", "Bun": "🍞",
    "Apple": "🍎", "Pizza": "🍕", "Cheese": "🧀", "Cookie": "🍪", "Banana": "🍌", "Burger": "🍔", "Donut": "🍩",
    "Broccoli": "🥦", "Sandwich": "🥪", "Pineapple": "🍍", "Spaghetti": "🍝", "Strawberry": "🍓", "Muffin": "🧁", "Pancake": "🥞",
    // Sports
    "Ball": "⚽", "Run": "🏃", "Goal": "🥅", "Win": "🏆", "Bat": "🏏", "Cup": "🏆", "Net": "🥅",
    "Soccer": "⚽", "Tennis": "🎾", "Helmet": "🪖", "Hockey": "🏒", "Player": "🏃", "Basket": "🏀", "Skates": "⛸️",
    "Basketball": "🏀", "Marathon": "🏃", "Gymnastics": "🤸", "Volleyball": "🏐", "Wrestling": "🤼", "Stadium": "🏟️", "Champion": "🏅",
    // School
    "Pen": "🖊️", "Desk": "🪑", "Book": "📚", "Glue": "🧪", "Page": "📄", "Math": "➕", "Art": "🎨",
    "Teacher": "👩‍🏫", "Pencil": "✏️", "Eraser": "🧼", "Recess": "🛝", "Folder": "📂", "Ruler": "📏", "Lesson": "📖",
    "Library": "📚", "Notebook": "📓", "Principal": "👨‍💼", "Calendar": "📅", "Backpack": "🎒", "Science": "🧪", "Homework": "📝",
    // Weather
    "Rain": "🌧️", "Snow": "❄️", "Wind": "💨", "Cold": "❄️", "Hot": "🔥", "Fog": "🌫️",
    "Storm": "⛈️", "Cloud": "☁️", "Breeze": "🍃", "Frost": "❄️", "Shower": "🌦️", "Thunder": "⚡", "Freeze": "🧊",
    "Hurricane": "🌀", "Lightning": "⚡", "Tornado": "🌪️", "Blizzard": "🌨️", "Rainbow": "🌈", "Humidity": "💧", "Forecast": "📺",
    // Garden
    "Bee": "🐝", "Bud": "🌱", "Dirt": "🫘", "Rose": "🌹", "Seed": "🌱", "Dig": "⛏️",
    "Flower": "🌸", "Garden": "🏡", "Shovel": "🥄", "Water": "💧", "Grass": "🌱", "Plant": "🪴", "Bloom": "🌼",
    "Butterfly": "🦋", "Sunflower": "🌻", "Fertilizer": "🧪", "Greenhouse": "🏠", "Botanical": "🌲", "Ladybug": "🐞", "Blossom": "🌸",
    // Superheroes
    "Cap": "🧢", "Mask": "🎭", "Hero": "🦸", "Save": "🆘", "Fly": "🦅", "Zap": "⚡", "Pow": "💥",
    "Power": "⚡", "Shield": "🛡️", "Brave": "🦁", "Flight": "✈️", "Rescue": "🚁", "Secret": "🕵️", "Cape": "🧣",
    "Justice": "⚖️", "Invisible": "👤", "Vigilante": "🦹", "Courage": "🛡️", "Avenger": "🅰️", "Stealth": "👤", "Dynamic": "🏃",
    // Robots
    "Bot": "🤖", "Gear": "⚙️", "Wire": "🔌", "Chip": "💾", "Bolt": "🔩", "Iron": "⛓️",
    "Android": "🤖", "Remote": "🎮", "Screen": "🖥️", "Battery": "🔋", "Metal": "⛓️", "Button": "🔘", "Laser": "🔫",
    "Artificial": "🧠", "Intelligence": "🧠", "Mechanic": "👷", "Computer": "💻", "Circuit": "🔌", "Program": "⌨️", "Robotic": "🤖",
    // Pirates
    "Hook": "🪝", "Flag": "🏴‍☠️", "Deck": "🚢",
    "Island": "🏝️", "Anchor": "⚓", "Parrot": "🦜", "Sailor": "👨‍✈️", "Chest": "📦", "Cannon": "💣", "Shore": "🏖️",
    "Treasure": "💎", "Cutlass": "⚔️", "Navigator": "🧭", "Adventure": "🗺️", "Compass": "🧭", "Skeleton": "💀", "Captain": "🏴‍☠️",
    // Fantasy & Magic & Spies & Vehicles & Body & Insects & Arctic & Desert & Music & Art & Healthy & Time & Clothing & Feelings & Fairy Tales & Farm & Household
    "Wand": "🪄", "Elf": "🧝", "Gem": "💎", "Oak": "🌳",
    "Wizard": "🧙", "Dragon": "🐉", "Castle": "🏰", "Knight": "🛡️", "Magic": "✨", "Sword": "⚔️", "Crown": "👑",
    "Enchanted": "✨", "Mythology": "🔱", "Kingdom": "🏰", "Sorcerer": "🧙", "Folklore": "📖", "Unicorn": "🦄", "Legend": "📜",
    "Spy": "🕵️", "Key": "🔑", "Code": "🔐", "Bag": "🎒", "Ink": "✒️", "Hat": "🎩",
    "Secret": "🤫", "Agent": "🕵️", "Shadow": "👤", "Hidden": "🔒", "Clue": "🔍", "Watch": "⌚", "Glove": "🥊",
    "Cryptic": "🧩", "Detective": "🕵️", "Surveillance": "📹", "Mystery": "❓", "Mission": "🚩", "Evidence": "📁", "Disguise": "🎭",
    "Car": "🚗", "Bus": "🚌", "Van": "🚐", "Bike": "🚲", "Boat": "⛵", "Jet": "✈️", "Taxi": "🚕",
    "Truck": "🚚", "Train": "🚂", "Plane": "✈️", "Motor": "⚙️", "Wheel": "🎡", "Driver": "👨‍✈️", "Travel": "🗺️",
    "Motorcycle": "🏍️", "Helicopter": "🚁", "Ambulance": "🚑", "Spaceship": "🚀", "Locomotive": "🚂", "Transport": "🚚", "Tractor": "🚜",
    "Arm": "💪", "Leg": "🦵", "Eye": "👁️", "Ear": "👂", "Nose": "👃", "Hand": "✋", "Foot": "🦶",
    "Heart": "❤️", "Brain": "🧠", "Finger": "☝️", "Tooth": "🦷", "Elbow": "💪", "Knee": "🦵", "Mouth": "👄",
    "Skeleton": "💀", "Muscle": "💪", "Digestion": "🤰", "Shoulder": "🤷", "Intestine": "🐍", "Vertebra": "🦴", "Lung": "🫁",
    "Ant": "🐜", "Fly": "🪰", "Bug": "🪲", "Moth": "🦋", "Worm": "🪱", "Tick": "🕷️",
    "Beetle": "🪲", "Spider": "🕷️", "Cricket": "🦗", "Mantis": "🦗", "Gnat": "🪰", "Larva": "🐛", "Wasp": "🐝",
    "Grasshopper": "🦗", "Dragonfly": "🛸", "Mosquito": "🦟", "Scorpion": "🦂", "Caterpillar": "🐛", "Firefly": "💡", "Termite": "🐜",
    "Ice": "🧊", "Cold": "❄️", "Fox": "🦊", "Owl": "🦉", "Fur": "🧥", "White": "⚪",
    "Polar": "🐻", "Husky": "🐕", "Sled": "🛷", "Frost": "❄️", "Seal": "🦭", "Wolf": "🐺", "Whale": "🐋",
    "Glacier": "🧊", "Igloo": "🏠", "Expedition": "🏔️", "Blizzard": "🌨️", "Penguin": "🐧", "Northern": "🌌", "Tundra": "🏔️",
    "Dry": "🌵", "Sand": "🏖️", "Hot": "🔥", "Red": "🔴", "Dust": "💨",
    "Camel": "🐫", "Oasis": "🏝️", "Cactus": "🌵", "Dune": "🏔️", "Snake": "🐍", "Heat": "☀️", "Lizard": "🦎",
    "Scorpion": "🦂", "Mirage": "🌀", "Scarcity": "🌵", "Caravan": "🐪", "Rattlesnake": "🐍", "Arid": "🏜️", "Sahara": "🏜️",
    "Drum": "🥁", "Song": "🎵", "Note": "🎶", "Sing": "🎤", "Bell": "🔔", "Beat": "🥁", "Loud": "📢",
    "Piano": "🎹", "Guitar": "🎸", "Flute": "🎶", "Violin": "🎻", "Brass": "🎺", "Sound": "🔊", "Radio": "📻",
    "Orchestra": "🎻", "Symphony": "🎼", "Instrument": "🎹", "Composer": "🎼", "Harmony": "🎶", "Rhythm": "🥁",
    "Draw": "✏️", "Clay": "🏺",
    "Paint": "🎨", "Brush": "🖌️", "Sketch": "📝", "Color": "🌈", "Pastel": "🖍️", "Paper": "📄", "Frame": "🖼️",
    "Masterpiece": "🖼️", "Sculpture": "🗿", "Canvas": "🎨", "Portrait": "👤", "Abstract": "🌀", "Gallery": "🏛️", "Museum": "🏛️",
    "Jump": "🏃", "Sleep": "😴", "Rest": "🛌", "Play": "🎮", "Walk": "🚶",
    "Fruit": "🍎", "Veggie": "🥦", "Water": "💧", "Clean": "✨", "Strong": "💪", "Smile": "😊", "Soap": "🧼",
    "Nutrition": "🍎", "Exercise": "🏋️", "Vitamin": "💊", "Protein": "🥩", "Wellness": "🧘", "Energy": "⚡", "Hydration": "💧",
    "Day": "☀️", "Hour": "⌛", "Year": "📅", "Noon": "🕛", "Date": "📅", "Past": "🕰️", "Now": "⏱️",
    "Minute": "⏲️", "Second": "⏱️", "Today": "📅", "Month": "📅", "Early": "🌅",
    "Century": "📜", "Schedule": "📅", "Timeline": "⌛", "Tomorrow": "🌅", "Morning": "🌅", "Midnight": "🌙",
    "Sock": "🧦", "Belt": "🧥", "Coat": "🧥", "Tie": "👔", "Vest": "🎽",
    "Shirt": "👕", "Jacket": "🧥", "Shorts": "🩳", "Dress": "👗", "Pants": "👖", "Scarf": "🧣",
    "Cardigan": "🧥", "Raincoat": "🧥", "Pajamas": "🧥", "Trousers": "👖", "Sweater": "🧥", "Costume": "🎭", "Uniform": "🧥",
    "Sad": "😢", "Mad": "😠", "Glad": "😊", "Calm": "🧘", "Shy": "😳", "Big": "🐘", "Fun": "🎉",
    "Happy": "😂", "Scared": "😨", "Silly": "🤪", "Bored": "😑", "Proud": "😌", "Angry": "😡", "Kind": "😇",
    "Excitement": "🤩", "Frustrated": "😤", "Confident": "😎", "Joyful": "😁", "Nervous": "😰", "Peaceful": "🧘", "Curious": "🧐",
    "Prince": "🤴", "Wish": "✨",
    "Cinderella": "👠", "Storybook": "📖", "Mermaid": "🧜‍♀️", "Sleeping": "😴", "Snow-white": "🍎", "Charming": "🤴",
    "Hen": "🐔", "Barn": "🏠", "Hay": "🌾", "Mud": "💩",
    "Horse": "🐎", "Sheep": "🐑", "Tractor": "🚜", "Field": "🌾", "Farmer": "👨‍🌾", "Goat": "🐐",
    "Harvest": "🌾", "Shepherd": "👨‍🌾", "Agriculture": "🚜", "Rooster": "🐓", "Pasture": "🐎", "Orchard": "🍎", "Livestock": "🐄",
    "Bed": "🛏️", "Door": "🚪", "Lamp": "💡", "Rug": "🧶", "Wall": "🧱", "Sink": "🚰",
    "Fridge": "🧊", "Mirror": "🪞", "Stove": "🍳", "Couch": "🛋️",
    "Furniture": "🛋️", "Appliance": "🔌", "Microwave": "🏠", "Television": "📺", "Curtains": "🪟", "Cupboard": "🚪", "Blanket": "🛌",
    "Vet": "🩺", "Cook": "🧑‍🍳", "Cop": "👮", "Doc": "🩺", "Chef": "🧑‍🍳", "Boss": "👔", "Mail": "📬",
    "Nurse": "👩‍⚕️", "Baker": "🥖", "Actor": "🎭", "Fire": "🔥",
    "Scientist": "👩‍🔬", "Engineer": "👷", "Architect": "🏛️", "Musician": "🎸", "Lawyer": "⚖️", "Business": "👔", "Designer": "🎨"
};

const SENTENCES = {
    "Space": ["The astronaut looks at the bright galaxy stars.", "A metal rocket flies fast to the red planet."],
    "Ocean": ["Colorful coral reefs are home to many fish.", "A large whale swims deep in the blue ocean."],
    "Animals": ["A brave lion walks through the tall grass.", "The giant elephant sprays water in the river."],
    "Jungle": ["The colorful parrot flies over the wide river.", "A cute monkey jumps between the green trees."],
    "Dinosaurs": ["The T-Rex had very sharp teeth and a loud roar.", "Giant dinosaurs lived on Earth a long time ago."],
    "Food": ["The hot pizza and burger taste very good.", "I drink sweet orange juice with fresh bread."],
    "Sports": ["We play football and cricket at the park.", "I hit the tennis ball with my wooden bat."],
    "School": ["I put my sharp pencil inside my big bag.", "The yellow school bus stops near the library."],
    "Weather": ["A bright rainbow appears after the rain.", "Thunder and lightning happen during a storm."],
    "Garden": ["Beautiful butterflies fly near the sunflowers.", "The gardener used a shovel to plant a rose."],
    "Superheroes": ["The hero wears a red cape and a blue mask.", "A strong shield protects the city from danger."],
    "Robots": ["The smart robot is typing code on the laptop.", "The computer screen shows a funny video."],
    "Pirates": ["The pirate ship sailed to the secret island.", "I found a gold chest using the old map."],
    "Fantasy": ["The wizard cast a magic spell with a wand.", "A brave knight guards the king's castle."],
    "Spies": ["Follow the secret clue to find the message.", "Use the silver key to unlock the secret door."],
    "Vehicles": ["The pilot flies the airplane through the clouds.", "A long train moves fast on the metal tracks."],
    "Body": ["My heart beats fast when I run and play.", "My brain helps me think and solve puzzles."],
    "Insects": ["A busy bee collects pollen from the flowers.", "The spider spins a web to catch small bugs."],
    "Arctic": ["A polar bear walks on the cold white ice.", "The husky dog pulls a sled through the snow."],
    "Desert": ["The camel walks across the hot sand dunes.", "A rattlesnake hides behind the dry cactus."],
    "Music": ["We play the piano and guitar in the band.", "The orchestra plays a beautiful song together."],
    "Art": ["I used a brush to paint a colorful picture.", "The artist drew a sketch in the notebook."],
    "Healthy": ["Eating fresh fruits and veggies is good for you.", "Drinking clean water helps you stay healthy."],
    "Time": ["The calendar shows the days and the months.", "Today is the first day of the new year."],
    "Clothing": ["I wear a warm coat and a scarf in winter.", "I put on my shoes and socks before school."],
    "Feelings": ["I feel very happy when I play with my friends.", "Being kind to others makes everyone feel glad."],
    "Fairy Tales": ["The fairy godmother made a magic wish.", "A giant beast lived in the old castle."],
    "Farm": ["The farmer drives a tractor in the green field.", "The rooster wakes up the farm in the morning."],
    "Household": ["I look in the mirror before I leave the house.", "The soft blanket keeps me warm in bed."],
    "Jobs": ["The kind doctor helps you feel better.", "The chef cooks a delicious meal in the kitchen."]
};

const RIDDLES_FALLBACK = [
    { q: "The more of this there is, the less you see. What is it?", a: "DARKNESS" },
    { q: "What has keys, but no locks; space, but no room?", a: "KEYBOARD" },
    { q: "I have a heart that doesn't beat. What am I?", a: "ARTICHOKE" },
    { q: "What starts with T, ends with T, and has T in it?", a: "TEAPOT" },
    { q: "What has eyes but cannot see?", a: "POTATO" }
];

// --- State Management ---
let currentState = {
    type: 'scramble',
    ageGroup: '5-7',
    theme: 'Animals', // Topic theme
    bgColor: '#ffffff' // Visual theme
};

// --- DOM Elements ---
let elements = {};

function initElements() {
    elements = {
        typeSelect: document.getElementById('puzzle-type'),
        ageBtns: document.querySelectorAll('.age-btn'),
        themeBtns: document.querySelectorAll('.theme-btn'),
        puzzleInput: document.getElementById('puzzle-input'),
        generateBtn: document.getElementById('generate-btn'),
        downloadBtn: document.getElementById('download-btn'),
        downloadAnsBtn: document.getElementById('download-ans-btn'),
        transparentToggle: document.getElementById('transparent-bg'),

        card: document.getElementById('puzzle-card'),
        cardTitle: document.getElementById('card-title'),
        cardContent: document.getElementById('card-content'),
        storyTitle: document.getElementById('story-title'),
        mascotStatus: document.getElementById('mascot-status'),

        ansCard: document.getElementById('answer-card'),
        ansContent: document.getElementById('ans-content'),
        ansCardInfo: document.getElementById('ans-card-info')
    };
}

// --- Interaction Logic ---
const STORY_CONTEXT = {
    'scramble': { '5-7': '🕵️ Mission: Word Detective!', '8-10': '🧠 Word Cracking Elite!', '11-13': '🎖️ Lexical Commander Quest!' },
    'vowels': { '5-7': '🅰️ The Great Vowel Hunt!', '8-10': '💨 Vowel Vanish Mystery!', '11-13': '🌪️ Complete Vowel Void!' },
    'spycode': { '5-7': '🗝️ Secret Agent Academy!', '8-10': '🕵️ Top Secret Encryption!', '11-13': '🔐 Shadow Cipher Protocol!' },
    'wordsearch': { '5-7': '🔍 Little Seeker Quest!', '8-10': '🔎 Hidden Master Search!', '11-13': '🎯 Radar Expert Mission!' },
    'riddle': { '5-7': '🧚 Garden of Riddles!', '8-10': '🧩 Enigma Solver Squad!', '11-13': '🗿 Ancient Sage Challenge!' }
};

const MASCOT_MESSAGES = [
    "Let’s solve this together!", "Great thinking!", "You’re a puzzle star!", "Adventure awaits, Hero!", "Your brain is getting stronger!", "Puzzles make you smarter!", "Unlock your super brain!"
];

// --- Initialization ---
function init() {
    initElements();
    setupEventListeners();
    if (elements.puzzleInput) elements.puzzleInput.value = "Animals";
    setTimeout(generatePuzzle, 500);
}

function setupEventListeners() {
    if (elements.typeSelect) elements.typeSelect.onchange = (e) => { currentState.type = e.target.value; };
    if (elements.ageBtns) {
        elements.ageBtns.forEach(btn => {
            btn.onclick = () => {
                elements.ageBtns.forEach(b => { b.classList.remove('active', 'bg-indigo-600', 'text-white'); b.classList.add('bg-white', 'text-slate-600'); });
                btn.classList.add('active', 'bg-indigo-600', 'text-white');
                btn.classList.remove('bg-white', 'text-slate-600');
                currentState.ageGroup = btn.dataset.age;
            };
        });
    }
    if (elements.themeBtns) {
        elements.themeBtns.forEach(btn => {
            btn.onclick = () => {
                elements.themeBtns.forEach(b => b.classList.remove('active', 'border-indigo-500'));
                btn.classList.add('active', 'border-indigo-500');
                currentState.bgColor = btn.dataset.color;
                if (elements.card) elements.card.style.backgroundColor = btn.dataset.color;
            };
        });
    }
    if (elements.generateBtn) {
        elements.generateBtn.onclick = () => {
            if (elements.mascotStatus) elements.mascotStatus.innerText = MASCOT_MESSAGES[Math.floor(Math.random() * MASCOT_MESSAGES.length)];
            generatePuzzle();
        };
    }
    if (elements.downloadBtn) elements.downloadBtn.onclick = () => exportToPng(elements.card, `puzzle-${currentState.type}`);
    if (elements.downloadAnsBtn) elements.downloadAnsBtn.onclick = () => exportToPng(elements.ansCard, `answer-key`);
}

function classifyTheme(input) {
    const raw = input.trim().toLowerCase();
    if (!raw) return "Animals";
    const themes = Object.keys(TOPICS);
    const match = themes.find(t => t.toLowerCase() === raw || raw.includes(t.toLowerCase()));
    if (match) return match;
    for (const [theme, levels] of Object.entries(TOPICS)) {
        for (const [lvl, words] of Object.entries(levels)) {
            if (words.some(w => raw.includes(w.toLowerCase()))) return theme;
        }
    }
    return "Animals";
}

function generatePuzzle() {
    const rawInput = elements.puzzleInput.value;
    const theme = classifyTheme(rawInput);
    currentState.theme = theme;
    let level = "Explorer";
    if (currentState.ageGroup === '8-10') level = "Hero";
    if (currentState.ageGroup === '11-13') level = "Master";
    let words = [...TOPICS[theme][level]];
    elements.cardContent.innerHTML = "";
    elements.ansContent.innerHTML = "";
    if (elements.storyTitle) elements.storyTitle.innerText = STORY_CONTEXT[currentState.type][currentState.ageGroup];
    if (elements.ansCardInfo) elements.ansCardInfo.innerText = `${theme.toUpperCase()} MISSION KEY`;
    const mascotBox = document.querySelector('.mascot-circle');
    if (mascotBox) {
        const firstWord = words[0];
        mascotBox.innerText = WORD_MAP[firstWord] || "🦊";
    }
    switch (currentState.type) {
        case 'scramble': renderScramble(words); break;
        case 'vowels': renderVowels(words); break;
        case 'spycode': renderSpyCode(words); break;
        case 'wordsearch': renderWordSearch(words); break;
        case 'riddle': renderRiddles(theme, level); break;
    }
}

function renderScramble(words) {
    elements.cardTitle.innerText = "Word Scramble";
    const container = document.createElement('div');
    container.className = "w-full space-y-8 mt-10";
    words.forEach((word, i) => {
        const solution = word.toUpperCase();
        let scrambled;
        do { scrambled = solution.split('').sort(() => 0.5 - Math.random()).join(''); } while (scrambled === solution && solution.length > 1);
        const row = document.createElement('div');
        row.className = "flex items-center gap-12";
        row.innerHTML = `<div class="flex-1 text-center text-slate-800 font-bold italic text-4xl min-h-[60px] flex items-center justify-center gap-6"><span class="text-5xl">${WORD_MAP[word] || "✨"}</span><span>${scrambled}</span></div><div class="flex-[1.5] border-b-2 border-slate-400 h-16"></div>`;
        container.appendChild(row);
        addAnswerItem(`${i + 1}. ${scrambled} = ${solution}`);
    });
    elements.cardContent.appendChild(container);
}

function renderVowels(words) {
    elements.cardTitle.innerText = "Vowel Vanisher";
    const container = document.createElement('div');
    container.className = "grid grid-cols-2 gap-x-12 gap-y-16 w-full mt-12";
    const vArr = ['A', 'E', 'I', 'O', 'U', 'Y'];
    words.forEach((word, i) => {
        const solution = word.toUpperCase();
        let chars = solution.split('');
        let vIdx = chars.map((c, idx) => vArr.includes(c) ? idx : -1).filter(idx => idx !== -1);
        let maskProb = currentState.ageGroup === '5-7' ? 0.3 : (currentState.ageGroup === '8-10' ? 0.6 : 0.95);
        let maskCount = Math.max(1, Math.ceil(vIdx.length * maskProb));
        if (maskCount >= vIdx.length && vIdx.length > 1 && currentState.ageGroup !== '11-13') maskCount = vIdx.length - 1;
        let toMask = vIdx.sort(() => 0.5 - Math.random()).slice(0, maskCount);
        const wrap = document.createElement('div');
        wrap.className = "bg-white p-8 rounded-[32px] border-2 border-slate-50 shadow-sm relative pt-12 flex flex-col items-center";
        wrap.innerHTML = `<span class="absolute left-1/2 -top-8 -translate-x-1/2 text-5xl bg-white p-2 rounded-full shadow-md">${WORD_MAP[word] || "✨"}</span>`;
        const display = document.createElement('div');
        display.className = "text-4xl font-black text-slate-800 tracking-widest flex items-center border-b-4 border-slate-700 h-20";
        chars.forEach((c, idx) => {
            if (toMask.includes(idx)) {
                const s = document.createElement('span'); s.className = "w-8 border-b-4 border-slate-300 mx-1 mb-1 h-10";
                display.appendChild(s);
            } else { display.appendChild(document.createTextNode(c)); }
        });
        wrap.appendChild(display);
        container.appendChild(wrap);
        addAnswerItem(`${i + 1}. ${solution}`);
    });
    elements.cardContent.appendChild(container);
}

function renderSpyCode(words) {
    elements.cardTitle.innerText = "Secret Spy Code";
    const container = document.createElement('div');
    container.className = "w-full space-y-12 mt-8";
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const shuffled = [...alpha].sort(() => 0.5 - Math.random());
    const cipher = {}; alpha.forEach((c, i) => cipher[c] = shuffled[i]);
    let hintCount = currentState.ageGroup === '5-7' ? 10 : (currentState.ageGroup === '8-10' ? 3 : 0);
    let hints = alpha.sort(() => 0.5 - Math.random()).slice(0, hintCount);
    const keyBox = document.createElement('div');
    keyBox.className = "grid grid-cols-4 gap-4 p-8 bg-slate-50 rounded-[40px] border-2 border-indigo-100 font-bold text-indigo-400";
    hints.forEach(h => { keyBox.innerHTML += `<div class="text-center"><span class="text-indigo-600 text-xl">${h}</span> = ${cipher[h]}</div>`; });
    if (hintCount === 0) keyBox.innerHTML = '<div class="col-span-4 text-center text-slate-400 italic">Top Secret: No Hints! Decode the whole logic.</div>';
    container.appendChild(keyBox);
    words.slice(0, 5).forEach(word => {
        const row = document.createElement('div'); row.className = "flex flex-wrap gap-4 justify-center";
        word.toUpperCase().split("").forEach(char => {
            row.innerHTML += `<div class="flex flex-col items-center gap-2"><div class="code-tile w-14 h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center font-black text-2xl">${cipher[char]}</div><div class="w-14 h-14 border-2 border-dotted border-slate-300 rounded-2xl flex items-center justify-center font-black text-indigo-500 text-2xl">${hints.includes(char) ? char : ""}</div></div>`;
        });
        container.appendChild(row);
    });
    elements.cardContent.appendChild(container);
    Object.entries(cipher).sort().forEach(([k, v]) => addAnswerItem(`${k} = ${v}`));
}

function renderWordSearch(words) {
    elements.cardTitle.innerText = "Word Search Seek";
    const size = currentState.ageGroup === '5-7' ? 10 : (currentState.ageGroup === '8-10' ? 12 : 15);
    const grid = Array(size).fill().map(() => Array(size).fill(''));
    const sol = [];
    words.forEach(w => {
        const s = w.toUpperCase();
        let placed = false, att = 0;
        while (!placed && att < 100) {
            const dirs = [{ r: 0, c: 1 }, { r: 1, c: 0 }];
            if (currentState.ageGroup !== '5-7') dirs.push({ r: 1, c: 1 }, { r: -1, c: 1 });
            if (currentState.ageGroup === '11-13') dirs.push({ r: 0, c: -1 }, { r: -1, c: 0 }, { r: 1, c: -1 }, { r: -1, c: -1 });
            const dir = dirs[Math.floor(Math.random() * dirs.length)];
            const r = Math.floor(Math.random() * size), c = Math.floor(Math.random() * size);
            let over = false;
            if (r + dir.r * s.length < 0 || r + dir.r * s.length >= size || c + dir.c * s.length < 0 || c + dir.c * s.length >= size) over = true;
            if (!over) { for (let i = 0; i < s.length; i++) { const ch = grid[r + i * dir.r][c + i * dir.c]; if (ch !== '' && ch !== s[i]) over = true; } }
            if (!over) { for (let i = 0; i < s.length; i++) grid[r + i * dir.r][c + i * dir.c] = s[i]; placed = true; sol.push(s); }
            att++;
        }
    });
    const L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) if (grid[i][j] === '') grid[i][j] = L[Math.floor(Math.random() * 26)];
    const gEl = document.createElement('div');
    gEl.className = "ws-grid mt-10 p-6 bg-slate-50 rounded-[40px] border-4 border-slate-100";
    gEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.forEach(row => row.forEach(char => {
        const d = document.createElement('div'); d.className = "ws-cell w-10 h-10 flex items-center justify-center font-bold text-lg bg-white border border-slate-50 rounded-lg"; d.innerText = char; gEl.appendChild(d);
    }));
    const list = document.createElement('div');
    list.className = "mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full px-12";
    sol.forEach(w => { list.innerHTML += `<div class="bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 font-extrabold text-sm text-center">◽ ${w}</div>`; addAnswerItem(w); });
    elements.cardContent.appendChild(gEl);
    elements.cardContent.appendChild(list);
}

function renderRiddles(theme, level) {
    elements.cardTitle.innerText = "Riddle Master";
    const container = document.createElement('div');
    container.className = "w-full space-y-12 mt-12 px-6";
    let riddleList = RIDDLES_FALLBACK;
    const themeSentence = SENTENCES[theme];
    if (themeSentence) {
        riddleList = themeSentence.map(s => ({ q: "Decode this secret sentence!", a: s.toUpperCase() }));
    }
    riddleList.slice(0, 3).forEach((rid, i) => {
        const item = document.createElement('div');
        item.className = "p-10 bg-blue-50 rounded-[40px] border-2 border-blue-100 flex gap-8 items-center shadow-sm relative";
        item.innerHTML = `<div class="text-6xl">💡</div><div class="flex-1"><div class="text-xs font-black text-blue-300 uppercase mb-2 tracking-widest">Puzzle #${i + 1}</div><div class="text-2xl font-bold text-slate-700 leading-tight mb-6">${rid.q}</div><div class="border-b-4 border-dotted border-blue-200 h-16 w-full italic text-blue-100 flex items-end pb-2">Your answer...</div></div>`;
        container.appendChild(item);
        addAnswerItem(`${i + 1}. ${rid.a}`);
    });
    elements.cardContent.appendChild(container);
}

function addAnswerItem(text) {
    const p = document.createElement('div'); p.innerText = text; p.className = "py-2 border-b border-indigo-50 leading-tight text-sm font-bold";
    if (elements.ansContent) elements.ansContent.appendChild(p);
}

async function exportToPng(target, filename) {
    if (!target) return;
    const isT = elements.transparentToggle?.checked || false;
    try {
        const canvas = await html2canvas(target, {
            scale: 3, backgroundColor: isT ? null : currentState.bgColor, onclone: (doc) => {
                const p = doc.getElementById('puzzle-card'), a = doc.getElementById('answer-card');
                if (p) { p.style.boxShadow = "none"; p.style.borderRadius = "0"; }
                if (a) { a.style.boxShadow = "none"; a.style.borderRadius = "0"; }
            }
        });
        const link = document.createElement('a'); link.download = `${filename}.png`; link.href = canvas.toDataURL('image/png'); link.click();
    } catch (e) { alert("Download failed. Please try again."); }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
