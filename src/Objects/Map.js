class Map 
{   
    constructor(scene)
    {
        this.map = [];
        this.scene = scene;
    }

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
                let config = this.map[i][j];
                this.map[i][j] = 
                    new Tile(this.scene, j*tileSize, i*tileSize, 'tileAtlas', config["texture"], {}, this.map[i][j]).setOrigin(0, 0);
            }
        }
    }

    placeMap()
    {
        
    }
}