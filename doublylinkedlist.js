class doublylinkedlist{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
        this.makecycle=false;
    }   
    insert(data){
        if(this.makecycle==false){
        temp=this;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=new doublylinkedlist(data);
        temp.next.prev=temp;
    }
    else{
        temp=this;
        while(temp.next!=this){
            temp=temp.next;
        }
        temp.next=new doublylinkedlist(data);
        temp.next.prev=temp;
        temp.next.next=this;
        this.prev=temp.next;
     }
    }
    delete(data){
        if(this.makecycle==false){
        temp=this;
        while(temp.next!=null){
            if(temp.next.data==data){
                temp.next=temp.next.next;
                temp.next.prev=temp;
                return;
            }
            temp=temp.next;
        }
    }
    else{
        temp=this;
        while(temp.next!=this){
            if(temp.next.data==data){
                temp.next=temp.next.next;
                temp.next.prev=temp;
                return;
            }
            temp=temp.next;
        }
    }
}
    insertposition(data,position){
        if(this.makecyle==false){
        let temp=new doublylinkedlist(data);
        let temp2=this;
        let i=0;
        while(temp2.next!=null){
            if(i==position){
                temp.next=temp2.next;
                temp.prev=temp2;
                temp2.next=temp;
                temp.next.prev=temp;
                return;
            }
            temp2=temp2.next;
            i++;
        }
    }
    else{
        let temp=new doublylinkedlist(data);
        let temp2=this;
        let i=0;
        while(temp2.next!=this){
            if(i==position){
                temp.next=temp2.next;
                temp.prev=temp2;
                temp2.next=temp;
                temp.next.prev=temp;
                return;
            }
            temp2=temp2.next;
            i++;
        }
    }
}
    print(){
        if(this.makecycle==false){
        let temp=this;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }else{
        let temp=this;
        while(temp.next!=this){
            console.log(temp.data);
            temp=temp.next;
        }
        console.log(temp.data);
    }
    }
    cycle(){
        this.makecycle=true;
        let temp=this;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=this;
        this.prev=temp;
    }
}
module.exports={
    structure:doublylinkedlist,
    description:"Doubly Linked List",
    methods:{
        insert:"Inserts a new node at the end of the list",
        delete:"Deletes a node from the list",
        insertposition:"Inserts a node at a given position",
        print:"Prints the list",
        cycle:"Makes the list circular"
    }
};