class graph{
    data;
    edges;
    constructor(data){
        this.data=data;
        this.edges=[];
    }
    addEdge(node){
        this.edges.push(node);
    }
    print(){
        console.log(this.data);
        for(let i=0;i<this.edges.length;i++){
            this.edges[i].print();
        }
    }
}
module.exports=graph;