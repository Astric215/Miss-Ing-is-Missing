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
        check stats
*/
class Pip extends Phaser.GameObjects.Container 
{
    constructor(scene, x, y, hair, head, body, legs)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "tPipSprites", "Leg_" + legs));
        this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "tPipSprites", "Body_" + body));
        this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "tPipSprites", "Head_" + head));
        this.add(new Phaser.GameObjects.Sprite(scene, 0, 0, "tPipSprites", "Hair_" + hair));
        this.stats = 10; // {}:
        this.trait = "booby"; // (:
        this.npcToggle = false;
        this.ix = 0;
        this.iy = 0;
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
        this.getAt(3).setFrame("Hair_" + hair);
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