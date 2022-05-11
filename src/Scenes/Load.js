class Load extends Phaser.Scene {
    constructor()
    {
        super("loadScene");
    }

    preload() 
    {
        this.load.atlas('tile_atlas', './assets/Atlases/Tiles.png', './assets/Atlases/Tiles.json');
    }

    update() 
    {
       console.log('loadscene');
       this.scene.start("menuScene");
    }
}