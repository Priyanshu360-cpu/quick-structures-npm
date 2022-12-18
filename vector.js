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
module.exports={
    structure:vector,
    description:"Vector",
    complexity:{
        push_back:"O(1)",
        pop_back:"O(1)",
        print:"O(n)",
        sort:"O(nlogn)",
        size:"O(1)",
        at:"O(1)",
        erase:"O(1)"
    },
    methods:{
        push_back:"Adds an element to the end of the vector",
        pop_back:"Removes the last element from the vector",
        print:"Prints the vector",
        sort:"Sorts the vector",
        size:"Returns the size of the vector",
        at:"Returns the element at the given index",
        erase:"Erases the vector"
    },
    category:"Vector"
};