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
        this.activeTween = null;
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
        this.clothing = [0, 0, 0, 0, 0];
        this.stats = [10, 10, 10, 10, 10, 10]; // {}:
        this.trait = "booby"; // (:
        this.npcToggle = false;
        this.ix = 0;
        this.iy = 0;
        this.setSize(tileSize/2, tileSize);
        this.setInteractive();
        console.log(this);
        this.dr = 0;
    }

    destroyPip ()
    {
        this.destroy();
    }

    //make an array of this pips traits
    toArr()
    {
        return [this.x, this.y, this.hair, this.tone, this.gender, this.clothing];
    }

    //increment clothing index
    incoClothes(pos)
    {
        if(this.clothing[pos] >= ClothingNums[this.gender][pos])
        {
            this.clothing[pos] = 0;
            if(pos == 1 && this.dr == 1)
            {
                this.dr = 0;
            }
        }
        else
        {
            this.clothing[pos] += 1;
            if(pos == 1 && this.dr == 0)
            {
                this.dr = 1;
            }
            else if((pos == 2 || pos == 3) && this.dr == 1)
            {
                this.dr = 0;
            }
        }
        this.genClothes();
    }

    // generates clothes based on cloth array or randomly if rand is 1
    genClothes(rand = 0,cloth = this.clothing, dr = this.dr)
    {
        if(this.length > 5)
        {
            //console.log(this);
            for(let a = this.length - 1; a > 4; a--)
            {
                this.removeAt(a, true);
            }
            //console.log(this);
        }
        for(let c = 5; c >= 0; c--)
        {
            if(rand == 1)
            {
                this.dr = Phaser.Math.Between(0, 1);
                cloth[c] = Phaser.Math.Between(1, ClothingNums[this.gender][c]);
                //console.log(c);
            }
            if(dr == 0 && c == 1)
            {
                cloth[1] = 0;
                continue;
            }
            if(dr == 1 && (c == 2 || c == 3))
            {
                cloth[2] = 0;
                cloth[3] = 0;
                continue;
            }
            this.dr = dr;
            this.clothing = cloth;
            if(cloth[c] > 0)
            {
                // console.log(c);
                // console.log("nxt");
                // console.log(cloth[c]);
                this.add(new Phaser.GameObjects.Sprite(this.scene, 0, 0, ClothingAtlases[this.gender], ClothingNames[this.gender][c] + pad(cloth[c], 3, "0")));
            }
        }
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
        if(this.activeTween)
        {
            this.activeTween.stop();
        }
        this.ix += ix;
        this.iy += iy;
        this.side = side;
        if(dur < 0)
        {
            this.activeTween = this.scene.tweens.add(
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
        else
        {
            this.activeTween = this.scene.tweens.add(
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
    }

    //move to an xy coordinate
    moveTo(tx, ty, dur = 1000, eas = 'power0', del = 0)
    {
        if(this.activeTween)
        {
            this.activeTween.stop();
        }
        this.activeTween = this.scene.tweens.add(
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
        if(this.activeTween)
        {
            this.activeTween.stop();
        }
        this.ix = ix;
        this.iy = iy;
        this.side = side;
        if(dur < 0)
        {
            this.activeTween = this.scene.tweens.add(
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
            this.activeTween = this.scene.tweens.add(
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
        this.pathfinder.bfs(this.currentTile, this.destination);
        this.pathfinder.constructPath(this.destination);
        console.log(this);
    }



    //move along the path defined by the pathfinder
    pathfind(dest = this.destination)
    {
        if(this.pathfinder.path.length != 0)
        {
            let nextMove = this.pathfinder.path.pop();
            this.currentTile = nextMove;
            //save this for callbacks
            let self = this;
            //recursively tween across the path
            this.scene.tweens.add(
                {
                    targets: this,
                    x: nextMove.tileX*tileSize + tileSize/4,
                    y: nextMove.tileY*tileSize + tileSize/2,
                    duration: 400,
                    ease: 'power-0',
                    delay: 0,
                    onComplete: function()
                    {
                        if(dest == self.destination)
                        {
                            self.pathfind(dest);
                        }
                        
                    }
                }
            );
        }
        else
        {
            let randGoal = randomMovePoints[Math.floor(Math.random() * randomMovePoints.length)];
            this.setDestination(randGoal);
            this.pathfind();
        }
        
    }

    update()
    {
        
    }

}