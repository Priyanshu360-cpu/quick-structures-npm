class vector{
    data=[];
    constructor(){
        this.data=[];
        
    }
    
    push_back(data){
        this.data.push(data);
    }
    pop_back(){
        if(this.data.length>0)
            this.data.pop();
        else throw "Empty Vector";
    }
    print(){
        for(let i=0;i<this.data.length;i++){
            console.log(this.data[i]);
        }
    }
    sort(){
        this.data.sort();
    }
    size(){
        return this.data.length;
    }
    at(index){
        return this.data[index];
    }
    erase(){
        this.data=[];
    }
}
module.exports=vector;