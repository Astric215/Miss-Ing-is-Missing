let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    autoCenter: true,
    scene: [Load, Menu, Play]
};


let game = new Phaser.Game(config);

// reserve keyboard vars
