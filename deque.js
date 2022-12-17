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
module.exports=deque;