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
    scene: [Load, Menu, Mansion, DressUp, CharacterSelection, End]
};


//arrays for pips
let playerPips = [];
let npcPips = [];

let tileSize = 64;
//hat, dress, top, bottom, shoes range for male and female respecively
let ClothingNums = [[13, 6, 24, 18, 12], [12, 6, 22, 16, 13]];
let ClothingNames = [["dudeHat", "dudeDress", "dudeTop", "dudeBottom", "dudeShoes"], ["ladyHat", "ladyDress", "ladyTop", "ladyBottom", "ladyShoes"]];
let ClothingAtlases = ["dudeAtlas", "ladyAtlas"];

//stat to index conversion
let statnames = ["strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

let agentNames = ["A", "B", "C"];

let statdistro;
let events;

let game = new Phaser.Game(config);

//map vars
randomMovePoints = [];
// reserve keyboard vars


function pad(n, width, z) 
{
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

//clones a sprite
function clone(spr)
{
    console.log(spr);
    sprout = new Phaser.GameObjects.Sprite(spr.scene, spr.x, spr.y, spr.texture.key, spr.frame.name);
    console.log(sprout);
    return sprout;
}