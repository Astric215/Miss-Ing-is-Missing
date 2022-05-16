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
        this.load.atlas('bodyAtlas', './assets/Atlases/tmp/bodySheet.png', './assets/Atlases/tmp/bodySheet.json');
        this.load.atlas('ladyClothingAtlas', './assets/Atlases/tmp/ladyClothing.png', './assets/Atlases/tmp/ladyClothing.json');
        this.load.atlas('dudeClothingAtlas', './assets/Atlases/tmp/dudeClothing.png', './assets/Atlases/tmp/dudeClothing.json');

        
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