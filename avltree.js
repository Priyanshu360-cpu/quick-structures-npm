class avl{
    data;
    left;
    right;
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        this.level=0;
    }
    height(){
        if(this==null)return 0;
        if(this.left==null&&this.right==null)return 0;
        else if(this.left==null){
            return this.right.height()+1;
        }
        else if(this.right==null){
            return this.left.height()+1;
        }
        return Math.max(this.left.height(),this.right.height());
    }
 isbalanced(){
    if(this==null)return false;
    let l=this.left!=null?this.left.height():0;
    let r=this.right!=null?this.right.height():0;
    if(Math.abs(l-r)>1||Math.abs(l-r)<-1)return true;
    if(this.left&&this.right)
    return (this.left.height()||this.right.height());
    else if(this.left)
    return this.left.height();
    else if(this.right)
    return this.right.height();
    else return false;
 }
heightchecked(){
    if(this==null)return 0;
    let l=this.left!=null?this.left.height():0;
    let r=this.right!=null?this.right.height():0;
    return l-r;
}
traverse(key){
    this.check(key);
    if(this.left)
    this.left.traverse();
    if(this.right)
    this.right.traverse();
}
insert(d,g){
    if(this.data>d){
        if(this.left==null){
            this.left=new avl(d);
            this.left.level=g;
            return;
        }else this.left.insert(d,g+1);
    }
    else{
        if(this.right==null){
            this.right=new avl(d);
            this.right.level=g;
            return;
        }else this.right.insert(d,g+1);
    }
    if(this.level==0)
    this.traverse(d);
 }
 preorder(){
    console.log(this.data);
    if(this.left)
    this.left.preorder();
    if(this.right)
    this.right.preorder();
 }
    inorder(){
        if(this.left)
        this.left.inorder();
        console.log(this.data);
        if(this.right)
        this.right.inorder();
    }
    postorder(){
        if(this.left)
        this.left.postorder();
        if(this.right)
        this.right.postorder();
        console.log(this.data);
    }
    leftrotate(){
        let temp=this.right;
        this.right=temp.left;
        temp.left=this;
        return temp;
    }
    rightrotate(){
        let temp=this.left;
        this.left=temp.right;
        temp.right=this;
        return temp;
    }
 check(key){
    if(this.isbalanced()==false){
        let height=this.heightchecked();
        if(this.left&&key<this.left.data&&height>1){
            this.leftrotate();
        }
        else if(this.right&&key>this.right.data&&height<-1){
            this.rightrotate();
        }
        else if(this.left&&key>this.left.data&&height>1){
            this.left.leftrotate();
            this.rightrotate();
        }
        else if(this.right&&key<this.right.data&&height<-1){
            this.right.rightrotate();
            this.leftrotate();
        }
    }
 }
}
module.exports=avl;