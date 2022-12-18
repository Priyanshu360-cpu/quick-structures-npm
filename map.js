class map{
    constructor(){
        this.map = [];
        this.size = 0;
    }
    insert(key,value){
        this.map.push([key,value]);
        this.size++;
    }
    erase(key){
        for(let i=0;i<this.map.length;i++){
            if(this.map[i][0]==key){
                this.map.splice(i,1);
                this.size--;
                return;
            }
        }
    }
    find(key){
        for(let i=0;i<this.map.length;i++){
            if(this.map[i][0]==key){
                return this.map[i][1];
            }
        }
        return null;
    }
    print(){
        for(let i=0;i<this.map.length;i++){
            console.log(this.map[i][0],this.map[i][1]);
        }
    }
}
module.exports={
    structure:map,
    description:"Map",
    complexity:{
        insert:"O(1)",
        erase:"O(n)",
        find:"O(n)",
        print:"O(n)"
    },
    methods:{
        insert:"Inserts a key-value pair into the map",
        erase:"Deletes a key-value pair from the map",
        find:"Finds a value in the map",
        print:"Prints the map"
    },
    category:"Map"
};