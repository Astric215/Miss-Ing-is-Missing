/*
    definition of game and other var
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    autoCenter: true,
    scene: [ Load, Menu ]
};

let pip1;
let tileSize = 32;

let game = new Phaser.Game(config);