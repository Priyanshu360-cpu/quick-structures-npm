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
module.exports={
    structure:set,
    description:"Set",
    complexity:{
        add:"O(n)",
        pop:"O(1)",
        print:"O(n)",
        sort:"O(nlogn)",
        size:"O(1)",
        at:"O(1)"
    },
    methods:{
        add:"Adds an element to the set",
        pop:"Removes the last element from the set",
        print:"Prints the set",
        sort:"Sorts the set",
        size:"Returns the size of the set",
        at:"Returns the element at the given index"
    },
    category:"Set"
};