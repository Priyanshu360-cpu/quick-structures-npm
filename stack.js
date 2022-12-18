class stack{
    data;
    next;
    constructor(data){
        this.data=data;
        this.next=null;
    }
    push(data){
        let temp=new stack(data);
        temp.next=this.next;
        this.next=temp;
    }
    pop(){
        this.next=this.next.next;
    }
    top(){
        return this.next.data;
    }
    print(){
        let temp=this;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
module.exports={
    structure:stack,
    description:"Stack",
    methods:{
        push:"Pushes an element into the stack",
        pop:"Pops an element from the stack",
        top:"Returns the top element of the stack",
        print:"Prints the stack"
    },
    category:"Stack"
};