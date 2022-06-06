class Map 
{   
    constructor(scene)
    {
        this.map = null;
        this.scene = scene;
        this.tiles = [];
        this.objects = [];
    }

    //loads the map into the scene from a json file
    loadMap()
    {
        console.log('loading map');
        //add in the map from Tiled
        this.map = this.scene.add.tilemap("mansionMap");
        let tilesetM = this.map.addTilesetImage("mansionTiles", 'mansionTiles', 64, 64, 0, 1, 1);  // set tileset name
        let tilesetG = this.map.addTilesetImage("grass", 'grass', 64, 64, 0, 1, 82);  // set tileset name
        let tilesets= [tilesetM, tilesetG]
        let layer = this.map.createLayer('ground', tilesets, 0, 0);  // set layer name
        let layer2 = this.map.createLayer('walls', tilesets, 0, 0);  // set layer name

        //make tile references
        for(let i = 0; i < this.map.height; i++)
        {
            this.tiles.push([]);
            for(let j = 0; j < this.map.width; j++)
            {
                //add the tiles to the world
                let config = [];
                //make a name for later
                config["name"] = j.toString() + ',' + i.toString();
                
                this.tiles[i].push(new Tile(config, this.map.getTileAt(j,i)));
                this.tiles[i][j].tileX = j;
                this.tiles[i][j].tileY = i;
            }
        }
        //set adjacency list of all tiles
        for(let i = 0; i < this.map.height; i++)
        {
            for(let j = 0; j < this.map.width; j++)
            {
                if(this.tiles[i][j].obj == null)
                {
                    //add object
                    if(Math.random() < 0.1)
                    {
                        this.objects.push(new Pip(this.scene, j*64, i*64, 9, 3, 1));
                        this.objects[this.objects.length-1].genClothes(1);
                        this.objects[this.objects.length-1].npcToggle = true;
                        this.objects[this.objects.length-1].moveToTile(j, i, 1, 0);
                    }
                    //add random move points
                    if(Math.random() < 0.1)
                    {
                        randomMovePoints.push(this.tiles[i][j]);
                    }
                    //only add to adjacency if the current layer tile is null
                    //aka the tile is not a wall
                    if(i!=0)
                    {
                        if(this.tiles[i-1][j].obj == null)
                        {
                            this.tiles[i][j].adjacent.push(this.tiles[i-1][j]);
                        }
                    }
                    if(i < this.tiles.length - 1)
                    {
                        if(this.tiles[i+1][j].obj == null)
                        {
                            this.tiles[i][j].adjacent.push(this.tiles[i+1][j]);
                        }
                    }
                    if(j!=0)
                    {
                        if(this.tiles[i][j-1].obj == null)
                        {
                            this.tiles[i][j].adjacent.push(this.tiles[i][j-1]);
                        }
                    }
                    if(j < this.tiles[i].length - 1){
                        if(this.tiles[i][j+1].obj == null)
                        {
                            this.tiles[i][j].adjacent.push(this.tiles[i][j+1]);
                        }
                    }
                }
            }
        }
    }
}