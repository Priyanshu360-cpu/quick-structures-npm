 class linkedlist{
     data;
     next;
     constructor(data){
        this.data=data;
        this.next=null;
        this.makecycle=false;
     }
        find(data){
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
            temp=temp.next;
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
        let temp=new linkedlist(data);
        temp.next=this.next;
        this.next=temp;
    }
    delete(data){
        let temp=this;
        while(temp.next!=null){
            if(temp.next.data==data){
                temp.next=temp.next.next;
                return;
            }
            temp=temp.next;
        }
    }
    insertposition(data,position){
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
    print(){
        let temp=this;
        while(temp!=null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
    cycle(){
        this.makecycle=true;
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