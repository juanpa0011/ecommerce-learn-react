import Fizban from '../../src/assets/img/fizbantreasury.png'

const list = [
    {
        id: 1,
        name: "Fizban's Treasury of Dragons",
        description: {
            short: "Make your dragons soar to new heights with this supplement for the world's greatest roleplaying game.",
            full: "Meet Fizban the Fabulous: doddering archmage, unlikely hero of the War of the Lance, divine avatar of a dragon-god—and your guide to the mysteries of dragonkind in the worlds of Dungeons & Dragons. n/ What is the difference between a red dragon and a gold dragon? What is dragonsight? How does the magic that suffuses dragons impact the world around them? Here is your comprehensive guide to dragons, filled with the tips and tools Dungeon Masters and players need for their encounters with these dangerous magical creatures. n/ Dragonslayers and dragon scholars alike will appreciate the new dragon-themed options for players eager to harness the power of dragon magic and create unique and memorable draconic characters. Discover a host of new dragons and other creatures. Learn about the lairs and hoards of each type of dragon, and how hoards focus the magic that suffuses dragons and connects them to the myriad worlds of the Material Plane. Discover everything there is to know about the most iconic monsters of Dungeons & Dragons with help from Fizban, your expert advisor on dragonkind!",
            h4: "STRAIGHT FROM THE DRAGON’S MOUTH",
            list: ["Introduces gem dragons to Dungeons & Dragons fifth edition!", "Reveals the story of the First World and the role Bahamut and Tiamat played in its creation and destruction.", "Adds new player character options, including unique draconic ancestries for dragonborn, dragon-themed subclasses for monks and rangers, and new feat and spell options to use in the Character builder",
            "Utilize a rich hoard of tools and information for Dungeon Masters to design Dragon themed encounters, adventures & campaigns across the worlds of D&D, with new dragon lair maps and details on 20 different kinds of dragons.", "Presents a complete dragon bestiary and introduces a variety of new dragons and dragon-related creatures, including aspects of the dragon gods, dragon minions, and more to use in the Encounter builder and Combat Tracker"]
        },
        featured: true,
        category: "sourcebook",
        img: Fizban,
        
        price: 29.99,
        stock: 3
    },
    {
        id: 2,
        name: "Player's handbook",
        description: {
            short: "Everything a player needs to create heroic characters for Dungeons & Dragons the world’s greatest roleplaying game.",
            full: "The Player’s Handbook is the essential core reference for every Dungeons & Dragons roleplayer. This sourcebook provides you the tools and tips to help create your characters, equip them, and send them out into the world.",
            h4: "Arm Yourself for Adventure.",
            list: ["Get all the rules needed to create, level up and start adventuring with your D&D characters with helpful tooltips", "Unlocks 28 subclasses, 10 backgrounds, and 2 subraces for use in the guided Character Builder", "Adds 57 spells and 66 feats - easily know what each power does with just a click of your character sheet"]
        },
        featured: true,
        category: "sourcebook",
        img: "https://placeholder.com/150",
        price: 29.99,
        stock: 0
    },
    {
        id: 3,
        name: "The Everlasting Rime",
        description: {
            short: "Beware! Covered in shards of ice, this digital dice set only thaws to reveal the success of your roll or betray the secret you hold close.",
            full: "Beware! The frozen tundra, from which these dice call home, brings harsh blizzards and unyielding temperatures. Be careful when rolling, the spikes are frozen solid and will freeze your blood.",
            h4: "Extra life",
            list: [""]
        },
        featured: true,
        category: "digitaldice",
        img: "https://placeholder.com/150",
        price: 5.99,
        stock: 2
    },
    {
        id: 4,
        name: "Dice of Enlightenment",
        description: {
            short: "in seeking the path to enlightenment, you discovered these artifacts glowing with the promise of knowledge. You're not sure if they'll help you uncover hidden truths, but each roll offers that chance.",
            full: "Beware! The frozen tundra, from which these dice call home, brings harsh blizzards and unyielding temperatures. Be careful when rolling, the spikes are frozen solid and will freeze your blood.",
            h4: "Amazing animation!",
            list: ["Critical Animation: Magical knowledge breaks through the arched windows when the roller hits a 20.", "Removal Animation: The dice crumble into ruins after the roll has been made.", "Unique Sounds: Tower bells sound every time a roll is made." ]
        },
        featured: false,
        category: "digitaldice",
        img: "https://placeholder.com/150",
        price: 5.99,
        stock: 2
    }
]

export default list;