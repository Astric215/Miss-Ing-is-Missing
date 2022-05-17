class Pathfinder
{
    constructor(scene)
    { 
        this.path = [];
        this.start = null;
        this.cameFrom = {};
        this.scene = scene;
        this.arrows=[];
    }

    //basic pathfinding via bfs: bfs(start) where start is a tile
    bfs(start)
    {
        this.start = start;
        //start is a tile from the map. The current tile the player is on
        let frontier = [];
        frontier.push(this.start);
        this.cameFrom = {};
        this.cameFrom[this.start.config['name']] = null;

        //clears all arrows
        console.log('arrows: ' + this.arrows.length);
        for(let i = 0; 0 < this.arrows.length; i++)
        {
            this.arrows.pop().destroy();
        }
        console.log('arrows: ' + this.arrows.length);

        while(frontier.length != 0)
        {

            let current = frontier.shift();
            
            for(let i = 0; i < current.adjacent.length; i++)
            {
                if(!(current.adjacent[i].config["name"] in this.cameFrom)){
                    frontier.push(current.adjacent[i]);
                    this.cameFrom[current.adjacent[i].config["name"]] = current;
                    //this.addArrow(current, i);
                }
            }
        }      
    }
    
    //adds direction arrows for the pathfinding grid
    //takes current tile and i as an input
    addArrow(current, i) 
    {
        let coords = [current.adjacent[i].tileX*tileSize, current.adjacent[i].tileY*tileSize];
        //place the tile
        if(current.adjacent[i].tileX > current.tileX)
        {
            this.arrows.push(new Tile(this.scene, coords[0], coords[1], 'arrowAtlas', "left", {}, {}).setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileX < current.tileX)
        {
            this.arrows.push(new Tile(this.scene, coords[0], coords[1], 'arrowAtlas', "right", {}, {}).setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileY > current.tileY)
        {
            this.arrows.push(new Tile(this.scene, coords[0], coords[1], 'arrowAtlas', "up", {}, {}).setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileY < current.tileY)
        {
            this.arrows.push(new Tile(this.scene, coords[0], coords[1], 'arrowAtlas', "down", {}, {}).setOrigin(0, 0));
        }
    }

    constructPath(goal)
    {
        this.path = [];
        let current = goal;
        console.log('path:' + this.path);
        //go through cameFrom until you are at the start
        while((current != this.start))
        {
            console.log(current.config["name"])
            this.path.push(current);
            current = this.cameFrom[current.config["name"]];
        }
        
    }
}