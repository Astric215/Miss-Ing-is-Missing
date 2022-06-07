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
        this.load.atlas('barAtlas', './assets/Atlases/Bar.png', './assets/Atlases/Bar.json');
        this.load.atlas('diningAtlas', './assets/Atlases/Dining.png', './assets/Atlases/Dining.json');
        this.load.atlas('fenceAtlas', './assets/Atlases/Fence.png', './assets/Atlases/Fence.json');

        
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
        this.load.image("bar", "./assets/Atlases/Bar.png");
        this.load.image("dining", "./assets/Atlases/Dining.png");
        this.load.image("fence", "./assets/Atlases/Fence.png");

        //when loading is comlete go to the main menu
        this.load.on('complete', () => 
        {
            this.scene.start("menuScene")
        }
        );
        
    }
}