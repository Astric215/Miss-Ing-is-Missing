class Pathfinder
{
    constructor(scene)
    { 
        this.path = [];
        this.start = null;
        this.frontier = [];
        this.cameFrom = {};
        this.totalCost = {};
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

    //heuristic function for a star pathfinding
    heuristic(destination, next)
    {
        return Math.abs(destination.tileX - next.tileX) + Math.abs(destination.tileY - next.tileY);
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
            let current = frontier.shift()[0];

            if(current == destination)
            {
                break;
            }
            
            //add all adjacent tiles to the tile to the searchable frontier
            
            for(let i = 0; i < current.adjacent.length; i++)
            {
                let newCost = totalCost[current.config["name"]] + 1;
                if(!(current.adjacent[i].config["name"] in this.totalCost) || (newCost < this.totalCost[current.adjacent[i].config["name"]])){
                    this.totalCost[current.adjacent[i].config["name"]] = newCost;
                    let priority = newCost + this.heuristic(destination, current.adjacent[i])
                    this.pQueuePush([current.adjacent[i], priority], frontier);
                    this.cameFrom[current.adjacent[i].config["name"]] = current;
                    //this.addArrow(current, i);
                }
                /*if next not in cost_so_far or new_cost < cost_so_far[next]:
                    cost_so_far[next] = new_cost
                    priority = new_cost + heuristic(goal, next)
                    frontier.put(next, priority)
                    came_from[next] = current*/
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
            this.path.push(current);
            console.log(current);
            current = this.cameFrom[current.config["name"]];
        }
        
    }
}