class binarytree{
    data;
    left;
    right;
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    postorder(){
        this.left.postorder();
        this.right.postorder();
        console.log(this.data);
    }
    inorder(){
        this.left.inorder();
        console.log(this.data);
        this.right.inorder();
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
module.exports={structure:binarytree,
                description:"Binary Tree",
                complexity:"O(log n)",
                methods:{
                    print:"Prints the tree",
                    depth:"Returns the depth of the tree",
                    inorder:"Prints the tree in inorder",
                    postorder:"Prints the tree in postorder",
                    preorder:"Prints the tree in preorder"
                }
            };