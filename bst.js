/*############################################
~~~~~~~~~~~~~~~~~~~Structure~~~~~~~~~~~~~~~~~~
############################################*/

function BinarySearchTree() {
    this.root = null;
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

/*############################################
~~~~~~~~~~~~~~~~~Basic Methods~~~~~~~~~~~~~~~~
############################################*/

//Inserts a new node into an existing BST. 
BinarySearchTree.prototype.add = function (val) {
    let root = this.root;

    if (!root) {
        this.root = new Node(val);
        return;
    }

    var currentNode = root;
    var newNode = new Node(val);

    while (currentNode) {
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }
    }
}
BinarySearchTree.prototype.remove = function (val) {
    var that = this;
    var removeNode = function (node, val) {
        if (!node) {
            return null;
        }
        if (val === node.value) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }

            var temp = that.min(node.right);
            node.value = temp;
            node.right = removeNode(node.right, temp);
            return node;
        } else if (val < node.value) {
            node.left = removeNode(node.left, val);
            return node;
        } else {
            node.right = removeNode(node.right, val);
            return node;
        }
    };
    this.root = removeNode(this.root, val);
};

// Returns whether a BST contains the supplied value. 
BinarySearchTree.prototype.contains = function (val) {
    var cur = this.root;
    while (cur) {
        if (val === cur.value) {
            return true;
        }
        if (val < cur.value) {
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    return false;
};
// Builds a binary search tree from a sorted array.
BinarySearchTree.prototype.arrayToBST = function (arr) {
    if (arr === null) {
        return null;
    }
    const start = 0;
    const end = arr.length - 1;
    return build(arr, start, end);

    function build(arr, start, end) {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((end + start) / 2);
        const node = new Node(arr[mid])
        if (start !== end) {
            node.left = build(arr, start, mid - 1);
            node.right = build(arr, mid + 1, end)
        }
        return node;
    }
}

// Prints a BST inline with different levels separated by a '['.
BinarySearchTree.prototype.print = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('[');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.value.toString() + ' ';
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.slice(0, -2).trim());
};

// Prints a BST with each level on a new line.
BinarySearchTree.prototype.printByLevel = function () {
    if (!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while (queue.length) {
        var node = queue.shift();
        string += node.value.toString() + (node.value !== '\n' ? ' ' : '');
        if (node === newline && queue.length) {
            queue.push(newline);
        }
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    console.log(string.trim());
};

// Returns the minimum value in a BST.
BinarySearchTree.prototype.min = function (node) {
    if (!node) {
        node = this.root;
    }
    while (node.left) {
        node = node.left;
    }
    return node.value;
};

// Returns a maximum value in a BST.
BinarySearchTree.prototype.max = function (node) {
    if (!node) {
        node = this.root;
    }
    while (node.right) {
        node = node.right;
    }
    return node.value;
};

// Height helper function which runs the bulk of the recursive logic.
BinarySearchTree.prototype._height = function (node) {
    if (!node) {
        return -1;
    }
    let left = this._height(node.left);
    let right = this._height(node.right);
    return Math.max(left, right) + 1;
};

// Returns the height of a BST. Height is defined as the length
// from a node to its farthest leaf.
BinarySearchTree.prototype.height = function (node) {
    if (!node) {
        node = this.root;
    }
    return this._height(node);
};

// Balanced helper function which runs the bulk of the recursive logic.
BinarySearchTree.prototype._isBalanced = function (node) {
    if (!node) {
        return true;
    }
    var hLeft = this._height(node.left);
    var hRight = this._height(node.right);
    var dif = Math.abs(hLeft - hRight);
    if (dif > 1) {
        return false;
    } else {
        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
};

// Returns whether a BST is balanced or not. A balanced tree has at most a
// difference of 1 in the height of the left branch and right branch. 
BinarySearchTree.prototype.isBalanced = function (node) {
    if (!node) {
        node = this.root;
    }
    return this._isBalanced(node);
};

// (In progress)
function dfs(node) {
    if (node) {
        console.log(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}

//~~~~~~~~~~~~~~~~~Testing Zone~~~~~~~~~~~~~~~~~~~
let bst = new BinarySearchTree()
bst.root = bst.arrayToBST([0, 1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 12])
bst.add(13)
bst.add(-1)
bst.print()
console.log(`Min: ${bst.min()}`)
console.log(`Max: ${bst.max()}`)
console.log(`Height: ${bst.height()}`)
console.log(`Balanced? ${bst.isBalanced()}`)
bst.add(19)
console.log(`Balanced? ${bst.isBalanced()}`)
console.log(`Contains? ${bst.contains(2)}`)
bst.remove(19)
console.log(`Contains? ${bst.contains(19)}`)
bst.printByLevel()





