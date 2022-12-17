class btree{
    constructor(data,limit){
        this.data=[data];
        this.left=null;
        this.right=null;
        this.limit=limit;
    }
    insert(data){
        if(this.data.length<this.limit){
            this.data.push(data);
            this.data.sort((a,b)=>a-b);
        }
        else{
            if(this.left==null){
                this.left=new btree(data,this.limit);
            }
            else if(this.right==null){
                this.right=new btree(data,this.limit);
            }
            else{
                if(this.left.data.length<this.limit){
                    this.left.insert(data);
                }
                else if(this.right.data.length<this.limit){
                    this.right.insert(data);
                }
                else{
                    this.left.insert(data);
                }
            }
        }
    }
    search(data){
        if(this.data.includes(data)){
            return true;
        }
        else{
            if(this.left!=null && this.left.search(data)){
                return true;
            }
            else if(this.right!=null && this.right.search(data)){
                return true;
            }
            else{
                return false;
            }
        }
    }
    delete(data){
        if(this.data.includes(data)){
            this.data.splice(this.data.indexOf(data),1);
            if(this.left!=null){
                this.data.push(this.left.data[0]);
                this.data.sort((a,b)=>a-b);
                this.left.delete(this.left.data[0]);
            }
            else if(this.right!=null){
                this.data.push(this.right.data[0]);
                this.data.sort((a,b)=>a-b);
                this.right.delete(this.right.data[0]);
            }
        }
        else{
            if(this.left!=null){
                this.left.delete(data);
            }
            else if(this.right!=null){
                this.right.delete(data);
            }
        }
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
module.exports=btree;