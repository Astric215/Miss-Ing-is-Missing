class Map 
{   
    constructor(scene)
    {
        this.map = [];
    }

    loadMap()
    {
        //load the map
        this.map = 
        [
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}],
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}],
            [{"texture": 'wall'}, {"texture": 'floor'}, {"texture": 'floor'}]
        ];

        //load the map into the world
        for(let i = 0; i < this.map.length; i++)
        {
            for(let j = 0; j < this.map[i].length; j++)
            {
                let config = map[i][j];
                this.map[i][j] = new Tile(this.scene, j*32, i*32, config["texture"], null, {});
            }
        }
    }

    placeMap()
    {
        
    }
}