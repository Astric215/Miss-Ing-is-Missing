/*
    definition of game and other var
*/
let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    fps: {
        target: 60,
        forceSetTimeOut: true
    },
    //autoCenter: true,

    //new code to center AND scale to fit screen
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 540
    },
    scene: [Load, Menu, Mansion, DressUp, CharacterSelection]
};

let pip1, pip2, pip3;
let tileSize = 64;

let game = new Phaser.Game(config);

// reserve keyboard vars


function pad(n, width, z) 
{
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}