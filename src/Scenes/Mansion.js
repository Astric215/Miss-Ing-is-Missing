class Play extends Phaser.Scene {
    constructor()
    {
        super("playScene");
    }

    create() 
    {
        this.map = new Map(this);
        this.map.loadMap();
    }

    update() 
    {
        
    }
}