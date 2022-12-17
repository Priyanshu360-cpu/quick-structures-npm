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
    let l=this.left.height();
    let r=this.right.height();
    if(Math.abs(l-r)>1||Math.abs(l-r)<-1)return true;
    return (this.left.height()||this.right.height());
 }
heightchecked(){
    if(this==null)return 0;
    let l=this.left.height();
    let b=this.right.height();
    return l-b;
}
traverse(key){
    this.check(key);
    if(this.left)
    this.left.traverse();
    if(this.right)
    this.right.traverse();
}
insert(d,g){
    if(this==null){
        this=new avl(d);
        this.left=null;
        this.right=null;
        this.level=g;
        return;
    }
    if(this.data>d){
        if(this.left==null){
            this.left=new avl(d);
            this.left.left=null;
            this.right.right=null;
            this.left.level=g;
            return;
        }else this.left.insert(d,g+1);
    }
    else{
        if(this.right==null){
            this.right=new avl(d);
            this.right.left=null;
            this.right.right=null;
            this.right.level=g;
            return;
        }else this.right.insert(d,g+1);
    }
    this.traverse(d);
 }
 leftrotate(){
    let a=this.data;
    if(!this.left)
    this.left=new avl(0);
    this=this.left;
    let b=this.left;
    this.left=new avl(0);
    this.left.data=a;
    this.left.left=b;
 }
 rightrotate(){
    let a=this.data;
    if(!this.right)
    this.right=new avl(0);
    this=this.right;
    let b=this.right;
    this.right=new avl(0);
    this.right.data=a;
    this.right.right=b;
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