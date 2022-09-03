class binarytree{
    data;
    left;
    right;
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    print(){
        console.log(this.data);
        temp=this.left;
        while(temp!=null){
            temp.print();
            temp=temp.right;
        }
    }
    depth(){
        if(this.left==null && this.right==null){
            return 0;
        }
        else if(this.left==null){
            return this.right.depth()+1;
        }
        else if(this.right==null){
            return this.left.depth()+1;
        }
        else{
            return Math.max(this.left.depth(),this.right.depth())+1;
        }
    }   
}
module.exports=binarytree;