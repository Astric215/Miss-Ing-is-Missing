class Mansion extends Phaser.Scene {
    constructor()
    {
        super("mansionScene");
    }

    create() 
    {
        this.map = new Map(this);
        this.map.loadMap();

        pip1 = new Pip(this, 100, 100, 1, 1, 1, 1);
        pip1.moveTo(200,200, 1000, 'power0', 0);
    }

    update() 
    {
      console.log("mansionScene")  
    }
}