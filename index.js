class structures{
    constructor(){
    this.linkedlist = require('./linkedlist.js');
    this.stack = require('./stack.js');
    this.tree = require('./binarytree.js');
    this.graph = require('./graph.js'); 
    this.vector = require('./vector.js');
    this.queue = require('./queue.js');
    this.matrix=require('./matrix.js');
    this.map=require('./map.js');
    this.set=require('./set.js');
    this.trie=require('./trie.js');
    this.avl=require('./avltree.js');
    this.bst=require('./bst.js');
    this.binarysearchtree=require('./bst.js');
    this.btree=require('./b+tree.js');
    this.maxheap=require('./maxheap.js');
    this.minheap=require('./minheap.js');
    this.redblack=require('./redblacktree.js');
    this.priorityqueue=require('./priorityqueue.js');
    this.deque=require('./deque.js');
    this.doublylinkedlist=require('./doublylinkedlist.js');
    this.pathogenictree=require('./pathogenictree.js');
    this.pathogen=require('./pathogenictree.js');
    this.chainedhashing=require('./chainedhashing.js');
    this.probbedhashing=require('./probbedhashing.js');
    this.segmenttree=require('./segmenttree.js');
    this.classes={
        "linkedlist":require('./linkedlist.js').structure,
        "stack":require('./stack.js').structure,
        "tree":require('./binarytree.js').structure,
        "graph":require('./graph.js').structure,
        "vector":require('./vector.js').structure,
        "queue":require('./queue.js').structure,
        "matrix":require('./matrix.js').structure,
        "map":require('./map.js').structure,
        "set":require('./set.js').structure,
        "trie":require('./trie.js').structure,
        "avl":require('./avltree.js').structure,
        "bst":require('./bst.js').structure,
        "binarysearchtree":require('./bst.js').structure,
        "btree":require('./b+tree.js').structure,
        "maxheap":require('./maxheap.js').structure,
        "minheap":require('./minheap.js').structure,
        "priorityqueue":require('./priorityqueue.js').structure,
        "redblack":require('./redblacktree.js').structure,
        "deque":require('./deque.js').structure,
        "doublylinkedlist":require('./doublylinkedlist.js').structure,
        "pathogenictree":require('./pathogenictree.js').structure,
        "pathogen":require('./pathogenictree.js').structure,
        "chainedhashing":require('./chainedhashing.js').structure,
        "probbedhashing":require('./probbedhashing.js').structure,
        "segmenttree":require('./segmenttree.js').structure,
      }
    }
}
module.exports = structures;