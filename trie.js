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
    strictinsert(word){
        let pointer=this;
        for(let i=0;i<word.length;i++){
            if(pointer.children[word[i]]==undefined){
                pointer.children[word[i]]=new trie();
            }
            pointer=pointer.children[word[i]];
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
    strictsearch(word){
        let pointer=this;
        for(let i=0;i<word.length;i++){
            if(pointer.children[word[i]]==undefined){
                return false;
            }
            pointer=pointer.children[word[i]];
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
module.exports={
    structure:trie,
    description:"Trie",
    complexity:{
        insert:"O(n)",
        search:"O(n)",
        strictsearch:"O(n)",
        partialsearch:"O(n)"
    },
    methods:{
        insert:"Inserts a word into the trie",
        search:"Searches for a word in the trie",
        strictsearch:"Searches for a word in the trie",
        partialsearch:"Searches for a word in the trie"
    },
    category:"Tree"
};