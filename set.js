class set{
    constructor(){
        this.set=[];
    }
    add(data){
        if(!this.set.includes(data)){
            this.set.push(data);
        }
    }
    pop(){
        this.set.pop();
    }
    print(){
        for(let i=0;i<this.set.length;i++){
            console.log(this.set[i]);
        }
    }
    sort(){
        this.set.sort();
    }
    size(){
        return this.set.length;
    }
    at(index){
        return this.set[index];
    }
    
}