class matrix{
    constructor(rows,columns){
        this.rows=rows;
        this.columns=columns;
        this.matrix=[];
        for(let i=0;i<rows;i++){
            let temp=[];
            for(let j=0;j<columns;j++){
                temp.push(0);
            }
            this.matrix.push(temp);
        }
    }
    print(){
        for(let i=0;i<this.rows;i++){
            console.log(this.matrix[i]);
        }
    }
}
class sparsematrix extends matrix{
    constructor(rows,columns){
        super(rows,columns);
    }
    add(data){
        this.matrix[data[0]][data[1]]=data[2];
    }
    print(){
        for(let i=0;i<this.rows;i++){
            let temp=[];
            for(let j=0;j<this.columns;j++){
                if(this.matrix[i][j]!=0){
                    temp.push(this.matrix[i][j]);
                }
                else{
                    temp.push(" ");
                }
            }
            console.log(temp);
        }
    }
}
module.exports={
    structure:{matrix,sparsematrix},
    description:"Matrix",
    complexity:{
        add:"O(1)",
        print:"O(n^2)"
    },
    methods:{
        add:"Adds an element to the matrix",
        print:"Prints the matrix"
    },
    category:"Matrix"
};