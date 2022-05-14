class Tile extends Phaser.GameObjects.Image
{
    constructor(scene, x, y, texture, frame, options, config)
    {
        super(scene, x, y, texture, frame, options);
        scene.add.existing(this);
        this.config = config;
        this.adjacent = [];
    }

    update()
    {
        
    }
}