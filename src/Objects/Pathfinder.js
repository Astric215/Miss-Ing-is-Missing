class Pathfinder
{
    constructor(scene)
    { 
        this.path = [];
        this.start = null;
        this.frontier = [];
        this.cameFrom = {};
        this.scene = scene;
        this.arrows=[];
    }

    //basic pathfinding via bfs: bfs(start) where start is a tile
    bfs(start, destination)
    {
        this.start = start;
        //start is a tile from the map. The current tile the player is on
        let frontier = [];
        frontier.push(this.start);
        this.cameFrom = {};
        this.cameFrom[this.start.config['name']] = null;

        //clears all arrows
        for(let i = 0; 0 < this.arrows.length; i++)
        {
            this.arrows.pop().destroy();
        }

        //while there are still tiles to be explored
        while(frontier.length != 0)
        {

            let current = frontier.shift();
            if(current == destination)
            {
                break;
            }
            //add all adjacent tiles to the tile to the searchable frontier
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

    //allows for priority queue pushing
    pQueuePush(element, queue)
    {
        console.log('pqueuepush');
        let i = 0;
        for(i; i < queue.length; i++)
        {
            if(queue[i][1] > element[1])
            {
                queue.splice(i, 0, element);
                return queue;
            }
        }
        queue.push(element);
        return queue;
    }

    //basic pathfinding via bfs: bfs(start) where start is a tile
    astar(start, destination)
    {
        this.start = start;
        //start is a tile from the map. The current tile the player is on
        let frontier = [];
        this.pQueuePush([this.start, 0], frontier);
        let totalCost = {};
        this.cameFrom = {};
        this.cameFrom[this.start.config['name']] = null;
        totalCost[this.start.config['name']] = 0;


        //clears all arrows
        for(let i = 0; 0 < this.arrows.length; i++)
        {
            this.arrows.pop().destroy();
        }

        //while there are still tiles to be explored
        while(frontier.length != 0)
        {

            let current = frontier.shift();

            if(current == destination)
            {
                break;
            }
            //add all adjacent tiles to the tile to the searchable frontier
            for(let i = 0; i < current.adjacent.length; i++)
            {
                let newCost = totalCost[current.config["name"]];
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
            this.arrows.push(this.scene.add.image(coords[0], coords[1], 'arrowAtlas', "left").setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileX < current.tileX)
        {
            this.arrows.push(this.scene.add.image(coords[0], coords[1], 'arrowAtlas', "right").setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileY > current.tileY)
        {
            this.arrows.push(this.scene.add.image(coords[0], coords[1], 'arrowAtlas', "up").setOrigin(0, 0));
        }
        else if(current.adjacent[i].tileY < current.tileY)
        {
            this.arrows.push(this.scene.add.image(coords[0], coords[1], 'arrowAtlas', "down").setOrigin(0, 0));
        }
    }

    constructPath(goal)
    {
        this.path = [];
        let current = goal;
        //console.log('path:' + this.path);
        //go through cameFrom until you are at the start
        while((current != this.start))
        {
            //console.log(current.config["name"])
            this.path.push(current);
            current = this.cameFrom[current.config["name"]];
        }
        
    }
}