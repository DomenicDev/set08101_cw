export const STORY = [
    {
        "id": 1,
        "text": "Hey you! Could you please help me?\n" +
            "I have a problem with Cedric, the one living down the road.\n" +
            "I borrowed him a sword for a few days. But he has not returned it yet.\n" +
            "Could you please ask him to return it to me?",
        "actor": "Peter",
        "options": [
            {
                "text": "Yeah, of course, I will ask him!",
                "next": 2
            }
        ]
    },
    {
        "id": 2,
        "text": "Oh I assume you come because of the sword of Peter?\n" +
            "There is a tiny problem though... \n" +
            "I really would like to return it but I don't have it with me at the moment...\n" +
            "Actually David has it but for some reason he does not want to talk to me anymore. I really don't know why.\n" +
            "It really would be great if you could try to talk to him.",
        "actor": "Cedric",
        "options": [
            {
                "text": "Alright, I will talk to him.",
                "next": 3
            },
            {
                "text": "No, this is your business. (Return back to Peter)",
                "next": 4
            }
        ]
    },
    {
        "id": 3,
        "actor": "David",
        "text": "What? You want to me to return the sword?\n" +
            "Well, he shall first give me my money back. He still owes me 100 coins.\n" +
            "I'm not giving him anything back before that.",
        "options": [
            {
                "text": "Hmmm... I will let him now.",
                "next": 5
            }
        ]
    },
    {
        "id": 4,
        "text": "This is unfortunate... we will see if I will ever get my sword back :/",
        "actor": "Peter",
        "options": [
            {
                "text": "Best of luck with that",
                "next": -1
            }
        ]
    },
    {
        "id": 5,
        "actor": "Cedric",
        "text": "Oh right.... I totally forget the coins...\n" +
            "I don't have that much money at the moment though...\n" +
            "I am missing 30 coins, any idea where we might get them from?",
        "options": [
            {
                "text": "I will politely ask Peter for help.",
                "next": 6
            },
            {
                "text": "I will pay the rest",
                "next": 7
            }
        ]
    },
    {
        "id": 6,
        "actor": "Peter",
        "text": "Really? Now he also wants money from me?\n" +
            "Okay, well, here's the money. But I swear, if I don't get the money back, there's gonna be trouble.",
        "options": [
            {
                "text": "(Take the money and go to David)",
                "next": 7
            }
        ]
    },
    {
        "id": 7,
        "actor": "David",
        "text": "Oh wow... you got the money. Thank you!\n" +
            "This was really fast. Well, here is the sword.\n" +
            "Please go to Cedric and tell him that everything is alright now!",
        "options": [
            {
                "text": "Thank you, I will do that!\n" +
                    "(Take the sword and return to Cedric)",
                "next": 8
            },
            {
                "text": "Thank you, I will do that!\n" +
                    "(Take the sword but hide it to not return it)",
                "next": 9
            }
        ]
    },
    {
        "id": 8,
        "actor": "Cedric",
        "text": "Oh nice, you got the sword, perfect! Thank you very much for your help!\n" +
            "And thanks for letting me know that everything is alright now between me and David.\n" +
            "Now it is time to bring Peter his sword back. Thank you again.",
        "options": [
            {
                "text": "You are welcome (Return the sword to Peter)",
                "next": 10
            }
        ]
    },
    {
        "id": 9,
        "actor": "Cedric",
        "text": "What do you mean he did not give you the sword?\n" +
            "This makes no sense... Are you lying to me?",
        "options": [
            {
                "text": "(Admit lie, apologize and return sword to Peter)",
                "next": 10
            },
            {
                "text": "(Continue lying and hold back truth. Return to Peter)",
                "next": 11
            }
        ]
    },
    {
        "id": 10,
        "actor": "Peter",
        "text": "You are great! Thank you so much! You were a great help!\n" +
            "If you ever need my help, you can count on me.",
        "options": [
            {
                "text": "No problem. Thank you! (END)",
                "next": -1
            }
        ]
    },
    {
        "id": 11,
        "actor": "Peter",
        "text": "No sword?... Wow, what a story! I can't understand why he is doing that...\n" +
            "I might talk to him by myself another day.\n" +
            "However, thanks for your effort.",
        "options": [
            {
                "text": "Yeah, I am sorry, I tried my best\n" +
                    "(Fly out of the village | END)",
                "next": -1
            }
        ]
    }
];
