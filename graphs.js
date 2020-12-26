//Set of values that are related in a pair-wise fashion. Kinda like a network

//Model real world data
/*-Graphs
        -Trees
            -Linked List
*/

/*Types: Directed (one way direction) - Undirected (parallel)
         Weighted - Unweighted
         Cyclic (loop)- Acyclic (reach an end)
*/

//Edge List
const graphEL = [[0,1], [2,1], [2,3], [3,1]]

//Adjacency List
const graphAL = {
    0: [2],
    2: [0, 1, 3],
    3: [1,2],
    1: [2,3]
}

//Adjacency Matrix
const graphAM = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0]
]



