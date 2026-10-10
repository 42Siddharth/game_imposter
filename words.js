globalThis.IMPOSTER_WORDS = [
  // Home
  "Armchair", "Bookshelf", "Carpet", "Ceiling fan", "Coffee table", "Curtain", "Cushion", "Doorbell", "Doormat", "Fireplace",
  "Floor lamp", "Flowerpot", "Footstool", "Frame", "Hanger", "Houseplant", "Keychain", "Light switch", "Mailbox", "Mirror",
  "Picture frame", "Porch swing", "Recliner", "Rug", "Shelf", "Side table", "Sofa", "Staircase", "Stool", "Table lamp",
  "Thermostat", "Vase", "Wall clock", "Wardrobe", "Window blind", "Window screen", "Beanbag", "Coat rack", "Door handle", "Welcome mat",

  // Kitchen
  "Apron", "Baking tray", "Blender", "Bottle opener", "Bowl", "Breadbox", "Can opener", "Chopping board", "Coffee maker", "Colander",
  "Corkscrew", "Cup", "Dish rack", "Frying pan", "Grater", "Ice tray", "Kettle", "Kitchen scale", "Knife", "Ladle",
  "Lunchbox", "Measuring cup", "Microwave", "Mixing bowl", "Mug", "Napkin", "Oven", "Pepper grinder", "Plate", "Pressure cooker",
  "Refrigerator", "Rolling pin", "Saucepan", "Spatula", "Spoon", "Toaster", "Tongs", "Tray", "Whisk", "Wok",

  // School
  "Backpack", "Binder", "Blackboard", "Book", "Calculator", "Chalk", "Clipboard", "Compass", "Crayon", "Desk",
  "Dictionary", "Eraser", "Flash card", "Folder", "Globe", "Glue stick", "Highlighter", "Lunch bag", "Map", "Marker",
  "Notebook", "Watercolor palette", "Paper clip", "Pen", "Pencil", "Pencil case", "Protractor", "Pushpin", "Ruler", "School bell",
  "Sharpener", "Stapler", "Sticky note", "Textbook", "Water bottle", "Whiteboard", "Workbook", "Yearbook", "Scissors", "Report card",

  // Office
  "Briefcase", "Business card", "Calendar", "Copy machine", "Desk chair", "Desk organizer", "Envelope", "File cabinet", "Fountain pen", "Ink pad",
  "Keyboard", "Label maker", "Laptop", "Letter opener", "Mouse pad", "Name badge", "Notepad", "Office phone", "Paper shredder", "Printer",
  "Projector", "Receipt", "Rubber band", "Stamp", "Tape dispenser", "Thumbtack", "Typewriter", "Wastebasket", "Webcam", "Whiteboard marker",
  "Document folder", "Hole punch", "Index card", "Laser pointer", "Memo pad", "Paperweight", "Scanner", "Standing desk", "Clipboard stand", "Desk calendar",

  // Clothing
  "Belt", "Blazer", "Blouse", "Boot", "Bow tie", "Bracelet", "Cap", "Cardigan", "Coat", "Dress",
  "Earring", "Flip-flop", "Glove", "Hat", "Hoodie", "Jacket", "Jeans", "Necklace", "Pajamas", "Raincoat",
  "Ring", "Sandals", "Scarf", "Shirt", "Shoe", "Shorts", "Skirt", "Slipper", "Sneaker", "Sock",
  "Suit", "Sunglasses", "Sweater", "Swimsuit", "Tie", "Trousers", "T-shirt", "Watch", "Wool cap", "Wristband",

  // Tools
  "Axe", "Bolt", "Chisel", "Clamp", "Crowbar", "Drill", "File", "Hammer", "Handsaw", "Hex key",
  "Level", "Mallet", "Measuring tape", "Nail", "Nut", "Paint roller", "Pliers", "Plunger", "Power drill", "Rake",
  "Rope", "Screw", "Screwdriver", "Shovel", "Socket wrench", "Stepladder", "Toolbox", "Utility knife", "Vice", "Wrench",
  "Chainsaw", "Flashlight", "Glue gun", "Hacksaw", "Paint scraper", "Sandpaper", "Soldering iron", "Stud finder", "Wire cutter", "Work glove",

  // Electronics
  "Alarm clock", "Battery", "Camera", "Charger", "Computer", "Drone", "Earbuds", "Electric fan", "Game controller", "Headphones",
  "Joystick", "Microphone", "Monitor", "Phone", "Power bank", "Radio", "Remote control", "Router", "Smartwatch", "Speaker",
  "Tablet", "Television", "USB cable", "Video camera", "Walkie-talkie", "Air conditioner", "Electric toothbrush", "Hair dryer", "Iron", "Rice cooker",
  "Robot vacuum", "Smart bulb", "Smart doorbell", "Streaming stick", "Extension cord", "Memory card", "Portable speaker", "Screen protector", "Tripod", "Voice recorder",

  // Travel
  "Boarding pass", "Carry-on bag", "Duffel bag", "Guidebook", "Luggage tag", "Passport", "Suitcase", "Travel pillow", "Beach bag", "Binoculars",
  "Camping chair", "Compass rose", "Cooler", "Fanny pack", "Hammock", "Hiking boot", "Mosquito net", "Sleeping bag", "Tent", "Thermos",
  "Travel adapter", "Travel mug", "Trolley bag", "Umbrella", "Walking stick", "Beach towel", "Camera bag", "First-aid kit", "Foldable map", "Key card",
  "Neck pillow", "Pocketknife", "Rain poncho", "Sunscreen", "Ticket", "Toiletry bag", "Travel journal", "Water flask", "Eye mask", "Laundry bag",

  // Outdoors
  "Bench", "Bird feeder", "Birdhouse", "Campfire", "Canoe", "Deck chair", "Fence", "Fire pit", "Flagpole", "Fountain",
  "Garden hose", "Gazebo", "Grill", "Hedge", "Lantern", "Lawn mower", "Park bench", "Patio table", "Picnic basket", "Picnic table",
  "Playground", "Pool float", "Sandbox", "Sprinkler", "Streetlight", "Swing", "Telescope", "Treehouse", "Wheelbarrow", "Wind chime",
  "Barbecue", "Deck umbrella", "Garden gate", "Garden gnome", "Mail post", "Outdoor rug", "Porch light", "Rocking chair", "Sun lounger", "Watering can",

  // Sports
  "Baseball", "Baseball bat", "Basketball", "Bowling ball", "Boxing glove", "Cricket bat", "Dartboard", "Dumbbell", "Football", "Frisbee",
  "Golf ball", "Golf club", "Gym bag", "Helmet", "Hockey stick", "Jump rope", "Kayak", "Knee pad", "Ping-pong paddle", "Pool cue",
  "Punching bag", "Racing bicycle", "Roller skate", "Rugby ball", "Shin guard", "Skateboard", "Ski", "Soccer goal", "Surfboard", "Tennis ball",
  "Tennis racket", "Treadmill", "Volleyball", "Yoga mat", "Badminton racket", "Bicycle pump", "Climbing rope", "Goalkeeper glove", "Scoreboard", "Swimming goggles",

  // Toys and games
  "Action figure", "Balloon", "Board game", "Building block", "Chessboard", "Dice", "Doll", "Dollhouse", "Domino", "Jigsaw puzzle",
  "Kite", "Marble", "Playing card", "Puppet", "Rubber duck", "Teddy bear", "Toy car", "Toy train", "Yo-yo", "Spinning top",
  "Hula hoop", "Magic wand", "Model airplane", "Piggy bank", "Pinwheel", "Puzzle cube", "Rocking horse", "Skipping rope", "Slinky", "Snow globe",
  "Stuffed rabbit", "Toy boat", "Toy drum", "Toy robot", "Train set", "Water pistol", "Bubble wand", "Finger puppet", "Jack-in-the-box", "Kaleidoscope",

  // Vehicles
  "Airplane", "Ambulance", "Bicycle", "Boat", "Bulldozer", "Bus", "Canoe paddle", "Car", "Cargo ship", "Convertible",
  "Cruise ship", "Delivery van", "Dump truck", "Fire engine", "Forklift", "Helicopter", "Hot-air balloon", "Jeep", "Jet ski", "Limousine",
  "Motorcycle", "Pickup truck", "Police car", "Rickshaw", "Rocket", "Rowboat", "School bus", "Scooter", "Skateboard ramp", "Submarine",
  "Taxi", "Tractor", "Train", "Tram", "Truck", "Unicycle", "Van", "Yacht", "Sailboat", "Snowmobile",

  // Food
  "Apple", "Banana", "Bread", "Burger", "Burrito", "Cake", "Carrot", "Cheese", "Cookie", "Cupcake",
  "Doughnut", "Egg", "French fries", "Grapes", "Hot dog", "Ice cream", "Lemon", "Lollipop", "Mango", "Muffin",
  "Noodles", "Orange", "Pancake", "Peanut", "Pear", "Pizza", "Popcorn", "Pretzel", "Sandwich", "Strawberry",
  "Taco", "Toast", "Tomato", "Watermelon", "Waffle", "Cereal", "Chocolate bar", "Croissant", "Pineapple", "Potato",

  // Bathroom
  "Bath mat", "Bathrobe", "Bathtub", "Comb", "Cotton bud", "Dental floss", "Hand towel", "Laundry basket", "Loofah", "Mouthwash",
  "Razor", "Shampoo", "Shaving cream", "Shower", "Shower cap", "Soap", "Soap dish", "Sponge", "Toilet", "Toilet brush",
  "Toilet paper", "Toothbrush", "Toothpaste", "Towel", "Tweezers", "Washbasin", "Bathroom scale", "Hairbrush", "Medicine cabinet", "Nail clipper",
  "Shower curtain", "Sink stopper", "Tissue box", "Towel rack", "Water tap", "Body lotion", "Hand mirror", "Hair clip", "Perfume bottle", "Showerhead",

  // Bedroom
  "Bed", "Bedsheet", "Blanket", "Bunk bed", "Chest of drawers", "Dressing table", "Duvet", "Headboard", "Mattress", "Nightstand",
  "Pillow", "Pillowcase", "Quilt", "Reading lamp", "Slippers", "Wardrobe mirror", "Alarm radio", "Bedside table", "Clothes hamper", "Coat hanger",
  "Jewelry box", "Makeup bag", "Music box", "Ottoman", "Photo album", "Poster", "Shoe rack", "Storage box", "Vanity mirror", "Wall poster",
  "Bed frame", "Curtain rod", "Drawer", "Fitted sheet", "Night-light", "Pajama case", "Room divider", "Throw pillow", "Underbed box", "Window curtain",

  // Cleaning
  "Broom", "Bucket", "Carpet cleaner", "Cleaning cloth", "Detergent", "Dish soap", "Dustpan", "Duster", "Feather duster", "Floor mop",
  "Garbage bag", "Laundry detergent", "Mop", "Paper towel", "Scrub brush", "Spray bottle", "Squeegee", "Trash can", "Vacuum cleaner", "Washing machine",
  "Bleach bottle", "Bottle brush", "Cleaning glove", "Clothesline", "Dishwasher", "Drain cleaner", "Drying rack", "Ironing board", "Laundry peg", "Lint roller",
  "Recycling bin", "Scrubbing sponge", "Soap powder", "Steam cleaner", "Toilet cleaner", "Trash bag", "Window cleaner", "Wood polish", "Dust cloth", "Mop bucket",

  // Music
  "Accordion", "Banjo", "Cello", "Clarinet", "Cymbal", "Drum", "Flute", "Guitar", "Harmonica", "Harp",
  "Maracas", "Organ", "Piano", "Recorder", "Saxophone", "Tambourine", "Triangle", "Trombone", "Trumpet", "Violin",
  "Bongo drum", "Drumstick", "Electric guitar", "French horn", "Metronome", "Music stand", "Sheet music", "Ukulele", "Vinyl record", "Xylophone",
  "Bass guitar", "Cowbell", "Headset microphone", "Keyboard piano", "Megaphone", "Record player", "Speaker stand", "Tuning fork", "Violin bow", "Whistle",

  // Workshop and hardware
  "Anvil", "Bench grinder", "Bolt cutter", "Car jack", "Circular saw", "Duct tape", "Extension ladder", "Goggles", "Hard hat", "Nutshell wrench",
  "Paint can", "Paintbrush", "Pegboard", "Pipe wrench", "Safety vest", "Sawhorse", "Tool belt", "Workbench", "Air pump", "Allen key",
  "Cement mixer", "Electric saw", "Garden shears", "Grease gun", "Hand drill", "Nail gun", "Paint bucket", "Protective mask", "Spirit level", "Wire brush",
  "Adjustable wrench", "Drill bit", "Ear protector", "Metal chain", "Plank", "Protective helmet", "Sanding block", "Tool chest", "Wooden crate", "Work boot",

  // Garden
  "Bird bath", "Compost bin", "Flower bed", "Flowerpot saucer", "Garden fork", "Garden spade", "Gardening glove", "Hedge trimmer", "Lawn sprinkler", "Leaf blower",
  "Plant pot", "Pruning shears", "Seed packet", "Shed", "Solar light", "Trellis", "Weed puller", "Garden bench", "Garden cart", "Garden trowel",
  "Greenhouse", "Hanging basket", "Plant label", "Potting soil", "Rain barrel", "Rose bush", "Seedling tray", "Sunshade", "Terracotta pot", "Watering wand",
  "Garden arch", "Garden net", "Garden rake", "Hose reel", "Lawn edger", "Plant mister", "Pruning saw", "Wheelie bin", "Wooden planter", "Yard sign",

  // Medical and health
  "Adhesive bandage", "Bandage", "Blood pressure cuff", "Crutch", "Face mask", "First-aid box", "Gauze", "Hearing aid", "Hot-water bottle", "Ice pack",
  "Medicine bottle", "Pill box", "Stethoscope", "Syringe", "Thermometer", "Wheelchair", "Walking cane", "Arm sling", "Cotton ball", "Eye patch",
  "Hand sanitizer", "Medical glove", "Oxygen mask", "Pill bottle", "Plaster cast", "Tweezers case", "X-ray film", "Dental mirror", "Earplug", "Eye drops",
  "Knee brace", "Medical tape", "Neck brace", "Reflex hammer", "Safety pin", "Surgical cap", "Tongue depressor", "Tooth retainer", "Vitamin bottle", "Wrist brace",

  // Party and celebration
  "Birthday cake", "Birthday candle", "Bow", "Candy bag", "Confetti", "Cupcake stand", "Disco ball", "Gift bag", "Gift box", "Greeting card",
  "Party hat", "Party horn", "Party plate", "Pinata", "Ribbon", "Sparkler", "Streamer", "Wrapping paper", "Banner", "Cake topper",
  "Costume", "Fairy lights", "Flower garland", "Gift tag", "Invitation", "Paper crown", "Party mask", "Photo booth", "Table decoration", "Tiara",
  "Balloon pump", "Candy bowl", "Celebration sign", "Confetti cannon", "Dance floor", "Gift basket", "Paper lantern", "Party popper", "Punch bowl", "Wrapped present",

  // Containers
  "Basket", "Bottle", "Box", "Can", "Carton", "Chest", "Cookie jar", "Crate", "Flask", "Glass jar",
  "Jug", "Metal tin", "Pouch", "Purse", "Sack", "Shopping bag", "Storage bin", "Tin can", "Tool case", "Wallet",
  "Barrel", "Briefcase lock", "Cardboard box", "Coin purse", "Food container", "Gift pouch", "Glass bottle", "Ice bucket", "Lunch container", "Packing box",
  "Paper bag", "Plastic tub", "Shoulder bag", "Suitcase lock", "Thermal flask", "Tote bag", "Treasure chest", "Water jug", "Wicker basket", "Wooden box",

  // Everyday items
  "Bookmark", "Bottle cap", "Button", "Candle", "Coin", "Door key", "Eyeglasses", "Hair tie", "Handkerchief", "Key",
  "Magnifying glass", "Matchbox", "Newspaper", "Pocket mirror", "Rubber stamp", "Safety match", "Shoelace", "Shopping cart", "Straw", "Tissue",
  "Bottle cork", "Clothes peg", "Coaster", "Drinking glass", "Fly swatter", "Fridge magnet", "Key ring", "Light bulb", "Paper fan", "Pocket watch",
  "Sewing needle", "String", "Sunglasses case", "Tablecloth", "Tea towel", "Toothpick", "Torch", "Wall hook", "Wax candle", "Zipper",

  // Baby items
  "Baby bib", "Baby bottle", "Baby monitor", "Baby shoes", "Baby spoon", "Bassinet", "Booster seat", "Changing mat", "Crib", "Diaper",
  "High chair", "Pacifier", "Playpen", "Rattle", "Stroller", "Baby blanket", "Baby carrier", "Baby cup", "Baby gate", "Baby lotion",
  "Baby mobile", "Baby powder", "Baby towel", "Bottle warmer", "Diaper bag", "Nursing pillow", "Rocking cradle", "Soft toy", "Teething ring", "Toy blocks",
  "Baby brush", "Baby hat", "Baby mittens", "Bath toy", "Changing table", "Crib mattress", "Hooded towel", "Musical mobile", "Sippy cup", "Stuffed bear",

  // Beach and pool
  "Beach ball", "Beach chair", "Beach umbrella", "Bucket hat", "Diving board", "Flippers", "Inflatable ring", "Life jacket", "Pool noodle", "Sand bucket",
  "Sandcastle", "Snorkel", "Sun hat", "Swim cap", "Swim ring", "Beach blanket", "Beach tent", "Bodyboard", "Deck lounger", "Diving mask",
  "Floating mattress", "Goggles case", "Inflatable boat", "Lifebuoy", "Paddleboard", "Sand shovel", "Surf wax", "Swimming pool", "Water wings", "Beach sandals",
  "Cooler box", "Fishing net", "Pool ladder", "Pool umbrella", "Shell necklace", "Sun visor", "Surf leash", "Towel clip", "Waterproof bag", "Wetsuit"
];
