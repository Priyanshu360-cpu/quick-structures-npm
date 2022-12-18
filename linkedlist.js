 class linkedlist{
     data;
     next;
     constructor(data){
        this.data=data;
        this.next=null;
        this.makecycle=false;
     }
        find(data){
        if(this.makecycle==false){
        let temp=this;
        while(temp!=null){
            if(temp.data==data){
                console.log(true);
                return true;
            }
            temp=temp.next;
        }
        console.log(false);
        return false;
    }
    else{
        let temp=this;
        while(temp.next!=this){
            if(temp.data==data){
                console.log(true);
                return true;
            }
            temp=temp.next;
        }
        if(temp.data==data){
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }
    }
     sort(){
        if(this.makecycle==false){
        let a=[];
        let temp=this;
        while(temp!=null){
            a.push(temp.data);
            temp=temp.next;
        }
        a.sort();
        temp=this;
        let i=0;
        while(temp!=null){
            temp.data=a[i];
            temp=temp.nlinkedlist.cycle();
            linkedlist.print();ext;
            i++;
        }
    }
    else{
        let a=[];
        let temp=this;
        while(temp.next!=this){
            a.push(temp.data);
            temp=temp.next;
        }
        a.push(temp.data);
        a.sort();
        temp=this;
        let i=0;
        while(temp.next!=this){
            temp.data=a[i];
            temp=temp.next;
            i++;
        }
        temp.data=a[i];
     }
    }
    insert(data){
        if(this.makecycle==false){
        let temp=new linkedlist(data);
        temp.next=null;
        let temp2=this;
        while(temp2.next!=null){
            temp2=temp2.next;
        }
        temp2.next=temp;
        }
        else{
            let temp=new linkedlist(data);
            temp.next=null;
            let temp2=this;
            while(temp2.next!=this){
                temp2=temp2.next;
            }
            temp2.next=temp;
            temp.next=this;
        }
    }
    delete(data){
        if(this.makecycle==false){
        let temp=this;
        while(temp.next!=null){
            if(temp.next.data==data){
                temp.next=temp.next.next;
                return;
            }
            temp=temp.next;
        }
    }else{
        let temp=this;
        while(temp.next!=this){
            if(temp.next.data==data){
                temp.next=temp.next.next;
                return;
            }
            temp=temp.next;
        }
        this.next=this.next.next;
    }
    }
    insertposition(data,position){
        if(this.makecycle==false){
        let temp=new linkedlist(data);
        let temp2=this;
        let i=0;
        while(temp2!=null){
            if(i==position){
                temp.next=temp2.next;
                temp2.next=temp;
                return;
            }
            temp2=temp2.next;
            i++;
        }
    }
    else{
        let temp=new linkedlist(data);
        let temp2=this;
        let i=0;
        while(temp2.next!=this){
            if(i==position){
                temp.next=temp2.next;
                temp2.next=temp;
                return;
            }
            temp2=temp2.next;
            i++;
        }
        temp.next=this;
        temp2.next=temp;
     }
    }
    print(){
        if(this.makecycle==false){
        let temp=this;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
    else{
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
    }
}
module.exports={
    structure:linkedlist,
    description:"Linked List",
    complexity:{
        insert:"O(1)",
        delete:"O(n)",
        insertposition:"O(n)",
        print:"O(n)",
        cycle:"O(n)",
        sort:"O(nlogn)"
    },
    methods:{
        insert:"Inserts a new node at the beginning of the list",
        delete:"Deletes a node from the list",
        insertposition:"Inserts a node at a given position",
        print:"Prints the list",
        cycle:"Makes the list cyclic",
        sort:"Sorts the list",
        find:"Finds a node in the list"
    }
};