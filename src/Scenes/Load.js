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
        this.load.on('complete', () => 
        {
            this.scene.start("menuScene")
        }
        );
        this.load.atlas('tPipSprites', './assets/Atlases/tmp/tmpPip.png', './assets/Atlases/tmp/tmpPip.json');
    }

    create()
    {
    }

    update() 
    {
       console.log('loadscene');
       this.scene.start("menuScene");
    }
}