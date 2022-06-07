class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        this.GameplayMusic = this.sound.add('gameplay_music', 1);

        this.GameplayMusic.setLoop(true);
        this.GameplayMusic.play();
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

        this.p1Background = this.add.image(-460, 580, 'charBG').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.p2Background = this.add.image(-331, 580, 'charBG').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.p3Background = this.add.image(-205, 580, 'charBG').setOrigin(0, 0).setScrollFactor(0).setScale(2);

        this.restartButton = this.add.image(1200, 580, 'restartButton').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.restartButton.setInteractive();

        //set initial controlled pip
        this.controled = this.p1;
        this.cam.startFollow(this.p1);
        this.trgt = this.p1;

        this.agentname = this.add.text(-game.config.width/2, -game.config.height/2,"Observing: " + agentNames[0]).setScrollFactor(0).setScale(2);

        //make stats
        this.agentstr = this.add.text(-game.config.width/2, -game.config.height/2 + 80, "Strength: " + this.trgt.stats[0]).setScrollFactor(0).setScale(2);
        this.agentdex = this.add.text(-game.config.width/2, -game.config.height/2 + 120, "Dexterity: " + this.trgt.stats[1]).setScrollFactor(0).setScale(2);
        this.agentcon = this.add.text(-game.config.width/2, -game.config.height/2 + 160, "Constitution: " + this.trgt.stats[2]).setScrollFactor(0).setScale(2);
        this.agentint = this.add.text(-game.config.width/2, -game.config.height/2 + 200, "Intelligence: " + this.trgt.stats[3]).setScrollFactor(0).setScale(2);
        this.agentwis = this.add.text(-game.config.width/2, -game.config.height/2 + 240, "Wisdom: " + this.trgt.stats[4]).setScrollFactor(0).setScale(2);
        this.agentcha = this.add.text(-game.config.width/2, -game.config.height/2 + 280, "Charisma: " + this.trgt.stats[5]).setScrollFactor(0).setScale(2);


        //make pipheads
        this.p1AgentName = this.add.text(-5, 0, "A");
        this.p1HeadClone = clone(this.p1.getAt(2));
        this.p1HairClone = clone(this.p1.getAt(3));
        this.p1Selector = this.add.container(50, 550, [this.p1HeadClone, this.p1HairClone, this.p1AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();


        this.p1event = this.add.image(-410, 500, 'exclaim').setScale(2).setScrollFactor(0).setVisible(false);
        this.p2AgentName = this.add.text(-5, 0, "B");
        this.p2HeadClone = clone(this.p2.getAt(2));
        this.p2HairClone = clone(this.p2.getAt(3));
        this.p2Selector = this.add.container(100, 550, [this.p2HeadClone, this.p2HairClone, this.p2AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p2event = this.add.image(-285, 500, 'exclaim').setScale(2).setScrollFactor(0).setVisible(false);
        this.p3AgentName = this.add.text(-5, 0, "C");
        this.p3HeadClone = clone(this.p3.getAt(2));
        this.p3HairClone = clone(this.p3.getAt(3));
        this.p3Selector = this.add.container(150, 550, [this.p3HeadClone, this.p3HairClone, this.p3AgentName]).setScale(2).setSize(tileSize/2, tileSize).setInteractive();
        this.p3event = this.add.image(-160, 500, 'exclaim').setScale(2).setScrollFactor(0).setVisible(false);

        //=============================================================
        //NEW INTERACTION MENU


        


        this.interactMen = new Interaction(this, - this.cam.width/2, - this.cam.height/2, '1', '2', '3', 0, 0, this.controled, 12, 12).setScrollFactor(0);
        this.interhist = false;

        //making hoverable button for interactive menu
        this.interact = this.add.image(game.config.width/2 + 380, -game.config.height/2 + 80, 'interactOff').setOrigin(0, 0).setScrollFactor(0).setScale(2);

        this.interactOn = this.add.image(game.config.width/2 + 380, -game.config.height/2 + 80, 'interactOn').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.interactOn.setInteractive();
        this.interactOn.alpha = 0.0;



        

        //this is the actual interactive menu that pops up when hovering over button
        this.menuMain = this.add.tileSprite(-480, -290, 960, 540, 'interactiveMenu').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.menu1 = this.add.tileSprite(-480, -290, 960, 540, 'interactiveTop').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        this.menu2 = this.add.tileSprite(-480, -290, 960, 540, 'interactiveBottom').setOrigin(0, 0).setScrollFactor(0).setScale(2);
        
        //set it to invis by default
        this.interactMen.alpha = 0.0;
        this.menuMain.alpha = 0.0;
        this.menu1.alpha = 0.0;
        this.menu2.alpha = 0.0;

        //when hovering over "interact"...
        this.interactOn.on("pointerover", () => 
        { 
            console.log(this.interactMen.player);
            if(this.controled == this.interactMen.player && pause)
            {
                this.interactMen.visible = true;
            }
        })

    //=============================================================

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
                this.agentname.text = "Observing: " + agentNames[0];
                this.trgt = this.controled;
            }
            if(gameObject == this.p2 || gameObject == this.p2Selector)
            {
                this.controled = this.p2;
                this.swapping = true;
                this.cam.startFollow(this.p2);
                this.agentname.text = "Observing: " + agentNames[1];
                this.trgt = this.controled;
            }
            if(gameObject == this.p3 || gameObject == this.p3Selector)
            {
                this.controled = this.p3;
                this.swapping = true;
                this.cam.startFollow(this.p3);
                this.agentname.text = "Observing: " + agentNames[2];
                this.trgt = this.controled;
            }
            if(gameObject == this.restartButton)
            {
                failNum = 0;
                clueNum = 0;
                pause = false;
                this.GameplayMusic.stop();
                this.scene.start("menuScene");
            }


            console.log(gameObject);
        }, this);

        //process gameobjectswaping
        this.input.keyboard.on('keydown', (event) =>
        {
            //1
            if(event.keyCode == 49)
            {
                this.controled = this.p1;
                this.cam.startFollow(this.p1);
                this.agentname.text = "Observing: " + agentNames[0];
                this.trgt = this.controled;
                //this.zoomTo(1, 3000);
            }
            //2
            if(event.keyCode == 50)
            {
                this.controled = this.p2;
                this.cam.startFollow(this.p2);
                this.agentname.text = "Observing: " + agentNames[1];
                this.trgt = this.controled;
                //this.zoomTo(1, 3000);
            }
            //3
            if(event.keyCode == 51)
            {
                this.controled = this.p3;
                this.cam.startFollow(this.p3);
                this.agentname.text = "Observing: " + agentNames[2];
                this.trgt = this.controled;
                //this.zoomTo(1, 3000);
            }
        }, this);
        this.timer = 0;
        this.delay = -1;
    }

    update() 
    {   
        if (pause && this.interactMen.player == this.controled) 
        {
            console.log(this.interactMen.player == this.controled);
            this.interactOn.alpha = 1.0;    
        } 
        else 
        {
            this.interactOn.alpha = 0.0;
        }
        
        this.p1event.visible = false;
        this.p2event.visible = false;
        this.p3event.visible = false;
        if(this.interhist)
        {
            if(this.interactMen.player == this.p1)
            {
                this.p1event.visible = true;
            }
            else if(this.interactMen.player == this.p2)
            {
                this.p2event.visible = true;
            }
            else if(this.interactMen.player == this.p3)
            {
                this.p3event.visible = true;
            }
        }
       
        if(this.timer == 10)
        {
            //set the pips current tile
            this.p1.currentTile = this.map.tiles[Math.floor(this.p1.y/tileSize)][Math.floor(this.p1.x/tileSize)];
            this.p2.currentTile = this.map.tiles[Math.floor(this.p2.y/tileSize)][Math.floor(this.p2.x/tileSize)];
            this.p3.currentTile = this.map.tiles[Math.floor(this.p3.y/tileSize)][Math.floor(this.p3.x/tileSize)];
            //start pathfinding
            this.p1.pathfind();
            this.p2.pathfind();
            this.p3.pathfind();
        }
        if(this.interactMen.visible)
        {
            //show the interactive menu!
            this.menuMain.alpha = 1; 
            this.menu1.alpha = 1;
            this.menu2.alpha = 1;
            this.interactMen.alpha = 1;
            //hide stats too
            this.agentstr.alpha = 0;
            this.agentdex.alpha = 0;
            this.agentcon.alpha = 0;
            this.agentint.alpha = 0;
            this.agentwis.alpha = 0;
            this.agentcha.alpha = 0; 
            this.agentname.alpha = 0;
            this.p1Background.alpha = 0;
            this.p2Background.alpha = 0;
            this.p3Background.alpha = 0;

            this.p1AgentName.alpha = 0;
            this.p1HeadClone.alpha = 0;
            this.p1Selector.alpha = 0;

            this.p2AgentName.alpha = 0;
            this.p2HeadClone.alpha = 0;
            this.p2Selector.alpha = 0;

            this.p3AgentName.alpha = 0;
            this.p3HeadClone.alpha = 0;
            this.p3Selector.alpha = 0;
        }
        else
        {
            //make the interactive menu incvis again!
            this.interactMen.alpha = 0.0;
            this.menuMain.alpha = 0.0;
            this.menu1.alpha = 0.0; 
            this.menu2.alpha = 0.0; 

            //unhide stats
            this.agentstr.alpha = 0;
            this.agentdex.alpha = 0;
            this.agentcon.alpha = 0;
            this.agentint.alpha = 0;
            this.agentwis.alpha = 0;
            this.agentcha.alpha = 0;
            this.agentname.alpha = 0;
            this.p1Background.alpha = 1;
            this.p2Background.alpha = 1;
            this.p3Background.alpha = 1;

            this.p1AgentName.alpha = 1;
            this.p1HeadClone.alpha = 1;
            this.p1Selector.alpha = 1;

            this.p2AgentName.alpha = 1;
            this.p2HeadClone.alpha = 1;
            this.p2Selector.alpha = 1;

            this.p3AgentName.alpha = 1;
            this.p3HeadClone.alpha = 1;
            this.p3Selector.alpha = 1;
        }

        //manage the delay for a interactive menu screen to go away
        if(this.delay == 0)
        {
            this.interactMen.visible = false;
            pause = false;
        }
        if(this.delay >= 0)
        {
            this.delay--;
        }

        this.timer += 1;

        //calculate n
        this.p1Selector.x = (this.cam.x + 32)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        this.p2Selector.x = (this.cam.x + 96)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        this.p3Selector.x = (this.cam.x + 160)/this.cam.zoom + this.cam.scrollX - this.cam.width/2;
        
        this.p1Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;
        this.p2Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;
        this.p3Selector.y = (this.cam.height - 50)/this.cam.zoom + this.cam.scrollY - this.cam.height/2;

        //console.log(this.cam.scrollY - this.cam.height/2);
        this.p1Selector.setScale(2/this.cam.zoom).setSize(tileSize/4, tileSize);
        this.p2Selector.setScale(2/this.cam.zoom).setSize(tileSize/4, tileSize);
        this.p3Selector.setScale(2/this.cam.zoom).setSize(tileSize/2, tileSize);
        this.swapping = false;

        this.agentstr.text = "Strength: " + this.trgt.stats[0];
        this.agentdex.text = "Dexterity: " + this.trgt.stats[1];
        this.agentcon.text = "Constitution: " + this.trgt.stats[2];
        this.agentint.text = "Intelligence: " + this.trgt.stats[3];
        this.agentwis.text = "Wisdom: " + this.trgt.stats[4];
        this.agentcha.text = "Charisma: " + this.trgt.stats[5];

        if((clueGoal == clueNum || failGoal == failNum) && this.delay == 0)
        {
            this.GameplayMusic.stop();
            this.scene.start("endScene");
        }
    }
    
}