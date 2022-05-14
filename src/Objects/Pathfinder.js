class Pathfinder
{
    constructor(pip, start)
    { 
        
    }

    //basic pathfinding via bfs: bfs(start) where start is a tile
    bfs(start)
    {
       //start is a tile from the map. The current tile the player is on
       let frontier = [];
       frontier.push(this.start);
       let reached = new Set();
       reached.add(this.start);

        while(frontier.size != 0)
        {
            let current = frontier.pop()
            for(let i = 0; i < current.adjacent.length; i++)
            {
                if(!reached.has(current.adjacent[i])){
                    frontier.push(current.adjacent[i]);
                    reached.add(current.adjacent[i]);
                }

            }
        }           
    }
}