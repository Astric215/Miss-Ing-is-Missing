class Map 
{   
    constructor(scene)
    {
        this.map = [];
        this.scene = scene;
    }

    //loads the map into the scene from a json file
    loadMap()
    {
        console.log('loading map');
        //load the map
        this.map = 
        [
            [{"texture": 'wall'}, {"texture": 'wall'},  {"texture": 'wall'},  {"texture": 'wall'},  {"texture": 'wall'}],
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'wall'}],
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'wall'}],
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'floor'}, {"texture": 'wall'}],
            [{"texture": 'wall'}, {"texture": 'wall'}, {"texture": 'wall'}, {"texture": 'wall'}, {"texture": 'wall'}]
        ];
        //load the map into the world
        for(let i = 0; i < this.map.length; i++)
        {
            for(let j = 0; j < this.map[i].length; j++)
            {
                //
                let config = this.map[i][j];
                this.map[i][j] = 
                    new Tile(this.scene, j*tileSize, i*tileSize, 'tileAtlas', config["texture"], {}, this.map[i][j]).setOrigin(0, 0);
            }
        }
        //set adjacency list
        for(let i = 0; i < this.map.length; i++)
        {
            for(let j = 0; j < this.map[i].length; j++)
            {
                if(i!=0)
                {
                    this.map[i][j].adjacency.push(this.map[i-1][j]);
                }
                if(i!=this.map.length)
                {
                    this.map[i][j].adjacency.push(this.map[i+1][j]);
                }
                if(j!=0)
                {
                    this.map[i][j].adjacency.push(this.map[i][j-1]);
                }
                if(j != this.map[i].length){
                    this.map[i][j].adjacency.push(this.map[i][j+1]);
                }
            }
        }
    }
}