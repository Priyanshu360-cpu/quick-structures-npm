 class linkedlist{
     data;
     next;
     constructor(data){
        this.data=data;
        this.next=null;
     }
     sort(){
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
}
module.exports=linkedlist;