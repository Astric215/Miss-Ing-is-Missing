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
        this.p1 = new Pip(this, pip1[0], pip1[1], pip1[2], pip1[3], pip1[4]);
        this.p2 = new Pip(this, pip2[0], pip2[1], pip2[2], pip2[3], pip2[4]);
        this.p3 = new Pip(this, pip3[0], pip3[1], pip3[2], pip3[3], pip3[4]);
        this.p1.moveToTile(2,2,0, 1000, 'power0', 0);
    }

    update() 
    {   
        /*this.input.on('pointerdown', function(pointer){
            console.log(this.input.y/tileSize);
            this.p1.setDestination(this.map.map[Math.floor(this.input.y/tileSize)][Math.floor(this.input.x/tileSize)]);
            
        });*/

        //when a tile is clicked
        if(this.input.activePointer.leftButtonDown())
        {
            //set up the paths
            if(this.input.y/tileSize < 5 && this.input.x/tileSize < 5)
            {
                this.p1.setDestination(this.map.map[Math.floor(this.input.y/tileSize)][Math.floor(this.input.x/tileSize)]);
            }
        }

        //set the pips current tile
        this.p1.currentTile = this.map.map[Math.floor(this.p1.y/tileSize)][Math.floor(this.p1.x/tileSize)];
        this.p1.update();
        
    }
}