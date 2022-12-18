class minheap{
    constructor(data){
        this.data=[data];
    }
    insert(data){
        this.data.push(data);
        let i=this.data.length-1;
        while(i>0){
            let j=Math.floor((i-1)/2);
            if(this.data[i]<this.data[j]){
                let temp=this.data[i];
                this.data[i]=this.data[j];
                this.data[j]=temp;
            }
            else{
                break;
            }
            i=j;
        }
    }
    display(){
        console.log(this.data);
    }
    delete(){
        let temp=this.data[0];
        this.data[0]=this.data[this.data.length-1];
        this.data.pop();
        let i=0;
        while(i<this.data.length){
            let j=2*i+1;
            if(j>=this.data.length){
                break;
            }
            if(j+1<this.data.length && this.data[j+1]<this.data[j]){
                j++;
            }
            if(this.data[i]>this.data[j]){
                let temp=this.data[i];
                this.data[i]=this.data[j];
                this.data[j]=temp;
            }
            else{
                break;
            }
            i=j;
        }
        return temp;       
    }
}
module.exports={
    structure:minheap,
    description:"Min Heap",
    complexity:{
        insert:"O(log n)",
        delete:"O(log n)"
    },
    methods:{
        insert:"Inserts an element into the heap",
        delete:"Deletes the minimum element from the heap"
    },
    category:"Heap"
}