class pathogenic{
    constructor(data,weight){
        this.data=data;
        this.weight=weight.toLowerCase()=="left"?1:0;
        this.left=null;
        this.right=null;
    }
    insert(data){
        let temp=this;
        while(temp!=null){
            if(temp.weight==1){
                if(temp.left==null){
                    temp.left=new pathogenic(data,"right");
                };
                temp=temp.left;
    }else{
        if(temp.right==null){
            temp.right=new pathogenic(data,"left");
        };
        temp=temp.right;
    }
  }
    }
    search(data){
        let temp=this;
        while(temp!=null){
            if(temp.data==data)
                return true;
            else if(temp.weight==1){
                temp=temp.left;
            }else{
                temp=temp.right;
            }
        }
        return false;
    }
    delete(data){
        let temp=this;
        while(temp!=null){
            if(temp.weight==1){
                if(temp.left!=null && temp.left.data==data){
                    if(temp.left.left==null && temp.left.right==null){
                        temp.left=null;
                    }
                    else if(temp.left.left==null){
                        temp.left=temp.left.right;
                    }
                    else if(temp.left.right==null){
                        temp.left=temp.left.left;
                    }
                    else{
                        let temp2=temp.left.right;
                        while(temp2.left!=null){
                            temp2=temp2.left;
                        }
                        temp.left.data=temp2.data;
                        temp.left.delete(temp2.data);
                    }
                }
                else{
                    temp=temp.left;
                }
            }
        }
    }
}
module.exports=pathogenic;