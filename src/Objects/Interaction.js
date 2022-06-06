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
        let middle = x+480;
        this.style = { font: "60px Arial", fill: "#ff0000", align: "center", wordWrap: { width: 1500 } };
        this.Question = new Phaser.GameObjects.Text(scene, middle, y + 250, Question, this.style);
        this.Question.setInteractive();
        this.Choice1 = new Phaser.GameObjects.Text(scene, middle, y + 775, Choice1, this.style);
        this.Choice1.setInteractive();
        this.Choice2 = new Phaser.GameObjects.Text(scene, middle, y + 925, Choice2, this.style);
        this.Choice2.setInteractive();
        this.Question.tint = "#000000"
        this.c1StatInd = c1StatInd;
        this.c2StatInd = c2StatInd;
        this.c1StatReq = c1StatReq;
        this.c2StatReq = c2StatReq;
        this.player = player;
        this.add(this.Question);
        this.add(this.Choice1);
        this.add(this.Choice2);
        scene.input.on("gameobjectdown", (Pointer, GameObject) =>
            {
                if(GameObject == this.Choice1)
                {
                    ButtonClick.play();
                    if(this.player.checkstats()[this.c1StatInd] >= this.c1StatReq)
                    {
                        //succeed
                    }
                    else
                    {
                        //fail
                    }
                }
                else if(GameObject == this.Choice2)
                {
                    ButtonClick.play();
                    if(this.player.checkstats()[this.c2StatInd] >= this.c2StatReq)
                    {
                        //succeed
                    }
                    else
                    {
                        //fail
                    }
                }
            }, this
        )
        console.log(this);
        this.create();
    }

    create()
    {
        console.log(this.Question);
        console.log(this.Choice1);
        console.log(this.Choice2);
    }
}