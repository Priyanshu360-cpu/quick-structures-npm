const linkedlist=require('./linkedlist.js');
let a=new linkedlist(1);
a.insert(2);
a.insert(3);
a.sort();
a.delete(2);
a.insertposition(2,1);
a.print();