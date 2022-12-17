const linkedlist=require('./linkedlist.js');
class chain{
    constructor(size){
        this.table=[];
        this.size=size;
        for(let i=0;i<this.size();i++){
            this.table.push(null);
        }
    }
    insert(value){
        let g=value%this.size;
        if(g<0){
            g=0;
        }
        if(this.table[g]==null){
            this.table[g]=new linkedlist(value);
        }
        else{
            this.table[g].insert(value);
        }
    }
    delete(value){
        let g=value%this.size;
        if(g<0){
            g=0;
        }
        if(this.table[g]==null){
            return;
        }
        else{
            this.table[g].delete(value);
        }
    }
    find(value){
        let g=value%this.size;
        if(g<0){
            g=0;
        }
        if(this.table[g]==null){
            return null;
        }
        else{
            return this.table[g].find(value);
        }
    }
    print(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]!=null){
                this.table[i].print();
            }
        }
    }
}
module.exports=chain;