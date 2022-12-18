class priorityqueue{
    constructor(data,priority){
        let b={
            data:data,
            priority:priority
        };
        this.data=[b];
    }
    insert(data,priority){
        let b={
            data:data,
            priority:priority
        };
        this.data.push(b);
        this.data.sort((a,b)=>a.priority-b.priority);
    }
    search(data){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].data==data){
                return true;
            }
        }
        return false;
    }
    delete(data){
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].data==data){
                this.data.splice(i,1);
                break;
            }
        }
    }
    print(){
        for(let i=0;i<this.data.length;i++){
            console.log(this.data[i].data,this.data[i].priority);
        }
    }
}
module.exports={
    structure:priorityqueue,
    description:"Priority Queue",
    complexity:{
        insert:"O(n)",
        delete:"O(n)",
        search:"O(n)",
        print:"O(n)"
    },
    methods:{
        insert:"Inserts an element into the queue",
        delete:"Deletes an element from the queue",
        search:"Searches for an element in the queue",
        print:"Prints the queue"
    },
    category:"Queue"
};