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
module.exports={
    structure:queue,
    description:"Queue",
    complexity:{
        enqueue:"O(1)",
        dequeue:"O(1)",
        peek:"O(1)",
        isEmpty:"O(1)",
        clear:"O(1)",
        print:"O(n)"
    },
    methods:{
        enqueue:"Inserts an element into the queue",
        dequeue:"Deletes an element from the queue",
        peek:"Returns the first element in the queue",
        isEmpty:"Checks if the queue is empty",
        clear:"Clears the queue",
        print:"Prints the queue"
    },
    category:"Queue"
};