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
        //CHANGING THIS TEMPORARILY TO BG ART FOR TESTING
        //this.load.image('menu', './assets/Images/Menu.png');
        this.load.image('dressing', './assets/Backgrounds/DressingBackground.png');
        this.load.image('menu', './assets/Backgrounds/MainMenu.png');
        this.load.image('object', './assets/Images/Object.png');
        this.load.image('purchase', './assets/Images/PurchaseButton.png');
        this.load.image('continue', './assets/Images/ContinueButton.png');
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
            ["arm wrestling contest", [["Try your hardest", 0], ["Tickle your oppenent", 1]], "outcome"],
            ["You see a man at the bar who looks like he is a mobster", [["fight him", 0], ["Buy him a drink", 2]], "outcome"],
            ["A man bumps into you and immediately starts yelling about how he is going to beat you up.", [["Beat him up.", 0], ["Predict his punches and dodge.", 3]], "outcome"],
            ["A man is posturing about how strong he is.", [["Challenge him to a fight", 0], ["Call him on his bluff.", 4]], "outcome"],
            ["Big guy stops you", [["Fight him", 0], ["Seduce him", 5]], "outcome"],

            ["pick lock", [["option 1", 0], ["smash lock", 0]], "outcome"],
            ["Open door", [["Pick the lock", 0], ["bust the door down", 2]], "outcome"],
            ["You are challenged to a game of poker", [["Cheat by dealing yourself better cards", 0], ["Read your oppenents and outplay them", 3]], "outcome"],
            ["Tail someone", [["option 1", 0], ["option 2", 4]], "outcome"],
            ["Steal from desk", [["option 1", 0], ["option 2", 5]], "outcome"],

            ["A man challenges you to a punching contest. Whoever goes down first loses.", [["Brace yourself for his punches.", 0], ["Punch him as hard as possible.", 1]], "outcome"],
            ["drinking contest", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["con3", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["con4", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["Digging through garbage", [["option 1", 0], ["option 2", 1]], "outcome"],

            ["You find a safe", [["try to crack it", 0], ["break it", 0]], "outcome"],
            ["You find a small box with some interlocking gears. It rattles when you shake it.", [["Try to solve the box.", 0], ["Try to take the box apart.", 1]], "outcome"],
            ["drinking contest2", [["Pick less intoxicating drinks for yourself", 0], ["Drink them under the table", 2]], "outcome"],
            ["There is a trivia game happening where people write their answers on a board before revealing them.", [["Impress everyone with your trivia knowledge.", 0], ["Cheat off of others answers", 4]], "outcome"],
            ["You find a letter written in a cipher", [["Decode the cipher", 0], ["Look for someone smart and get them to do it", 5]], "outcome"],

            ["Pickpocketed", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["wis2", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["wis3", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["wis4", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["eavesdrop", [["option 1", 0], ["option 2", 1]], "outcome"],

            ["Get Item from someone", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["cha2", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["cha3", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["cha4", [["option 1", 0], ["option 2", 1]], "outcome"],
            ["cha5", [["option 1", 0], ["option 2", 1]], "outcome"]
        ]
    }
}