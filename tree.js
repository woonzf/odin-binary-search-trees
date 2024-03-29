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

        if (value < root.data) {
            root.left = this.deleteRecur(root.left, value);
            return root;
        } else if (value > root.data) {
            root.right = this.deleteRecur(root.right, value);
            return root;
        }

        if (root.left === null) return root.right;
        else if (root.right === null) return root.left;
        else {
            let succParent = root;
            let succ = root.right;

            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }

            if (succParent !== root) succParent.left = succ.right;
            else succParent.right = succ.right;

            root.data = succ.data;
            return root;
        }
    }

    find(value) {
        return this.findRecur(this.root, value);
    }

    findRecur(root, value) {
        if (root === null) return "No node found";
        if (root.data === value) return root;
        if (value < root.data) return this.findRecur(root.left, value);
        else return this.findRecur(root.right, value);
    }

    levelOrder(callback) {
        
    }
}