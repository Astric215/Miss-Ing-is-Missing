class Tile extends Phaser.Physics.Matter.Image
{
    constructor(scene, x, y, texture, frame, options, config)
    {
        super(scene.matter.world, x, y, texture, frame, options);
        scene.add.existing(this);
        this.isStatic = true;
        this.setIgnoreGravity(true);
        this.config = config;
    }

    update()
    {
        
    }
}