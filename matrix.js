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