class segment{
    constructor(data){
        this.data=[data];
    }
    insert(data){
        this.data.push(data);
        let i=this.data.length-1;
        while(i>0){
            let j=Math.floor((i-1)/2);
            this.data[j]+=this.data[i];
            i=j;
    }
 }
    display(){
        console.log(this.data);
    }
    sumat(l,r){
        let sum=0;
        l+=this.data.length/2;
        r+=this.data.length/2;
        while(l<=r){
            if(l%2==1){
                sum+=this.data[l];
                l++;
            }
            if(r%2==0){
                sum+=this.data[r];
                r--;
            }
            l=Math.floor(l/2);
            r=Math.floor(r/2);
        }
        return sum;
    }
    update(newdata,prvsdata){
        let i=this.data.indexOf(prvsdata);
        this.data[i]=newdata;
        while(i>0){
            let j=Math.floor((i-1)/2);
            this.data[j]-=prvsdata;
            this.data[j]+=newdata;
            i=j;
        }
    }
    delete(data){
        let i=this.data.indexOf(data);
        this.data[i]=this.data[this.data.length-1];
        this.data.pop();
        while(i>0){
            let j=Math.floor((i-1)/2);
            this.data[j]-=data;
            this.data[j]+=this.data[i];
            i=j;
        }
    }
}
module.exports=segment;