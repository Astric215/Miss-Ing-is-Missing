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

        
        //load images
        //CHANGING THIS TEMPORARILY TO BG ART FOR TESTING
        //this.load.image('menu', './assets/Images/Menu.png');
        this.load.image('dressing', './assets/Backgrounds/DressingBackground.png');
        this.load.image('menu', './assets/Backgrounds/MainMenu.png');
        this.load.image('object', './assets/Images/Object.png');
        this.load.image('menuHover', './assets/Backgrounds/MainMenuHover.png');
        this.load.audio('button_click', './assets/Sfx/ButtonClick.wav');

        //load tiled JSON and tilemap
        this.load.tilemapTiledJSON("mansionMap", "./assets/Maps/MansionMap.json");
        this.load.image('mansionTiles', './assets/Atlases/MansionTiles.png');

        //when loading is comlete go to the main menu
        this.load.on('complete', () => 
        {
            this.scene.start("menuScene")
        }
        );
        
    }
}