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
        this.cameFrom[this.start] = null;

        while(frontier.size != 0)
        {
            let current = frontier.pop()
            for(let i = 0; i < current.adjacent.length; i++)
            {
                if(!(current.adjacent[i] in cameFrom)){
                    frontier.push(current.adjacent[i]);
                    cameFrom[current.adjacent[i]] = current;
                }
            }
        }       
    }
    
    constructPath(goal)
    {
        let current = goal;
        while(current != this.start)
        {
            this.path.push(current);
            current = cameFrom[current]
        }
        this.path.push(this.start);
    }
}