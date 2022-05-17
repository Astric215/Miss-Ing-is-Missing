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
        this.load.atlas('tileAtlas', './assets/Atlases/Tiles.png', './assets/Atlases/Tiles.json');
        this.load.atlas('tPipSprites', './assets/Atlases/tmp/tmpPip.png', './assets/Atlases/tmp/tmpPip.json');
        this.load.atlas('bodyAtlas', './assets/Atlases/bodySheet.png', './assets/Atlases/bodySheet.json');
        this.load.atlas('ladyAtlas', './assets/Atlases/ladyClothing.png', './assets/Atlases/ladyClothing.json');
        this.load.atlas('dudeAtlas', './assets/Atlases/dudeClothing.png', './assets/Atlases/dudeClothing.json');
        this.load.atlas('arrowAtlas', './assets/Atlases/Arrows.png', './assets/Atlases/Arrows.json');

        
        //load images
        this.load.image('menu', './assets/Images/Menu.png');
        //when loading is comlete go to the main menu
        this.load.on('complete', () => 
        {
            this.scene.start("menuScene")
        }
        );
        
    }
}