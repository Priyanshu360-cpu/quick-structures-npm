class map{
    constructor(){
        this.map = [];
        this.size = 0;
    }
    insert(key,value){
        this.map.push([key,value]);
        this.size++;
    }
    erase(key){
        for(let i=0;i<this.map.length;i++){
            if(this.map[i][0]==key){
                this.map.splice(i,1);
                this.size--;
                return;
            }
        }
    }
    find(key){
        for(let i=0;i<this.map.length;i++){
            if(this.map[i][0]==key){
                return this.map[i][1];
            }
        }
        return null;
    }
    print(){
        for(let i=0;i<this.map.length;i++){
            console.log(this.map[i][0],this.map[i][1]);
        }
    }
}