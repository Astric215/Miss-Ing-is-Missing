class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        this.map = new Map(this);
        this.map.loadMap();

        pip1 = new Pip(this, 100, 100, 1, 1, 1, 1);
        pip1.moveToTile(2,2,0, 1000, 'power0', 0);
    }

    update() 
    {
        if(this.input.activePointer.leftButtonDown())
        {
            pip1.moveToTile(Math.floor(this.input.x/tileSize),Math.floor(this.input.y/tileSize),0, -1, 'power0', 0);
        }
    }
}