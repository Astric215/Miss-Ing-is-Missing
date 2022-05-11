class Load extends Phaser.Scene {
    constructor()
    {
        super("loadScene");
    }

    preload() 
    {

    }

    update() 
    {
       console.log('loadscene');
       this.scene.start("menuScene");
    }
}