class queue{
constructor(){
        this.queue = [];
        this.size = 0;
    }
    enqueue(item){
        this.queue.push(item);
        this.size++;
    }
    dequeue(){
        if(this.size > 0){
            this.size--;
            return this.queue.shift();
        }
    }
    peek(){
        return this.queue[0];
    }
    isEmpty(){
        return this.size == 0;
    }
    clear(){
        this.queue = [];
        this.size = 0;
    }
    print(){
        console.log(this.queue);
    }
}
module.exports=queue;