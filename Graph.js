// NODE OR VERTEX , EDGE OR CONNECTION
// BI-DIRECTIONAL RELATIONSHIP
// WAYS OF STORING GRAPHS 1. ADJACENCY MATRIX 2. ADJ LIST

// ADJ LIST

const graph = {
    'A': ['B', 'E'], 
    'B': ['A', 'C'],
    'C': ['D', 'B'],
    'D': ['E', 'C'],
    'E': ['A' , 'D']
}


class Graph{
    constructor() {
        this.adjList ={}
    }
    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = []
            return true;
        }
        return false;
    }
    addEdge(ver1, ver2) {
        if (this.adjList[ver1] && this.adjList[ver2]) {
            this.adjList[ver1].push(ver2);
            this.adjList[ver2].push(ver1)
            return true
        }
        return false;
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjList[ver1] && this.adjList[ver2]) {

            this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2)

            this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1)
            return true;
        }
        return false
    }
    remove(vertex) {
        if (!this.adjList[vertex]) return undefined;
        while (this.adjList[vertex].length) {
            let temp = this.adjList[vertex].pop()
            this.removeEdge(vertex,temp)
        }
        delete this.adjList[vertex]
        return this;
    }
}