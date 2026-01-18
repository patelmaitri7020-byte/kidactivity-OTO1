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
    },
    "Amusement Park": {
        "Explorer": ["Ride", "Fun", "Fast", "Game", "Pop", "Park", "Tent"],
        "Hero": ["Coaster", "Ticket", "Ferris", "Cotton", "Candy", "Prize", "Slide"],
        "Master": ["Rollercoaster", "Carousel", "Excitement", "Midway", "Carnival", "Souvenir", "Thrill"]
    },
    "Gardening": {
        "Explorer": ["Dirt", "Seed", "Pot", "Hoe", "Bud", "Sun", "Dig"],
        "Hero": ["Shovel", "Trowel", "Sprout", "Gloves", "Water", "Plant", "Roots"],
        "Master": ["Horticulture", "Greenhouse", "Fertilizer", "Cultivate", "Harvest", "Pesticide", "Organic"]
    },
    "Archaeology": {
        "Explorer": ["Dig", "Old", "Bone", "Pot", "Dirt", "Map", "Rock"],
        "Hero": ["Fossil", "Shovel", "Relic", "Ancient", "Ruins", "Brush", "Site"],
        "Master": ["Artifact", "Civilization", "Expedition", "Excavate", "Hieroglyphics", "Pyramid", "Pharaoh"]
    },
    "Camping": {
        "Explorer": ["Tent", "Fire", "Bag", "Woods", "Log", "Hike", "Lake"],
        "Hero": ["Smores", "Lantern", "Compass", "Trail", "Cooler", "Forest", "Gear"],
        "Master": ["Wilderness", "Backpack", "Navigation", "Survival", "Expedition", "Sleeping", "Terrain"]
    },
    "Construction": {
        "Explorer": ["Saw", "Hammer", "Nail", "Wood", "Hard", "Hat", "Glue"],
        "Hero": ["Driller", "Shovel", "Loader", "Cement", "Bricks", "Crane", "Blueprint"],
        "Master": ["Architecture", "Engineering", "Scaffolding", "Excavator", "Foundation", "Steel", "Structure"]
    },
    "Invention": {
        "Explorer": ["Idea", "Plan", "New", "Tool", "Gear", "Lamp", "Work"],
        "Hero": ["Create", "Device", "Engine", "Patent", "Prototype", "Sketch", "Light"],
        "Master": ["Innovation", "Laboratory", "Discovery", "Experiment", "Technology", "Ingenuity", "Pioneer"]
    },
    "Geography": {
        "Explorer": ["Map", "Land", "Sea", "Hill", "Peak", "Flag", "Road"],
        "Hero": ["Island", "River", "Desert", "Valley", "Coast", "Border", "Globe"],
        "Master": ["Continent", "Peninsula", "Archipelago", "Latitude", "Longitude", "Topography", "Equator"]
    },
    "Astronomy": {
        "Explorer": ["Sun", "Moon", "Star", "Sky", "Dark", "Glow", "Rock"],
        "Hero": ["Planet", "Meteor", "Comet", "Solar", "System", "Orbit", "Crater"],
        "Master": ["Constellation", "Galaxy", "Observatory", "Supernova", "Lightyear", "Telescope", "Blackhole"]
    },
    "Detective": {
        "Explorer": ["Spy", "Clue", "Key", "Note", "Hat", "Case", "Bag"],
        "Hero": ["Search", "Finger", "Print", "Secret", "Agent", "Badge", "Trace"],
        "Master": ["Investigation", "Evidence", "Interrogate", "Mystery", "Undercover", "Suspicious", "Solve"]
    },
    "Mythology": {
        "Explorer": ["Zeus", "God", "Wing", "Gold", "Hero", "Fire", "King"],
        "Hero": ["Dragon", "Pegasus", "Phoenix", "Triton", "Legend", "Statue", "Temple"],
        "Master": ["Labyrinth", "Centaur", "Minotaur", "Olympian", "Prophecy", "Hercules", "Immortality"]
    },
    "Kitchen Tools": {
        "Explorer": ["Cup", "Pan", "Fork", "Bowl", "Spoon", "Pot", "Knife"],
        "Hero": ["Whisk", "Grater", "Peeler", "Toaster", "Kettle", "Ladle", "Spatula"],
        "Master": ["Colander", "Blender", "Processor", "Strainer", "Rollingpin", "Utensils", "Cookware"]
    },
    "Fruit Basket": {
        "Explorer": ["Pear", "Kiwi", "Fig", "Lime", "Plum", "Grape", "Apple"],
        "Hero": ["Banana", "Mango", "Peach", "Cherry", "Berry", "Melon", "Orange"],
        "Master": ["Pomegranate", "Raspberry", "Apricot", "Tangerine", "Nectarine", "Grapefruit", "Avocado"]
    },
    "Vegetable Garden": {
        "Explorer": ["Corn", "Pea", "Bean", "Yam", "Kale", "Leek", "Beet"],
        "Hero": ["Carrot", "Potato", "Tomato", "Onion", "Garlic", "Radish", "Pepper"],
        "Master": ["Cauliflower", "Eggplant", "Zucchini", "Asparagus", "Broccoli", "Spinach", "Artichoke"]
    },
    "Morning Routine": {
        "Explorer": ["Soap", "Comb", "Bed", "Tooth", "Face", "Bath", "Sink"],
        "Hero": ["Brush", "Towel", "Mirror", "Shower", "Pajamas", "Lotion", "Cream"],
        "Master": ["Hygiene", "Toothpaste", "Grooming", "Wardrobe", "Breakfast", "Schedule", "Refresh"]
    },
    "Technology": {
        "Explorer": ["Icon", "App", "Web", "Link", "Code", "Screen", "Bot"],
        "Hero": ["Laptop", "Tablet", "Battery", "Signal", "Mouse", "Camera", "Wifi"],
        "Master": ["Programming", "Processor", "Satellite", "Invention", "Software", "Algorithm", "Circuit"]
    },
    "Handyman": {
        "Explorer": ["Saw", "Tape", "Glue", "Nut", "Bolt", "Tool", "Nail"],
        "Hero": ["Hammer", "Wrench", "Pliers", "Screws", "Level", "Ruler", "Drill"],
        "Master": ["Maintenance", "Measurement", "Carpentry", "Equipment", "Fastener", "Assembly", "Hardware"]
    },
    "City Life": {
        "Explorer": ["Road", "Shop", "Bus", "Park", "Sign", "Bank", "Mall"],
        "Hero": ["Street", "Bridge", "Market", "Library", "Museum", "Office", "Subway"],
        "Master": ["Skyscraper", "Intersection", "Community", "Pedestrian", "Neighborhood", "Pharmacy", "Traffic"]
    },
    "Human Senses": {
        "Explorer": ["Eye", "Ear", "Nose", "Skin", "Soft", "Loud", "Cold"],
        "Hero": ["Sight", "Sound", "Smell", "Taste", "Touch", "Flavor", "Vision"],
        "Master": ["Perception", "Fragrance", "Texture", "Auditory", "Sensory", "Olfactory", "Sensitive"]
    },
    "Money": {
        "Explorer": ["Cent", "Coin", "Bill", "Bank", "Save", "Buy", "Cash"],
        "Hero": ["Dollar", "Pocket", "Change", "Wallet", "Budget", "Spend", "Price"],
        "Master": ["Investment", "Currency", "Allowance", "Transaction", "Interest", "Economy", "Purchase"]
    },
    "Emotions": {
        "Explorer": ["Kind", "Help", "Give", "Love", "Glad", "Nice", "Share"],
        "Hero": ["Friend", "Honest", "Polite", "Caring", "Listen", "Smile", "Gentle"],
        "Master": ["Empathy", "Respectful", "Integrity", "Patience", "Gratitude", "Generous", "Compassion"]
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
    "Scientist": "👩‍🔬", "Engineer": "👷", "Architect": "🏛️", "Musician": "🎸", "Lawyer": "⚖️", "Business": "👔", "Designer": "🎨",
    // NEW MAPPINGS FOR THEMES 31-50
    "Ride": "🎢", "Fun": "🤩", "Fast": "⏩", "Game": "🎮", "Pop": "🍿", "Park": "🏞️", "Tent": "⛺", "Coaster": "🎢", "Ticket": "🎟️", "Ferris": "🎡", "Cotton": "🍬", "Candy": "🍬", "Prize": "🎁", "Slide": "🛝", "Rollercoaster": "🎢", "Carousel": "🎠", "Midway": "🎪", "Carnival": "🎡", "Souvenir": "🛍️", "Thrill": "😱",
    "Dirt": "🟤", "Seed": "🌱", "Pot": "🪴", "Hoe": "👩‍🌾", "Bud": "🌷", "Dig": "⛏️", "Shovel": "🥄", "Trowel": "⛏️", "Sprout": "🌱", "Gloves": "🧤", "Plant": "🪴", "Roots": "🥕", "Horticulture": "🌿", "Greenhouse": "🏡", "Fertilizer": "💩", "Cultivate": "🌾", "Harvest": "🌽", "Pesticide": "☠️", "Organic": "🍏",
    "Old": "👴", "Bone": "🦴", "Map": "🗺️", "Rock": "🪨", "Relic": "🏺", "Ancient": "🏛️", "Ruins": "🏛️", "Brush": "🖌️", "Site": "📍", "Artifact": "🏺", "Civilization": "🏙️", "Expedition": "🎒", "Excavate": "⛏️", "Hieroglyphics": "📜", "Pyramid": "🔺", "Pharaoh": "👑",
    "Fire": "🔥", "Woods": "🌲", "Log": "🪵", "Hike": "🥾", "Lake": "🌊", "Smores": "🍫", "Lantern": "🏮", "Compass": "🧭", "Trail": "🛣️", "Cooler": "🧊", "Forest": "🌲", "Gear": "⚙️", "Wilderness": "🏞️", "Navigation": "🗺️", "Survival": "🆘", "Sleeping": "😴", "Terrain": "⛰️",
    "Saw": "🪚", "Hammer": "🔨", "Nail": "🔩", "Wood": "🪵", "Hard": "🧱", "Glue": "🧴", "Driller": "🔫", "Loader": "🚜", "Cement": "🧱", "Bricks": "🧱", "Crane": "🏗️", "Blueprint": "📜", "Architecture": "🏛️", "Engineering": "⚙️", "Scaffolding": "🏗️", "Excavator": "🚜", "Foundation": "🧱", "Steel": "⛓️", "Structure": "🏢",
    "Idea": "💡", "Plan": "📝", "New": "✨", "Tool": "🛠️", "Work": "💼", "Create": "🎨", "Device": "📱", "Engine": "⚙️", "Patent": "📜", "Prototype": "🤖", "Light": "💡", "Innovation": "🚀", "Laboratory": "🧪", "Discovery": "🔭", "Experiment": "⚗️", "Technology": "💻", "Ingenuity": "🧠", "Pioneer": "🚩",
    "Land": "🏝️", "Sea": "🌊", "Hill": "⛰️", "Peak": "🏔️", "Flag": "🏳️", "Road": "🛣️", "River": "🌊", "Desert": "🌵", "Valley": "🏞️", "Coast": "🏖️", "Border": "🚧", "Globe": "🌍", "Continent": "🌍", "Peninsula": "🏝️", "Archipelago": "🏝️", "Latitude": "🌐", "Longitude": "🌐", "Topography": "🗺️", "Equator": "🌐",
    "Dark": "🌑", "Glow": "🌟", "Solar": "☀️", "System": "🌌", "Crater": "🌑", "Constellation": "✨", "Observatory": "🔭", "Supernova": "💥", "Lightyear": "🚀", "Blackhole": "⚫",
    "Clue": "🔍", "Note": "📝", "Case": "💼", "Search": "🔎", "Finger": "☝️", "Print": "👣", "Badge": "📛", "Trace": "👣", "Investigation": "🕵️‍♂️", "Evidence": "📂", "Interrogate": "🗣️", "Undercover": "🕶️", "Suspicious": "🤨", "Solve": "✅",
    "Zeus": "⚡", "God": "☁️", "Wing": "🪽", "Gold": "🏆", "King": "👑", "Pegasus": "🦄", "Phoenix": "🔥", "Triton": "🧜‍♂️", "Legend": "📜", "Statue": "🗿", "Temple": "🏛️", "Labyrinth": "🌀", "Centaur": "🐎", "Minotaur": "🐂", "Olympian": "🏛️", "Prophecy": "🔮", "Hercules": "💪", "Immortality": "♾️",
    "Cup": "☕", "Pan": "🍳", "Fork": "🍴", "Bowl": "🍜", "Spoon": "🥄", "Pot": "🍲", "Knife": "🔪", "Whisk": "🥣", "Grater": "🧀", "Peeler": "🥔", "Toaster": "🍞", "Kettle": "🫖", "Ladle": "🥣", "Spatula": "🍳", "Colander": "🍝", "Blender": "🥤", "Processor": "⚙️", "Strainer": "🍝", "Rollingpin": "🥖", "Utensils": "🍴", "Cookware": "🥘",
    "Pear": "🍐", "Kiwi": "🥝", "Fig": "🌰", "Lime": "🍋", "Plum": "🍑", "Grape": "🍇", "Mango": "🥭", "Peach": "🍑", "Cherry": "🍒", "Berry": "🍓", "Melon": "🍈", "Orange": "🍊", "Pomegranate": "🔴", "Raspberry": "🍓", "Apricot": "🍑", "Tangerine": "🍊", "Nectarine": "🍑", "Grapefruit": "🍊", "Avocado": "🥑",
    "Corn": "🌽", "Pea": "🫛", "Bean": "🫘", "Yam": "🍠", "Kale": "🥬", "Leek": "🧅", "Beet": "🍠", "Carrot": "🥕", "Potato": "🥔", "Tomato": "🍅", "Onion": "🧅", "Garlic": "🧄", "Radish": "🍠", "Pepper": "🫑", "Cauliflower": "🥦", "Eggplant": "🍆", "Zucchini": "🥒", "Asparagus": "🥦", "Spinach": "🍃", "Artichoke": "🥬",
    "Soap": "🧼", "Comb": "🪮", "Tooth": "🦷", "Face": "😀", "Bath": "🛁", "Towel": "🧖", "Shower": "🚿", "Lotion": "🧴", "Cream": "🧴", "Hygiene": "🧼", "Toothpaste": "🪥", "Grooming": "💇", "Wardrobe": "👗", "Breakfast": "🥞", "Refresh": "🚿",
    "Icon": "📱", "App": "📱", "Web": "🌐", "Link": "🔗", "Code": "💻", "Screen": "🖥️", "Laptop": "💻", "Tablet": "📱", "Battery": "🔋", "Signal": "📶", "Mouse": "🖱️", "Camera": "📷", "Wifi": "📶", "Programming": "💻", "Software": "💾", "Algorithm": "🧮",
    "Tape": "📏", "Nut": "🔩", "Bolt": "🔩", "Wrench": "🔧", "Pliers": "🔧", "Screws": "🔩", "Level": "📐", "Drill": "🔫", "Measurement": "📏", "Carpentry": "🪚", "Equipment": "🧰", "Fastener": "🔩", "Assembly": "🏗️", "Hardware": "🔩",
    "Shop": "🏪", "Sign": "🛑", "Bank": "🏦", "Mall": "🛍️", "Street": "🛣️", "Bridge": "🌉", "Market": "🏪", "Office": "🏢", "Subway": "🚇", "Skyscraper": "🏙️", "Intersection": "🚦", "Community": "👥", "Pedestrian": "🚶", "Neighborhood": "🏡", "Pharmacy": "💊", "Traffic": "🚗",
    "Skin": "✋", "Soft": "☁️", "Loud": "🔊", "Sight": "👀", "Smell": "👃", "Taste": "👅", "Touch": "👈", "Flavor": "😋", "Vision": "👓", "Perception": "🧠", "Fragrance": "🌸", "Texture": "🧶", "Auditory": "🎧", "Sensory": "🧠", "Olfactory": "👃", "Sensitive": "🥺",
    "Cent": "🪙", "Coin": "🪙", "Bill": "💵", "Save": "🐷", "Buy": "🛒", "Cash": "💵", "Dollar": "💵", "Pocket": "👖", "Change": "🪙", "Wallet": "👛", "Budget": "📉", "Spend": "💸", "Price": "🏷️", "Investment": "📈", "Currency": "💱", "Allowance": "💰", "Transaction": "💳", "Interest": "📊", "Economy": "🌍", "Purchase": "🛍️",
    "Help": "🤝", "Give": "🎁", "Love": "❤️", "Nice": "😊", "Share": "🍰", "Friend": "👯", "Honest": "🤞", "Polite": "🙇", "Caring": "🤗", "Listen": "👂", "Gentle": "🕊️", "Empathy": "❤️", "Respectful": "🙇", "Integrity": "🤝", "Patience": "🧘", "Gratitude": "🙏", "Generous": "🎁", "Compassion": "❤️"
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
    const rawInput = elements.puzzleInput.value.trim();
    let words = [];
    let theme = "Custom";

    // 1. Check if input is a direct Topic Match (e.g. "Space", "Animals")
    let topicMatch = Object.keys(TOPICS).find(t => t.toLowerCase() === rawInput.toLowerCase());

    // 2. SMART THEME DETECTION: Check if the input WORDS match any known topic content
    if (!topicMatch && rawInput.length > 0) {
        // Break input into words
        const inputWords = rawInput.toLowerCase().split(/[,\s]+/).map(w => w.trim()).filter(w => w.length > 2);
        // Search through all themes to find a match
        for (const [tKey, tLevels] of Object.entries(TOPICS)) {
            // Check all levels (Explorer, Hero, Master)
            const allTopicWords = [
                ...(tLevels["Explorer"] || []),
                ...(tLevels["Hero"] || []),
                ...(tLevels["Master"] || [])
            ].map(w => w.toLowerCase());

            // If any input word is found in this topic's list, auto-select this theme
            if (inputWords.some(iw => allTopicWords.includes(iw))) {
                topicMatch = tKey;
                break; // Found a match!
            }
        }
    }

    if (topicMatch) {
        theme = topicMatch;
        let level = "Explorer";
        if (currentState.ageGroup === '8-10') level = "Hero";
        if (currentState.ageGroup === '11-13') level = "Master";
        words = [...TOPICS[theme][level]];
    } else if (rawInput.length > 0) {
        // 2. Use User Input Strictly (Comma separated)
        words = rawInput.split(',').map(w => w.trim()).filter(w => w);
        if (words.length === 0) words = [...TOPICS["Animals"]["Explorer"]];
    } else {
        // 3. Default Fallback
        theme = "Animals";
        let level = "Explorer";
        if (currentState.ageGroup === '8-10') level = "Hero";
        if (currentState.ageGroup === '11-13') level = "Master";
        words = [...TOPICS[theme][level]];
    }

    currentState.theme = theme;
    elements.cardContent.innerHTML = "";
    elements.ansContent.innerHTML = "";
    if (elements.storyTitle) elements.storyTitle.innerText = STORY_CONTEXT[currentState.type][currentState.ageGroup];
    if (elements.ansCardInfo) elements.ansCardInfo.innerText = `${theme.toUpperCase()} MISSION KEY`;

    const mascotBox = document.querySelector('.mascot-circle');
    if (mascotBox && words.length > 0) {
        // Try to find an icon for the first word, or default
        const firstWord = words[0];
        // Simple heuristic to find a mapped word in the user's list
        const iconWord = words.find(w => WORD_MAP[w]) || firstWord;
        mascotBox.innerText = WORD_MAP[iconWord] || "🦊";
    }

    switch (currentState.type) {
        case 'scramble': renderScramble(words); break;
        case 'vowels': renderVowels(words); break;
        case 'spycode': renderSpyCode(words); break;
        case 'wordsearch': renderWordSearch(words); break;
        case 'riddle': renderRiddles(theme, "Explorer"); break; // Riddles rely on theme for sentences
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
        // Use getIcon(word) instead of WORD_MAP[word] to enable fuzzy matching/fallbacks
        const iconChar = getIcon(word);
        row.innerHTML = `<div class="flex-1 flex items-center justify-start gap-8"><span class="text-6xl">${iconChar}</span><span class="text-slate-800 font-bold italic text-4xl tracking-widest">${scrambled}</span></div><div class="flex-1 h-14 border-b-4 border-slate-300 border-dashed relative top-2"></div>`;
        container.appendChild(row);
        addAnswerItem(`${i + 1}. ${scrambled} = ${solution}`);
    });
    elements.cardContent.appendChild(container);
}

// Helper to get icon or fallback
// Helper to get icon or fallback
function getIcon(word) {
    if (!word) return "✨";
    if (WORD_MAP[word]) return WORD_MAP[word];

    // Fuzzy Match: Check against all keys
    const lowerInput = word.toLowerCase();
    const keys = Object.keys(WORD_MAP);

    // 1. Check for Plural 's'
    if (lowerInput.endsWith('s') && WORD_MAP[word.slice(0, -1)]) return WORD_MAP[word.slice(0, -1)];

    // 2. Fuzzy match: Starts with (min 4 chars) to catch "Rhinocerio" -> "Rhinoceros"
    for (const key of keys) {
        const lowerKey = key.toLowerCase();
        if (lowerInput.length >= 4 && lowerKey.length >= 4) {
            if (lowerInput.startsWith(lowerKey.slice(0, 4)) || lowerKey.startsWith(lowerInput.slice(0, 4))) {
                return WORD_MAP[key];
            }
        }
        // Inclusion check for longer words
        if (lowerInput.length > 5 && (lowerKey.includes(lowerInput) || lowerInput.includes(lowerKey))) {
            return WORD_MAP[key];
        }
    }

    // Default Fallback
    const fallbacks = ["🚀", "🌟", "🎨", "🧩", "🎮", "🦄", "🌈", "🎈", "🔮", "💡"];
    const idx = word.length % fallbacks.length;
    return fallbacks[idx];
}

function renderVowels(words) {
    elements.cardTitle.innerText = "Vowel Vanisher";
    const container = document.createElement('div');
    // FORCE SINGLE COLUMN: Solves the "space" issue permanently. 
    container.className = "grid grid-cols-1 gap-y-6 w-full mt-6 px-4";
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
        // Simple, full-width container for everyone
        wrap.className = `bg-white p-4 rounded-[24px] border-2 border-slate-100 shadow-sm flex items-center gap-6`;

        // Dynamic Icon Logic
        const iconChar = getIcon(word);
        wrap.innerHTML = `<span class="text-6xl min-w-[80px] text-center">${iconChar}</span>`;

        // Adaptive Font Sizing to ensure "whole word visible"
        let fontSize = "text-5xl";
        if (solution.length > 6) fontSize = "text-4xl";
        if (solution.length > 9) fontSize = "text-3xl";

        const display = document.createElement('div');
        // flex-wrap is critical here. If it's STILL too long, it will wrap to the next line instead of cutting off.
        display.className = `flex-1 ${fontSize} font-black text-slate-800 tracking-widest flex flex-wrap items-center justify-start min-h-[5rem] bg-slate-50 rounded-xl px-6 py-4`;

        chars.forEach((c, idx) => {
            if (toMask.includes(idx)) {
                // VISIBLY THICK BLACK LINE (Inline styles to force visibility)
                const s = document.createElement('span');
                // Using explicit pixel values to ensure "more space" and "visible black lines"
                s.style.display = 'inline-block';
                s.style.width = solution.length > 9 ? '50px' : '100px'; // Much wider
                s.style.height = '60px';
                s.style.borderBottom = '6px solid #000000'; // Pure black, thick line
                s.style.margin = '0 15px'; // More space around the blank
                s.innerHTML = "&nbsp;";
                display.appendChild(s);
            } else {
                display.appendChild(document.createTextNode(c));
            }
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
            row.innerHTML += `<div class="flex flex-col items-center gap-2"><div class="code-tile w-14 h-14 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">${cipher[char]}</div><div class="w-14 h-14 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center bg-slate-50"></div></div>`;
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
            if (!over) { for (let i = 0; i < s.length; i++) grid[r + i * dir.r][c + i * dir.c] = s[i]; placed = true; sol.push(w); }
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
    // More open grid: 2 cols on mobile, 3 on desktop, with bigger gaps
    list.className = "mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8";
    sol.forEach(w => {
        const icon = getIcon(w);
        // Bigger buttons, more padding (py-3 px-6), cleaner look
        list.innerHTML += `<div class="bg-indigo-50 px-6 py-3 rounded-full text-indigo-700 font-extrabold text-sm text-center flex items-center justify-center gap-3 shadow-sm border border-indigo-100"><span class="text-2xl">${icon}</span><span class="tracking-wide">${w.toUpperCase()}</span></div>`;
        addAnswerItem(w.toUpperCase());
    });
    elements.cardContent.appendChild(gEl);
    elements.cardContent.appendChild(list);
}

function renderRiddles(theme, level) {
    const themeSentence = SENTENCES[theme];

    // If we have theme sentences, turn this into a "Secret Message" (Cryptogram) puzzle
    if (themeSentence) {
        elements.cardTitle.innerText = "Secret Message";
        const container = document.createElement('div');
        container.className = "w-full space-y-8 mt-6 px-6";

        // Generate Cipher Key
        const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const shuffled = alpha.split('').sort(() => 0.5 - Math.random()).join('');
        const cipher = {};
        const reverseCipher = {};
        alpha.split('').forEach((char, i) => {
            cipher[char] = shuffled[i];
            reverseCipher[shuffled[i]] = char;
        });

        // Show Decoder Key (Compact for single page fit)
        const keyBox = document.createElement('div');
        keyBox.className = "bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-wrap justify-center gap-1 mb-6";
        alpha.split('').forEach(char => {
            keyBox.innerHTML += `<div class="flex flex-col items-center bg-white border border-slate-300 rounded w-8 py-1"><span class="text-[10px] text-slate-400 font-bold">${char}</span><span class="text-sm font-black text-slate-800">${cipher[char]}</span></div>`;
        });
        container.appendChild(keyBox);

        // Render Sentences
        const selectedSentences = themeSentence.sort(() => 0.5 - Math.random()).slice(0, 2);
        selectedSentences.forEach((s, i) => {
            const original = s.toUpperCase();
            const encrypted = original.split('').map(c => cipher[c] || c).join(''); // Keep spaces/punctuation

            const item = document.createElement('div');
            // Reduced padding and margins for compact fit
            item.className = "p-6 bg-blue-50 rounded-[24px] border-2 border-blue-100 shadow-sm relative";
            item.innerHTML = `
                <div class="text-[10px] font-black text-blue-300 uppercase mb-2 tracking-widest">Message #${i + 1}</div>
                <div class="text-xl font-bold text-slate-700 leading-normal tracking-wide mb-4 font-mono bg-white p-3 rounded-lg border border-blue-100 text-center">${encrypted}</div>
                <div class="space-y-1">
                    <div class="flex gap-1 justify-center flex-wrap">
                       ${encrypted.split('').map(c =>
                /[A-Z]/.test(c)
                    ? `<div class="flex flex-col items-center gap-0"><div class="w-6 h-6 border-b-2 border-slate-300"></div><div class="text-xs font-bold text-slate-400 mt-1">${c}</div></div>`
                    : `<div class="w-3"></div>` // Space
            ).join('')}
                    </div>
                </div>
            `;
            container.appendChild(item);
            addAnswerItem(`${i + 1}. ${original}`);
        });
        elements.cardContent.appendChild(container);
        return;
    }

    // Default Riddle Logic (Generic Riddles)
    elements.cardTitle.innerText = "Riddle Master";
    const container = document.createElement('div');
    container.className = "w-full space-y-12 mt-12 px-6";
    let riddleList = RIDDLES_FALLBACK; // Use the internal fallback list since external RIDDLES might be missing

    riddleList.slice(0, 3).forEach((rid, i) => {
        const item = document.createElement('div');
        item.className = "p-10 bg-emerald-50 rounded-[40px] border-2 border-emerald-100 flex gap-8 items-center shadow-sm relative";
        item.innerHTML = `<div class="text-6xl">🤔</div><div class="flex-1"><div class="text-xs font-black text-emerald-300 uppercase mb-2 tracking-widest">Riddle #${i + 1}</div><div class="text-2xl font-bold text-slate-700 leading-tight mb-6">${rid.q}</div><div class="border-b-4 border-dotted border-emerald-200 h-16 w-full italic text-emerald-100 flex items-end pb-2">Your answer...</div></div>`;
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
            scale: 4, // High Resolution (4x) for Amazon KDP Printing (approx 300 DPI)
            backgroundColor: isT ? null : currentState.bgColor,
            onclone: (doc) => {
                const p = doc.getElementById('puzzle-card'), a = doc.getElementById('answer-card');
                if (p) { p.style.boxShadow = "none"; p.style.borderRadius = "0"; }
                if (a) { a.style.boxShadow = "none"; a.style.borderRadius = "0"; }
            }
        });

        // Revert to Data URL for file:// protocol compatibility
        // This fixes the "random filename" issue on local files
        const dataUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        const safeName = filename.endsWith('.png') ? filename : `${filename}.png`;
        link.download = safeName;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (e) {
        console.error(e);
        alert("Download failed. Please try again.");
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
