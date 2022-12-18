class deque{
    constructor(){
        this.items = [];
    }
    addFront(element){
        this.items.push(element);
    }
    addBack(element){
        this.items.unshift(element);
    }
    removeFront(){
        return this.items.pop();
    }
    removeBack(){
        return this.items.shift();
    }
    peekFront(){
        return this.items[this.items.length-1];
    }
    peekBack(){
        return this.items[0];
    }
}
module.exports={
    structure:deque,
    description:"Double Ended Queue",  
    methods:{
        addFront:"Adds an element to the front of the queue",
        addBack:"Adds an element to the back of the queue",
        removeFront:"Removes an element from the front of the queue",
        removeBack:"Removes an element from the back of the queue",
        peekFront:"Returns the element at the front of the queue",
        peekBack:"Returns the element at the back of the queue"
    },
    complexity:{
        addFront:"O(1)",
        addBack:"O(1)",
        removeFront:"O(1)",
        removeBack:"O(1)",
        peekFront:"O(1)",
        peekBack:"O(1)"
    }
};