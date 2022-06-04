class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        let GameplayMusic = this.sound.add('gameplay_music', 1);

        GameplayMusic.setLoop(true);
        GameplayMusic.play();
        //make map
        this.map = new Map(this);
        this.map.loadMap();

        //make camera
        this.cam = this.cameras.main;
        this.cam.setBounds(0, 0, this.map.map.width* tileSize, this.map.map.height * tileSize);
        this.cam.setZoom(0.5);

        //make pips
        console.log(playerPips[0]);
        this.p1 = new Pip(this, playerPips[0][0], playerPips[0][1], playerPips[0][2], playerPips[0][3], playerPips[0][4]);
        this.p2 = new Pip(this, playerPips[1][0], playerPips[1][1], playerPips[1][2], playerPips[1][3], playerPips[1][4]);
        this.p3 = new Pip(this, playerPips[2][0], playerPips[2][1], playerPips[2][2], playerPips[2][3], playerPips[2][4]);
        this.p1.genClothes(0, playerPips[0][5]);
        this.p2.genClothes(0, playerPips[1][5]);
        this.p3.genClothes(0, playerPips[2][5]);
        this.controled = this.p1;
        this.p1.moveToTile(18,1,0, 1, 'power0', 0);
        this.p2.moveToTile(19,1,0, 1, 'power0', 0);
        this.p3.moveToTile(20,1,0, 1, 'power0', 0);

        //make pipheads
        this.p1AgentName = this.add.text(-5, 0, "A");
        this.p1HeadClone = clone(this.p1.getAt(2));
        this.p1HairClone = clone(this.p1.getAt(3));
        this.p1Selector = this.add.container(50, 550, [this.p1HeadClone, this.p1HairClone, this.p1AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p2AgentName = this.add.text(-5, 0, "B");
        this.p2HeadClone = clone(this.p2.getAt(2));
        this.p2HairClone = clone(this.p2.getAt(3));
        this.p2Selector = this.add.container(100, 550, [this.p2HeadClone, this.p2HairClone, this.p2AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p3AgentName = this.add.text(-5, 0, "C");
        this.p3HeadClone = clone(this.p3.getAt(2));
        this.p3HairClone = clone(this.p3.getAt(3));
        this.p3Selector = this.add.container(150, 550, [this.p3HeadClone, this.p3HairClone, this.p3AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();

        //check for swapping
        this.swapping = false;

        //process gameobjectswaping
        this.input.on('gameobjectdown', (pointer, gameObject) =>
        {
            if(gameObject == this.p1 || gameObject == this.p1Selector)
            {
                this.controled = this.p1;
                this.swapping = true;
                this.cam.startFollow(this.p1);
            }
            if(gameObject == this.p2 || gameObject == this.p2Selector)
            {
                this.controled = this.p2;
                this.swapping = true;
                this.cam.startFollow(this.p2);
            }
            if(gameObject == this.p3 || gameObject == this.p3Selector)
            {
                this.controled = this.p3;
                this.swapping = true;
                this.cam.startFollow(this.p3);
            }
            console.log(gameObject);
        }, this);

        //process movement
        this.input.on('pointerdown', (pointer) =>
        {
            if((pointer.x/this.cam.zoom + this.cam.scrollX - this.cam.width/2)/tileSize < this.map.map.width && (pointer.y/this.cam.zoom + this.cam.scrollY - this.cam.height/2)/tileSize < this.map.map.height && !this.swapping)
            {
                this.controled.setDestination(this.map.tiles[Math.floor((pointer.y/this.cam.zoom+ this.cam.scrollY - this.cam.height/2)/tileSize)][Math.floor((pointer.x/this.cam.zoom + this.cam.scrollX - this.cam.width/2)/tileSize)]);
                this.controled.pathfind();
            }
        }, this);

        //process gameobjectswaping
        this.input.keyboard.on('keydown', (event) =>
        {
            //1
            if(event.keyCode == 49)
            {
                this.controled = this.p1;
                this.cam.startFollow(this.p1);
                //this.zoomTo(1, 3000);
            }
            //2
            if(event.keyCode == 50)
            {
                this.controled = this.p2;
                this.cam.startFollow(this.p2);
                //this.zoomTo(1, 3000);
            }
            //3
            if(event.keyCode == 51)
            {
                this.controled = this.p3;
                this.cam.startFollow(this.p3);
                //this.zoomTo(1, 3000);
            }
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

        this.p1Selector.x = (this.cam.x + 32)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        this.p2Selector.x = (this.cam.x + 96)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        this.p3Selector.x = (this.cam.x + 160)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        
        this.p1Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;
        this.p2Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;
        this.p3Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;

        this.p1Selector.setScale(2/this.cam.zoom).setSize(tileSize/4, tileSize);
        this.p2Selector.setScale(2/this.cam.zoom).setSize(tileSize/4, tileSize);
        this.p3Selector.setScale(2/this.cam.zoom).setSize(tileSize/2, tileSize);
        this.swapping = false;
    }
    
}