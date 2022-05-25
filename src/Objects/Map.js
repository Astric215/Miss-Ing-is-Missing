class Map 
{   
    constructor(scene)
    {
        this.map = null;
        this.scene = scene;
        this.tiles = [];
    }

    //loads the map into the scene from a json file
    loadMap()
    {
        console.log('loading map');
        //add in the map from Tiled
        this.map = this.scene.add.tilemap("mansionMap");
        let tileset = this.map.addTilesetImage("mansionTiles", 'mansionTiles');  // set tileset name
        let layer = this.map.createLayer('ground', tileset, 0, 0);  // set layer name
        let layer2 = this.map.createLayer('walls', tileset, 0, 0);  // set layer name
        

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