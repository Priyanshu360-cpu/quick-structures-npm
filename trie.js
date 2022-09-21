class trie{
    constructor(){
        this.children=[];
        this.isWord=false;
    }
    insert(word){
        let pointer=this;
        for(let i=0;i<word.length;i++){
            if(pointer.children[word[i].toLowerCase()-'a']==undefined){
                pointer.children[word[i].toLowerCase()-'a']=new trie();
            }
            pointer=pointer.children[word[i].toLowerCase()-'a'];
        }
        pointer.isWord=true;
    }
    search(word){
        let pointer=this;
        for(let i=0;i<word.length;i++){
            if(pointer.children[word[i].toLowerCase()-'a']==undefined){
                return false;
            }
            pointer=pointer.children[word[i].toLowerCase()-'a'];
        }
        return pointer.isWord;
    }
    partialsearch(word){
        let pointer=this;
        for(let i=0;i<word.length;i++){
            if(pointer.children[word[i].toLowerCase()-'a']==undefined){
                return false;
            }
            pointer=pointer.children[word[i].toLowerCase()-'a'];
        }
        return true;
    }
}
module.exports=trie;