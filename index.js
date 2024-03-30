import Tree from "./tree.js";
import prettyPrint from "./pretty-print.js";

// Driver
const driver = (() => {
    function run() {
        const tree = new Tree(_createRandomArray(10, 100));

        console.log(tree.isBalanced())
        console.log(tree.levelOrder(), tree.preOrder(), tree.postOrder(), tree.inOrder())

        tree.insert(200);
        tree.insert(300);
        tree.insert(400);
        console.log(tree.isBalanced())

        tree.rebalance();
        console.log(tree.isBalanced())
        console.log(tree.levelOrder(), tree.preOrder(), tree.postOrder(), tree.inOrder())

        prettyPrint(tree.root);
    }

    // https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
    function _createRandomArray(size, max) {
        return Array.from({length: size}, () => Math.floor(Math.random() * max));
    }

    return { run };
})()

driver.run();