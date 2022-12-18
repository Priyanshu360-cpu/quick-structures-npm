const linkedlist=require('./linkedlist.js');
class chain{
    constructor(size){
        this.table=[];
        this.size=size;
        for(let i=0;i<this.size;i++){
            this.table.push(null);
        }
    }
    insert(value){
        let g=value%this.size;
        if(g<0){
            g=0;
        }
        if(this.table[g]==null){
            this.table[g]=new linkedlist.structure(value);
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
            console.log(false);
            return false;
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
module.exports={
    structure:chain,
    description:"Chained Hashing",
    methods:{
        insert:"Inserts a value into the hash table",
        delete:"Deletes a value from the hash table",
        find:"Finds a value in the hash table",
        print:"Prints the hash table"
    },
    properties:{
        size:"The size of the hash table"
    }
};