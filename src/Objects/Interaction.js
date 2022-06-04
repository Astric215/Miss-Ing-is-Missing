class Interaction extends Phaser.GameObjects.Container 
{
    constructor(scene, x, y, Question, Choice1, Choice2)
    {
        super(scene, x, y);
        scene.add.existing(this);
        this.style = { font: "20px Arial", fill: "#ff0000", align: "center" };
        this.Question = new Phaser.GameObjects.Text(scene, 0, -100, Question, this.style);
        this.Question.setInteractive();
        this.Choice1 = new Phaser.GameObjects.Text(scene, -50, 0, Choice1, this.style);
        this.Choice1.setInteractive();
        this.Choice2 = new Phaser.GameObjects.Text(scene, 50, 0, Choice2, this.style);
        this.Choice2.setInteractive();
        this.Question.tint = "#000000"
        this.add(this.Question);
        this.add(this.Choice1);
        this.add(this.Choice2);
        console.log(this);
    }
    
}