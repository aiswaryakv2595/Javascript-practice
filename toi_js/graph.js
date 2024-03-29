class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
        this.addVertex(vertex1)
        if(!this.adjacencyList[vertex2])
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }
}
const graphs = new Graph()
graphs.addEdge(10,20)
graphs.addEdge(20,30)
graphs.print()