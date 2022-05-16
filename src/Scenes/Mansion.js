class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        this.map = new Map(this);
        this.map.loadMap();

        console.log(pip1);
        console.log(pip1arr);
        pip1.shift(this);
        pip2.shift(this);
        pip3.shift(this);
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