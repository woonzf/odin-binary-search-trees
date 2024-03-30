class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export default class Tree {
    constructor(data) {
        if (!Array.isArray(data)) throw new Error("Tree input is not an array")
        this.root = this.buildTree(data);
    }

    buildTree(data) {
        // Remove duplicate
        // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
        const dataUniq = [... new Set(data)];

        // Sort ascending
        const dataSort = dataUniq.sort((a, b) => a - b);
        
        return this.dataToBST(dataSort, 0, dataSort.length - 1);
    }

    // Sorted array to BST
    // https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/
    dataToBST(data, start, end) {
        if (start > end) return null;
        
        const mid = parseInt((start + end) / 2);
        const root = new Node(data[mid]);

        root.left = this.dataToBST(data, start, mid - 1);
        root.right = this.dataToBST(data, mid + 1, end);

        return root;
    }

    // BST Insertion
    // https://www.geeksforgeeks.org/insertion-in-binary-search-tree/
    insert(value) {
        this.root = this.insertRecur(this.root, value);
    }

    insertRecur(root, value) {
        if (root === null) return new Node(value);

        if (value < root.data) root.left = this.insertRecur(root.left, value);
        else if (value > root.data) root.right = this.insertRecur(root.right, value);
        
        return root;
    }

    // BST Deletion
    // https://www.geeksforgeeks.org/deletion-in-binary-search-tree/
    deleteItem(value) {
        this.root = this.deleteRecur(this.root, value);
    }

    deleteRecur(root, value) {
        if (root === null) return root;

        // Travel down the tree to find the node
        if (value < root.data) {
            root.left = this.deleteRecur(root.left, value);
            return root;
        }

        if (value > root.data) {
            root.right = this.deleteRecur(root.right, value);
            return root;
        }

        // Found the node, now find the successor
        // The only child replace the node to be deleted if any
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Successor is always the smallest in the right child tree
        let succParent = root;
        let succ = root.right;

        // Smallest is on the left side of the tree
        while (succ.left !== null) {
            succParent = succ;
            succ = succ.left;
        }

        // If successor is not the child of the node to be deleted
        // Connect the successor child to the successor parent
        if (succParent !== root) succParent.left = succ.right;
        else succParent.right = succ.right;

        // Copy the successor data into the node to be deleted
        root.data = succ.data;
        return root;
    }

    find(value, root = this.root) {
        if (root === null) return "No node found";
        if (root.data === value) return root;
        if (value < root.data) return this.find(value, root.left);
        return this.find(value, root.right);
    }

    // Breadth-first
    levelOrder(root = this.root, order = [], queue = []) {
        if (root === null) return order;

        order.push(root.data);
        
        if (queue.length !== 0) queue.shift();
        if (root.left !== null) queue.push(root.left);
        if (root.right !== null) queue.push(root.right);
        if (queue.length === 0) return order;

        return this.levelOrder(queue[0], order, queue);
    }

    // Left, Root, Right
    inOrder(root = this.root, order = []) {
        if (root === null) return order;

        this.inOrder(root.left, order);
        order.push(root.data);
        this.inOrder(root.right, order);
        
        return order;
    }

    // Root, Left, Right
    preOrder(root = this.root, order = []) {
        if (root === null) return order;

        order.push(root.data);
        this.preOrder(root.left, order);
        this.preOrder(root.right, order);

        return order;
    }

    // Left, Right, Root
    postOrder(root = this.root, order = []) {
        if (root === null) return order;

        this.postOrder(root.left, order);
        this.postOrder(root.right, order);
        order.push(root.data);

        return order;
    }

    // Microsoft Copilot
    // Prompt: Show me how to find the height of a binary search tree
    findHeight(root = this.root) {
        if (root === null) return -1;
        
        // Find height from both child
        let heightL = this.findHeight(root.left);
        let heightR = this.findHeight(root.right);

        // Return the bigger value
        return Math.max(heightL, heightR) + 1;
    }

    // Prompt: How about finding the height of a node
    height(node, root = this.root) {
        if (root === null) return -1;

        // Found the node and return the height
        if (node === root.data) return this.findHeight(root);

        // Check through each tree to find the correct node
        return Math.max(this.height(node, root.left), this.height(node, root.right));
    }

    depth(node, root = this.root, depth = 0) {
        if (root === null) return -1;
        if (node < root.data) depth = this.depth(node, root.left, depth + 1);
        if (node > root.data) depth = this.depth(node, root.right, depth + 1);
        return depth;
    }

    isBalanced() {
        if (this.isBalancedInt() < 0) return false;
        return true;
    }

    // Microsoft Copilot
    // Prompt: How to check if a tree is balanced ?
    isBalancedInt(root = this.root) {
        if (root === null) return 0;

        let heightL = this.isBalancedInt(root.left);
        if (heightL === -1) return -1;

        let heightR = this.isBalancedInt(root.right);
        if (heightR === -1) return -1;

        if (Math.abs(heightL - heightR) > 1) return -1;

        return 1 + Math.max(heightL, heightR);
    }

    rebalance() {
        this.root = this.buildTree(this.inOrder());
    }
}