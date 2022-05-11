class Tile extends Phaser.Physics.Matter.Sprite
{
    constructor(scene, x, y, texture, frame, options)
    {
        super(scene.matter.world, x, y, texture, frame, options);
        scene.add.existing(this);
        this.isStatic = true;
        this.setIgnoreGravity(true);
    }

    update()
    {
       
    }
}