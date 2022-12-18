class bst{
    data;
    left;
    right;
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
    insert(data){
        if(data<this.data){
            if(this.left==null){
                this.left=new bst(data);
            }
            else{
                this.left.insert(data);
            }
        }
        else{
            if(this.right==null){
                this.right=new bst(data);
            }
            else{
                this.right.insert(data);
            }
        }
    }
    search(data){
        if(data==this.data)
            return true;
        else if(data<this.data){
            if(this.left==null)
                return false;
            else
                return this.left.search(data);
        }
        else{
            if(this.right==null)
                return false;
            else
                return this.right.search(data);
        }
    }
    delete(data){
        if(data==this.data){
            if(this.left==null && this.right==null){
                return null;
            }
            else if(this.left==null){
                return this.right;
            }
            else if(this.right==null){
                return this.left;
            }
            else{
                let temp=this.right;
                while(temp.left!=null){
                    temp=temp.left;
                }
                this.data=temp.data;
                this.right=this.right.delete(temp.data);
                return this;
            }
        }
        else if(data<this.data){
            if(this.left==null)
                return this;
            else{
                this.left=this.left.delete(data);
                return this;
            }
        }
        else{
            if(this.right==null)
                return this;
            else{
                this.right=this.right.delete(data);
                return this;
            }
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
    height(){
        return this.depth();
    }
}
module.exports={
    structure:bst,
    description:"Binary Search Tree",
    complexity:"O(log n)",
    methods:{
        insert:"Inserts a node in the tree",
        search:"Searches for a node in the tree",
        delete:"Deletes a node from the tree",
        print:"Prints the tree",
        depth:"Returns the depth of the tree",
        height:"Returns the height of the tree",
        inorder:"Prints the tree in inorder",
        postorder:"Prints the tree in postorder",
        preorder:"Prints the tree in preorder"
    }
};