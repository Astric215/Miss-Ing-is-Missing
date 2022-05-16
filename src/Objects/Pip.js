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
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "footLeft" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "footRight" + this.tonePad));
        }
        if(this.gender == 1)
        {
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "legsFemale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "torsoFemale" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "headTone" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "hairStyle" + this.hairPad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "footLeft" + this.tonePad));
            this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "bodyAtlas", "footRight" + this.tonePad));
        }
        this.stats = 10; // {}:
        this.trait = "booby"; // (:
        this.npcToggle = false;
        this.ix = 0;
        this.iy = 0;
        this.setScale(.5, .5);
        this.tween;
        console.log(this);
    }

    shift(scene)
    {
        this.iterate((child) =>
        {
            console.log(scene);
            child.scene = scene;
            scene.add.existing(child);
        }, this);   
        this.scene = scene;
        scene.add.existing(this);
        console.log(this);
    }

    move(x, y)
    {
        this.x += x;
        this.y += y;
    }

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

    changeHair(hair)
    {
        if(this.gender == 0)
        {
            this.hair = hair;
            this.hairPad = pad(hair, 2, "0");
            this.getAt(3).setTexture("");
        }
    }
    
    changeHead(head)
    {
        this.getAt(2).setFrame("Head_" + head);
    }
    
    changeBody(body)
    {
        this.getAt(1).setFrame("Body_" + body + ".png");
    }
    
    changeLegs(legs)
    {
        this.getAt(0).setFrame("Leg_" + legs + ".png");
    }

    checkStats()
    {
        return this.stats;
    }
}