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
        this.load.atlas('tPipSprites', './assets/Atlases/tmp/tmpPip.png', './assets/Atlases/tmp/tmpPip.json');
        this.load.image("hair", "./assets/Atlases/tmp/parts/Hair_1.png")
        this.load.on('complete', () => 
            {
                this.scene.start("menuScene")
            }
        );
    }

    create()
    {
    }
}