/*
    class containing all details of a pip (person)
    pips have:
        Hair - object of pip hair
        Head - object of pip head
        Body - object of pip body
        Legs - object of pip legs
        Stats - int/array of different mechanical statistics
        Traits - large augments to pip mechanics
        NPCToggle - designate if pip is an npc
    pips can:
        move
        change hair
        change head
        change body
        change legs
        change feet
        check stats
*/
class Pip extends Phaser.GameObjects.Container 
{
    constructor(scene, x, y, hair, tone, gender)
    {
        super(scene, x, y);
        scene.add.existing(this);
        //pathfinding vars
        this.pathfinder = new Pathfinder(scene);
        this.destination = null;
        this.currentTile = null;

        this.gender = gender;
        this.hair = hair;
        this.hairPad = pad(hair, 2, "0");
        this.tone = tone;
        this.tonePad = pad(tone, 2, "0");
        if(this.gender == 0)
        {
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "legsMale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "torsoMale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "headTone" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "hairStyle" + this.hairPad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "feetTone" + this.tonePad));
        }
        if(this.gender == 1)
        {
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "legsFemale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "torsoFemale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "headTone" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "hairStyle" + this.hairPad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "feetTone" + this.tonePad));
        }
        this.stats = 10; // {}:
        this.trait = "booby"; // (:
        this.npcToggle = false;
        this.ix = 0;
        this.iy = 0;
        this.tween;
        console.log(this);
    }

    destroyPip ()
    {
        this.destroy();
    }

    //make an array of this pips traits
    toArr()
    {
        return [this.x, this.y, this.hair, this.tone, this.gender];
    }

    //move the pip by (x,y)
    move(x, y)
    {
        this.x += x;
        this.y += y;
    }

    //move by an amount of tiles
    moveTile(ix, iy, side = 0, dur = 1000, eas = 'power0', del = 0)
    {
        this.ix += ix;
        this.iy += iy;
        this.side = side;
        if(dur < 0)
        {
            this.scene.tweens.add(
                {
                    targets: this,
                    x: this.ix*tileSize + this.side*tileSize/2 + tileSize/4,
                    y: this.iy*tileSize + tileSize/2,
                    duration: Phaser.Math.Distance.Between(this.x, this.y, this.ix*tileSize + this.side*tileSize/2 + tileSize/4, this.iy*tileSize + tileSize/2)*10,
                    ease: eas,
                    delay: del
                }
            );
        }
        this.scene.tweens.add(
            {
                targets: this,
                x: this.ix*tileSize + this.side*tileSize/2 + tileSize/4,
                y: this.iy*tileSize + tileSize/2,
                duration: dur,
                ease: eas,
                delay: del
            }
        );
    }

    //move to an xy coordinate
    moveTo(tx, ty, dur = 1000, eas = 'power0', del = 0)
    {
        this.scene.tweens.add(
            {
                targets: this,
                x: tx,
                y: ty,
                duration: dur,
                ease: eas,
                delay: del
            }
        );
    }

    //move to a specific tile
    moveToTile(ix, iy, side = 0, dur = 1000, eas = 'power0', del = 0)
    {
        this.ix = ix;
        this.iy = iy;
        this.side = side;
        if(dur < 0)
        {
            this.scene.tweens.add(
                {
                    targets: this,
                    x: ix*tileSize + side*tileSize/2 + tileSize/4,
                    y: iy*tileSize + tileSize/2,
                    duration: Phaser.Math.Distance.Between(this.x, this.y, ix*tileSize + side*tileSize/2 + tileSize/4, iy*tileSize + tileSize/2)*10,
                    ease: eas,
                    delay: del
                }
            );
        }
        else {
            this.scene.tweens.add(
                {
                    targets: this,
                    x: ix*tileSize + side*tileSize/2 + tileSize/4,
                    y: iy*tileSize + tileSize/2,
                    duration: dur,
                    ease: eas,
                    delay: del
                }
            );
        }
    }
    
    //change the hair of the pip
    changeHair(hair)
    {
        if(this.gender == 0)
        {
            this.hair = hair;
            this.hairPad = pad(hair, 2, "0");
            this.getAt(3).setTexture("");
        }
    }
    
    //change the head
    changeHead(head)
    {
        this.getAt(2).setFrame("Head_" + head);
    }
    
    //change the body
    changeBody(body)
    {
        this.getAt(1).setFrame("Body_" + body + ".png");
    }
    
    //change the legs
    changeLegs(legs)
    {
        this.getAt(0).setFrame("Leg_" + legs + ".png");
    }

    //return the stats of this pip
    checkStats()
    {
        return this.stats;
    }

    /*set the destination for the pathfinding
        setDestination(goal)
        goal - a tile object*/
    setDestination(goal)
    {
        //set the goal and start for the p1 pathfinder and run pathfinding algo
        this.destination = goal;
        console.log(this.currentTile);
        this.pathfinder.bfs(this.currentTile);
        this.pathfinder.constructPath(this.destination);
    }


    //move along the path defined by the pathfinder
    pathfind()
    {
        if(this.pathfinder.path.length != 0)
        {
            let nextMove = this.pathfinder.path.pop();
            this.moveToTile(nextMove.tileX,nextMove.tileY,1, -1, 'power0', 0);
            
        }
        
    }

    update()
    {
        //console.log(this.currentTile +','+ this.destination);
        //keep pathfinding until the pip is at the location
        if((this.currentTile != this.destination) && this.destination != null)
        {
            this.pathfind();
        }
    }

}