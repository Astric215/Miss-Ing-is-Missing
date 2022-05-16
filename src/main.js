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
    scene: [Load, Menu, Mansion, DressUp, CharacterSelection]
};

let pip1, pip2, pip3;
let pip1arr, pip2arr, pip3arr;
let tileSize = 32;

let game = new Phaser.Game(config);

// reserve keyboard vars


function pad(n, width, z) 
{
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}