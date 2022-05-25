class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        //make map
        this.map = new Map(this);
        this.map.loadMap();

        //make pips
        console.log(pip1);
        this.p1 = new Pip(this, pip1[0], pip1[1], pip1[2], pip1[3], pip1[4]);
        this.p2 = new Pip(this, pip2[0], pip2[1], pip2[2], pip2[3], pip2[4]);
        this.p3 = new Pip(this, pip3[0], pip3[1], pip3[2], pip3[3], pip3[4]);
        this.controled = this.p1;
        this.p1.moveToTile(2,2,0, 1000, 'power0', 0);
        this.p2.moveToTile(2,4,0, 1000, 'power0', 0);
        this.p3.moveToTile(4,2,0, 1000, 'power0', 0);

        //make pipheads
        this.p1HeadClone = clone(this.p1.getAt(2));
        this.p1HairClone = clone(this.p1.getAt(3));
        this.p1Selector = this.add.container(50, 550, [this.p1HeadClone, this.p1HairClone]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p2HeadClone = clone(this.p2.getAt(2));
        this.p2HairClone = clone(this.p2.getAt(3));
        this.p2Selector = this.add.container(100, 550, [this.p2HeadClone, this.p2HairClone]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p3HeadClone = clone(this.p3.getAt(2));
        this.p3HairClone = clone(this.p3.getAt(3));
        this.p3Selector = this.add.container(150, 550, [this.p3HeadClone, this.p3HairClone]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();


        //process movement
        this.input.on('pointerdown', (pointer) =>
        {
            if(pointer.y/tileSize < this.map.map.height && pointer.x/tileSize < this.map.map.width && this.map.tiles[Math.floor(pointer.y/tileSize)][Math.floor(pointer.x/tileSize)].obj == null)
            {
                this.controled.setDestination(this.map.tiles[Math.floor(pointer.y/tileSize)][Math.floor(pointer.x/tileSize)]);
                this.controled.pathfind();
            }
        }, this);

        //process gameobjectswaping
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            if(gameObject == this.p1 || gameObject == this.p1Selector)
            {
                this.controled = this.p1;
            }
            if(gameObject == this.p2 || gameObject == this.p2Selector)
            {
                this.controled = this.p2;
            }
            if(gameObject == this.p3 || gameObject == this.p3Selector)
            {
                this.controled = this.p3;
            }
            console.log(gameObject);
        }, this);
    }

    update() 
    {   
        /*this.input.on('pointerdown', function(pointer){
            console.log(this.input.y/tileSize);
            this.p1.setDestination(this.map.map[Math.floor(this.input.y/tileSize)][Math.floor(this.input.x/tileSize)]);
            
        });*/

        //set the pips current tile
        this.p1.currentTile = this.map.tiles[Math.floor(this.p1.y/tileSize)][Math.floor(this.p1.x/tileSize)];
        this.p1.update();
        this.p2.currentTile = this.map.tiles[Math.floor(this.p2.y/tileSize)][Math.floor(this.p2.x/tileSize)];
        this.p2.update();
        this.p3.currentTile = this.map.tiles[Math.floor(this.p3.y/tileSize)][Math.floor(this.p3.x/tileSize)];
        this.p3.update();
        //when a tile is clicked
        // if(this.input.activePointer.leftButtonDown())
        // {
        //     //set up the paths
        //     if(this.input.y/tileSize < this.map.map.height && this.input.x/tileSize < this.map.map.width)
        //     {
        //         this.p1.setDestination(this.map.tiles[Math.floor(this.input.y/tileSize)][Math.floor(this.input.x/tileSize)]);
        //     }
        // }

        
    }
    
}