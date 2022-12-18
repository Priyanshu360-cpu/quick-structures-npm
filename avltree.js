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
    if(this==null)return true;
    let l=this.left!=null?this.left.height():0;
    let r=this.right!=null?this.right.height():0;
    if(Math.abs(l-r)>1||Math.abs(l-r)<-1)
    return false;
    return true;
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
        let temp=this.data;
        this.data=this.left.data;
        let a=new avl(temp);
        this.copy(a,this);
        this.right=a;
        this.right.left=null;
        if(this.left.right){
            if(this.right){
                this.right.left=this.left.right;
            }
        }
        this.left=this.left.left;
        return this;
    }
    copy(c,d){
        if(d.left){
            c.left=new avl(d.left.data);
            this.copy(c.left,d.left);
        }
        if(d.right){
            c.right=new avl(d.right.data);
            this.copy(c.right,d.right);
        }
    }
    rightrotate(){
        let temp=this.data;
        this.data=this.right.data;
        let a=new avl(temp);
        this.copy(a,this);
        this.left=a;
        this.left.right=null;
        if(this.right.left){
            if(this.left){
                this.left.right=this.right.left;
            }
        }
        this.right=this.right.right;
        return this;
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
module.exports={
    structure:avl,
    description:"AVL Tree",
    category:"Tree",
    methods:{
        insert:"Inserts a new node in the tree",
        preorder:"Prints the tree in preorder",
        inorder:"Prints the tree in inorder",
        postorder:"Prints the tree in postorder",
        height:"Returns the height of the tree",
        isbalanced:"Returns true if the tree is balanced",
        leftrotate:"Rotates the tree to the left",
        rightrotate:"Rotates the tree to the right",
        check:"Checks if the tree is balanced and rotates it if it is not",
        traverse:"Traverses the tree and checks if it is balanced",
        copy:"Copies the tree",
        heightchecked:"Returns the difference between the height of the left and right subtree"
    },
    attributes:{
        data:"Stores the data of the node",
        left:"Stores the left child of the node",
        right:"Stores the right child of the node",
        level:"Stores the level of the node"
    }
}