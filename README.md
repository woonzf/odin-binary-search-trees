# Binary Search Trees
### Description:
Solution for Project: Binary Search Trees of The Odin Project's Javascript Course
- A program which contains Binary Search Tree algorithm

    ### index.js
    Function  | Description
    ------------- | -------------
    driver | Contains instructions to test the program

    ### tree.js
    Function  | Description
    ------------- | -------------
    Node() | Class used to create a node
    Tree() | Class used to create a tree
    buildTree(data) | Create a tree using an array of data
    dataToBST(data) | Create and place node properly throughout the tree
    insert(value) | Insert a new node with value into the tree
    insertRecur(root, value) | Create and place a new node with value properly
    deleteItem(value) | Remove the node with value
    deleteItemRecur(root, value) | Remove the node with value and relocate the successor
    find(value) | Return the node with value
    levelOrder() | Return an array of values by traveling breadth first through the tree
    inOrder() | Return an array of values by traveling depth first through the tree (left, root, right)
    preOrder() | Return an array of values by traveling depth first through the tree (root, left, right)
    postOrder() | Return an array of values by traveling depth first through the tree (left, right, root)
    findHeight() | Return the height of the tree
    height(node) | Return the height of the node
    depth(node) | Return the depth of the node
    isBalanced() | Check if the tree is balanced
    isBalancedInt() | Check the height difference between the left subtree and the right subtree of every node
    rebalance() | Rebuild the tree

    ### pretty-print.js
    Function  | Description
    ------------- | -------------
    prettyPrint(node) | Print out the tree with node as root

### Instruction:
1. To run the program inside the terminal, make sure Node.js is installed in your system
2. Enter the line below into the terminal to run <b><i>index.js</i></b>:

        node [path to file]
    If the current directory is the same as the files:

        node index.js