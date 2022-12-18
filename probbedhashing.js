class probbing{
    constructor(size){
        this.data=[];
        this.size=size;
    }
    insert(data){
        let index=data%this.size;
        let i=0;
        while(this.data[index]!=null){
            index=(index+i*i)%this.size;
            i++;
        }
        this.data[index]=data;
    }
    delete(data){
        let index=data%this.size;
        if(!this.data.includes(data))return;
        let i=0;
        while(this.data[index]!=data){
            index=(index+i*i)%this.size;
            i++;
        }
        this.data[index]=null;
    }
    search(data){
        let index=data%this.size;
        let i=0;
        if(!this.data.includes(data))return;
        while(this.data[index]!=data){
            index=(index+i*i)%this.size;
            i++;
        }
        if(this.data[index]==data)return index;
        else return -1;
    }
}
module.exports={
    structure:probbing,
    description:"Probing Hashing",
    methods:{
        insert:"Inserts a value into the hash table",
        delete:"Deletes a value from the hash table",
        search:"Searches for a value in the hash table"
    },
    properties:{
        size:"The size of the hash table"
    },
    category:"Hashing"
};