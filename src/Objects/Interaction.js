// Interaction constructor variables
// scene: the scene
// x: x
// y: y
// Question: the interaction description
// Choice1: the first choice description
// Choice2: the second choice description
// c1StatInd: the index corrisponding to the stat for the first choice
// c2StatInd: the index corrisponding to the stat for the second choice
// player: the pip to interact with
// c1StatReq: the required amount of a stat for the first choice
// c2StatReq: the required amount of a stat for the second choice

class Interaction extends Phaser.GameObjects.Container 
{
    constructor(scene, x, y, Question, Choice1, Choice2, c1StatInd, c2StatInd, player, c1StatReq, c2StatReq)
    {
        super(scene, x, y);
        scene.add.existing(this);
        let middle = x-240;
        this.style = { font: "60px Arial", fill: "#ff0000", align: "center", wordWrap: { width: 1500 } };
        this.Question = new Phaser.GameObjects.Text(scene, middle, y , Question, this.style).setScrollFactor(0);
        this.Question.setInteractive();
        this.Choice1 = new Phaser.GameObjects.Text(scene, middle, y + 500, Choice1, this.style).setScrollFactor(0);
        this.Choice1.setInteractive();
        this.Choice2 = new Phaser.GameObjects.Text(scene, middle, y + 675, Choice2, this.style).setScrollFactor(0);
        this.Choice2.setInteractive();
        this.Question.tint = "#000000"
        this.c1StatInd = c1StatInd;
        this.c2StatInd = c2StatInd;
        this.c1StatReq = c1StatReq;
        this.c2StatReq = c2StatReq;
        this.statstyle = { font: "30px Arial", fill: "#000000", align: "left", wordWrap: { width: 150 } };
        this.sts = new Phaser.GameObjects.Text(scene, middle - 150, y - 100, "", this.statstyle).setScrollFactor(0);
        this.sts.text += "STR: " + player.stats[0] + "\n\n";
        this.sts.text += "DEX: " + player.stats[1] + "\n\n";
        this.sts.text += "CON: " + player.stats[2] + "\n\n";
        this.sts.text += "INT: " + player.stats[3] + "\n\n";
        this.sts.text += "WIS: " + player.stats[4] + "\n\n";
        this.sts.text += "CHA: " + player.stats[5] + "\n\n";
        this.player = player;
        this.visible = false;
        this.add(this.Question);
        this.add(this.Choice1);
        this.add(this.Choice2);
        this.add(this.sts);
        //pause = true;
        scene.input.on("gameobjectdown", (Pointer, GameObject) =>
            {
                if(GameObject == this.Choice1)
                {
                    ButtonClick.play();
                    if(this.player.checkStats()[this.c1StatInd] >= this.player.checkStats()[this.c2StatInd])
                    {
                        //succeed
                        clueNum++;
                        this.Question.text = "Success " + clueNum + "/" + clueGoal + " clues found";
                        this.Choice1.text = '';
                        this.Choice2.text = '';
                    }
                    else
                    {
                        //fail
                        this.Question.text = "Failure " + (failGoal - failNum) + " lives remaining";
                        this.Choice1.text = '';
                        this.Choice2.text = '';
                    }
                    this.scene.delay = 180;
                }
                else if(GameObject == this.Choice2)
                {
                    ButtonClick.play();
                    if(this.player.checkStats()[this.c1StatInd] <= this.player.checkStats()[this.c2StatInd])
                    {
                        //succeed
                        clueNum++;
                        this.Question.text = "Success " + clueNum + "/" + clueGoal + " clues found";
                        this.Choice1.text = '';
                        this.Choice2.text = '';

                    }
                    else
                    {
                        //fail
                        this.Question.text = "Failure " + (failGoal - failNum) + " lives remaining";
                        this.Choice1.text = '';
                        this.Choice2.text = '';
                    }
                    this.scene.delay = 180;
                }
                
            }, this
        )
        //console.log(this);
        //this.create();
    }

    create()
    {
        console.log(this.Question);
        console.log(this.Choice1);
        console.log(this.Choice2);
    }
    
}