const queue = require('./queue.js');
let q = new queue.structure();
class graph{
    data;
    edges;
    constructor(data){
        this.data=data;
        this.edges=[];
    }
    addEdge(node){
        this.edges.push(node);
        node.edges.push(this);
    }
    print(){
        q.clear();
        //Using BFS;
        q.enqueue(this);
        let visited=[];
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            console.log(temp.data);
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
    }
    bfs(){
        q.clear();
        q.enqueue(this);
        let visited=[];
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            console.log(temp.data);
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
    }
    dfs(){
        let visited=[];
        this.dfsgenerator(this,visited);
    }
    dfsgenerator(node,visited){
        if(visited.includes(node.data)){
            return;
        }
        console.log(node.data);
        visited.push(node.data);
        for(let i=0;i<node.edges.length;i++){
            this.dfsgenerator(node.edges[i],visited);
        }
    }
    sum(){
        let sum=0;
        let visited=[];
        q.clear();
        q.enqueue(this);
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            sum+=temp.data;
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
        return sum;
    }
    max(){
        let max=-Infinity;
        let visited=[];
        q.clear();
        q.enqueue(this);
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            if(temp.data>max){
                max=temp.data;
            }
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
        return max;
    }
    min(){
        let min=Infinity;
        let visited=[];
        q.clear();
        q.enqueue(this);
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            if(temp.data<min){
                min=temp.data;
            }
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
        return min;
    }
    count(){
        let count=0;
        let visited=[];
        q.clear();
        q.enqueue(this);
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            count++;
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
        return count;
    }
    average(){
        return this.sum()/this.count();
    }
    sort(){
        let visited=[];
        q.clear();
        q.enqueue(this);
        let arr=[];
        while(!q.isEmpty()){
            let temp=q.dequeue();
            if(visited.includes(temp.data)){
                continue;
            }
            arr.push(temp.data);
            visited.push(temp.data);
            for(let i=0;i<temp.edges.length;i++){
                q.enqueue(temp.edges[i]);
            }
        }
        arr.sort();
        return arr;
    }
}
module.exports={
    structure:graph,
    description:"Graph data structure",
    methods:{
        addEdge:"Adds an edge to the graph",
        print:"Prints the graph using BFS",
        bfs:"Prints the graph using BFS",
        dfs:"Prints the graph using DFS",
        sum:"Returns the sum of all the nodes in the graph",
        max:"Returns the maximum value of all the nodes in the graph",
        min:"Returns the minimum value of all the nodes in the graph",
        count:"Returns the number of nodes in the graph",
        average:"Returns the average of all the nodes in the graph",
        sort:"Returns the sorted array of all the nodes in the graph"
    }
};