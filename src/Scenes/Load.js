/*
    load scene to load stuff in ¯\_(ツ)_/¯
*/
class Load extends Phaser.Scene 
{
    constructor()
    {
        super("loadScene");
    }

    preload() 
    {
        //load atlases
        this.load.atlas('tileAtlas', './assets/Atlases/MansionTiles.png', './assets/Atlases/MansionTiles.json');
        this.load.atlas('tPipSprites', './assets/Atlases/tmp/tmpPip.png', './assets/Atlases/tmp/tmpPip.json');
        this.load.atlas('bodyAtlas', './assets/Atlases/BodySheet.png', './assets/Atlases/BodySheet.json');
        this.load.atlas('ladyAtlas', './assets/Atlases/LadyClothing.png', './assets/Atlases/LadyClothing.json');
        this.load.atlas('dudeAtlas', './assets/Atlases/DudeClothing.png', './assets/Atlases/DudeClothing.json');
        this.load.atlas('arrowAtlas', './assets/Atlases/Arrows.png', './assets/Atlases/Arrows.json');
        this.load.atlas('grassAtlas', './assets/Atlases/Grass.png', './assets/Atlases/Grass.json');


        
        //load images
        //this.load.image('menu', './assets/Images/Menu.png');
        this.load.image('dressing', './assets/Backgrounds/DressingBackground.png');
        this.load.image('menu', './assets/Backgrounds/MainMenu.png');
        this.load.image('object', './assets/Images/Object.png');
        this.load.image('purchase', './assets/Images/PurchaseButton.png');
        this.load.image('continue', './assets/Images/ContinueButton.png');

        //interactive menu stuff vvv
        this.load.image('interactiveMenu', './assets/Images/InteractiveMain.png');
        this.load.image('interactiveBottom', './assets/Images/InteractiveBottomButton.png');
        this.load.image('interactiveTop', './assets/Images/InteractiveTopButton.png');

        this.load.image('menuHover', './assets/Backgrounds/MainMenuHover.png');
        this.load.audio('button_click', './assets/Sfx/button.wav');
        this.load.audio('menu_music', './assets/Sfx/menu.wav');
        this.load.audio('gameplay_music', './assets/Sfx/gameplay.wav')

        //load tiled JSON and tilemap
        this.load.tilemapTiledJSON("mansionMap", "./assets/Maps/MansionMap.json");
        this.load.image("mansionTiles", "./assets/Atlases/MansionTiles.png");
        this.load.image("grass", "./assets/Atlases/Grass.png");

        //when loading is comlete go to the main menu
        this.load.on('complete', () => 
        {
            this.scene.start("menuScene")
        }
        );
        statdistro = 
        [
            //hats + 1
            [
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0]
            ],
            //dress + 6
            [
                [2, 2, 2, 0, 0, 0],
                [0, 2, 0, 0, 3, 1],
                [1, 3, 0, 0, 0, 2],
                [0, 1, 0, 3, 2, 0],
                [0, 0, 3, 2, 0, 1],
                [3, 0, 2, 1, 0, 0],
            ],
            //tops + 3
            [
                [0, 0, 0, 0, 2, 1],
                [1, 2, 0, 0, 0, 0],
                [2, 0, 1, 0, 0, 0],
                [2, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 2, 0],
                [0, 0, 1, 0, 2, 0],
                [2, 1, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 1],
                [0, 0, 0, 2, 0, 1],
                [0, 0, 0, 1, 0, 2],
                [1, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 2],
                [1, 0, 0, 0, 0, 2],
                [0, 1, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 1],
                [1, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 0, 1],
                [0, 0, 1, 0, 0, 2],
                [0, 0, 1, 0, 1, 1],
                [0, 0, 2, 1, 0, 0],
                [0, 0, 1, 1, 0, 1],
                [0, 0, 1, 1, 0, 1],
                [0, 0, 1, 0, 0, 2]
            ],
            //bottom + 3
            [
                [0, 1, 1, 0, 1, 0],
                [1, 0, 2, 0, 0, 0],
                [0, 1, 1, 0, 0, 1],
                [0, 1, 1, 0, 0, 1],
                [1, 0, 1, 1, 0, 0],
                [0, 2, 1, 0, 0, 0],
                [0, 0, 1, 0, 1, 1],
                [0, 0, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 2],
                [0, 0, 0, 1, 0, 2],
                [0, 0, 1, 0, 1, 1],
                [1, 0, 1, 0, 0, 1],
                [0, 0, 2, 0, 0, 1],
                [0, 1, 0, 0, 0, 2],
                [0, 1, 0, 0, 0, 2],
                [1, 1, 0, 0, 0, 1],
                [1, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 0, 1]
            ],
            //shoes
            [
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0]
            ]
        ]
        events =
        [
            //STR
            ["You see people challenging each other to arm wrestling contests. You may be able to get info if you win.", [["Try your hardest", 0], ["Tickle your opponent", 1]], "outcome"],
            ["You see a grizzled man at the bar wearing a detective hat. he may have information.", [["Fight him", 0], ["Drink with him", 2]], "outcome"],
            ["A man bumps into you and immediately starts yelling about how he is going to beat you up.", [["Beat him up", 0], ["Predict his punches and dodge", 3]], "outcome"],
            ["A man is bragging about how strong he is. If you make an example of him people may be more inclined to give you info.", [["Challenge him to a fight", 0], ["Call him on his bluff.", 4]], "outcome"],
            ["Your way is blocked by a hulking muscular man. He doesn't seem to want to let you pass.", [["Fight him", 0], ["Seduce him", 5]], "outcome"],
            //DEX
            ["You encounter a safe with a lock on it. There may be info inside.", [["Pick the lock", 1], ["Smash the lock", 0]], "outcome"],
            ["When walking through the mansion you encounter a locked closet door. You have a feeling that you can find some clues in the closet.", [["Pick the lock", 1], ["Bust the door down", 2]], "outcome"],
            ["You are challenged to a game of poker. The people sitting at the poker table seem to be regular party goers. Maybe they have info.", [["Cheat by dealing yourself better cards", 1], ["Read your opponents and outplay them", 3]], "outcome"],
            ["You see a woman in a black dress whisper something to one of the hosts and then start to leave the room. Is what she said important to your mission?", [["Try to stay hidden while following them", 1], ["Tail them from further away", 4]], "outcome"],
            ["A man came to the party with a briefcase. Maybe there are clues inside.", [["Steal the briefcase when he isn't looking", 1], ["Ask him to show it to you", 5]], "outcome"],
            //CON
            ["A man challenges you to a punching contest. Whoever goes down first loses.", [["Brace yourself for his punches.", 2], ["Punch him as hard as possible.", 0]], "outcome"],
            ["You are challenged to a drinking contest. If you win the others may be easier to get info from.", [["Drink them under the table", 2], ["Pretend to drink", 1]], "outcome"],
            ["The trash doesn't appear to have been taken out in a while. Digging through the garbage may yield some info.", [["Dig through the garbage", 2], ["Convince someone else to dig through the trash", 3]], "outcome"],
            ["You see a person handing out hors d'oeuvres. They seem to be quite proud of them but the hors d'oeuvres look terrible.", [["Try to swallow it all at once", 2], ["Try to season it to make it bearable", 4]], "outcome"],
            ["You see a possible bit of evidence being picked up by the butler to be thrown away.", [["Dig through the trash after it is thrown out", 2], ["Convice the butler to give it to you", 5]], "outcome"],
            //INT
            ["You find a safe sitting on a bookshelf. There may be important info inside.", [["Try to crack it", 3], ["Break it open", 0]], "outcome"],
            ["You find a small box with some interlocking gears. It rattles when you shake it.", [["Try to solve the box.", 3], ["Try to take the box apart.", 1]], "outcome"],
            ["You are challenged to a drinking contest. If you win the others may be easier to get info from.", [["Pick less intoxicating drinks for yourself", 3], ["Drink them under the table", 2]], "outcome"],
            ["There is a trivia game happening where people write their answers on a board before revealing them.", [["Impress everyone with your trivia knowledge", 3], ["Cheat off of others answers", 4]], "outcome"],
            ["You find a letter on a desk written in a cipher. This has got to be important", [["Decode the cipher", 3], ["Look for someone smart and get them to do it", 5]], "outcome"],
            //WIS
            ["You are walking through the party when you notice that your badge is missing. You have been pickpocketed.", [["Look around to find the person who stole from you", 4], ["Tackle the last person who bumped into you", 0]], "outcome"],
            ["You see a painting with a keypad next to it. There has got to be a secret here.", [["Try to figure out the combination", 4], ["Try to shimmy the painting off the wall", 1]], "outcome"],
            ["You suspect that your drink has been poisoned. Find out who tried to poison you.", [["Put the drink down and look around", 4], ["Take a sip of the drink to try to lure the attacker in", 2]], "outcome"],
            ["You suspect that your drink has been poisoned. Find out what they tried to poison you with.", [["Try to figure it out by the look and smell of the drink", 4], ["Try to test the drink with improvised tools", 3]], "outcome"],
            ["You hear Ms.Ing's name in a conversation. What are they talking about?", [["Eavesdrop", 4], ["Convince them to talk with you", 5]], "outcome"],
            //CHA
            ["There is a a bouncer blocking your way into the rest of the house. You can't let him kick you out.", [["Convince him to let you in", 5], ["Knock him out", 0]], "outcome"],
            ["You see a party goer grab a piece of paper off a table. That paper may be important.", [["Convice them to give it to you", 5], ["Pickpocket them", 1]], "outcome"],
            ["You are looking around for people that may be a bit loose lipped about Ms.Ing's disappearance.", [["Seduce the butler of the mansion", 5], ["Challenge a party goer to a drinking contest.", 2]], "outcome"],
            ["You find a rather smart looking man sitting at a table with a chess board. He offers to tell you about the party's hosts if you beat him at chess.", [["Seduce him into letting you win", 5], ["Play your best", 3]], "outcome"],
            ["You find a woman looking very sad sitting by herself.", [["Cheer her up with a joke", 5], ["Offer her life advice", 4]], "outcome"]
        ]
    }
}