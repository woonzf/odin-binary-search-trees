import Tree from "./tree.js";
import prettyPrint from "./pretty-print.js";

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(data);

prettyPrint(tree.root);
tree.insert(100);
prettyPrint(tree.root);
tree.deleteItem(8);
prettyPrint(tree.root);
console.log(tree.find(324));