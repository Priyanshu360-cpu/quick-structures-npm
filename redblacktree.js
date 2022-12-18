class reblacktree{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
        this.color="black";
    }
    insert(data){
        if(data<this.data){
            if(this.left==null){
                this.left=new reblacktree(data);
                this.left.color="red";
                this.left.balance();
            }
            else{
                this.left.insert(data);
            }
        }
        else{
            if(this.right==null){
                this.right=new reblacktree(data);
                this.right.color="red";
                this.right.balance();
            }
            else{
                this.right.insert(data);
            }
        }
    }
    balance(){
        if(this.color=="red"){
            if(this.left!=null && this.left.color=="red"){
                if(this.left.left!=null && this.left.left.color=="red"){
                    this.rotateRight();
                }
                else if(this.left.right!=null && this.left.right.color=="red"){
                    this.rotateLeftRight();
                }
            }
            else if(this.right!=null && this.right.color=="red"){
                if(this.right.right!=null && this.right.right.color=="red"){
                    this.rotateLeft();
                }
                else if(this.right.left!=null && this.right.left.color=="red"){
                    this.rotateRightLeft();
                }
            }
        }
    }
    rotateLeft(){
        let temp=this.right;
        this.right=temp.left;
        temp.left=this;
        temp.color=this.color;
        this.color="red";
        return temp;
    }
    rotateRight(){
        let temp=this.left;
        this.left=temp.right;
        temp.right=this;
        temp.color=this.color;
        this.color="red";
        return temp;
    }
    rotateLeftRight(){
        this.left.rotateLeft();
        this.rotateRight();
    }
    rotateRightLeft(){
        this.right.rotateRight();
        this.rotateLeft();
    }
    print(){
        console.log(this.data);
        if(this.left!=null){
            this.left.print();
        }
        if(this.right!=null){
            this.right.print();
        }
    }
    inorder(){
        if(this.left!=null){
            this.left.inorder();
        }
        console.log(this.data);
        if(this.right!=null){
            this.right.inorder();
        }
    }
    preorder(){
        console.log(this.data);
        if(this.left!=null){
            this.left.preorder();
        }
        if(this.right!=null){
            this.right.preorder();
        }
    }
    postorder(){
        if(this.left!=null){
            this.left.postorder();
        }
        if(this.right!=null){
            this.right.postorder();
        }
        console.log(this.data);
    }
}
module.exports={
    structure:reblacktree,
    description:"Red Black Tree",
    category:"Tree",
    methods:{
        insert:"Inserts a new node in the tree",
        print:"Prints the tree in preorder",
        inorder:"Prints the tree in inorder",
        preorder:"Prints the tree in preorder",
        postorder:"Prints the tree in postorder"
    },
    attributes:{
        data:"The data of the node",
        left:"The left child of the node",
        right:"The right child of the node",
        color:"The color of the node"
    },
};