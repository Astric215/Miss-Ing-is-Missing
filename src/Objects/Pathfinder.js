class Pathfinder
{
    constructor()
    { 
        this.path = [];
        this.start = null;
        this.cameFrom = {};
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

        while(frontier.length != 0)
        {

            let current = frontier.pop();
            for(let i = 0; i < current.adjacent.length; i++)
            {
                if(!(current.adjacent[i].config["name"] in this.cameFrom)){
                    frontier.push(current.adjacent[i]);
                    this.cameFrom[current.adjacent[i].config["name"]] = current;
                }
            }
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