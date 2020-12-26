class Node {
    constructor(value, right = null, left = null) {
        this.value = value
        this.right = right
        this.left = left
    }
}


class BST {
    constructor() {
        this.root = null
        this.size = 0 //# of nodes
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
            this.size++
            return this
        }

        let curr = this.root 
        while(curr) {
            if (value > curr.value) {
                if (!curr.right) {
                    curr.right = newNode
                    this.size++
                    return this
                }
                curr = curr.right
            }
            else if (value < curr.value) {
                if (!curr.left) {
                    curr.left = newNode
                    this.size++
                    return this
                }
                curr = curr.left
            } else {
                console.log('Value already in tree')
                return  
            }
        }
    }

    lookup(value) {
        let curr = this.root

        while (true) {
            if (curr == null) {
                return ('No item within the Tree 😐')
            }
            if (curr.value === value) return curr

            if (value < curr.value) {
                curr = curr.left
            } else {
                curr =  curr.right
            } 
        }
    }

    remove(value) {
        let curr = this.root 
        let parentNode = null
        while (curr) {
            if (value < curr.value) {
                parentNode = curr
                curr = curr.left
            }
            else if (value > curr.value) {
                parentNode = curr
                curr = curr.right
            } else {
                //Case 1: Just one child
                //This can also handle the case where the node's got no children 
                if (!curr.right) {
                    if (!parentNode) { //If we are on the root
                        this.root = curr.left
                    }
                    else {
                        if (parentNode.value > curr.value) {
                            parentNode.left = curr.left
                        } 
                        else if (parentNode.value < curr.value) {
                            parentNode.right = curr.left
                        }
                    }
                }
                else if (!curr.left) {
                    if (!parentNode) { //If we are on the root
                        this.root = curr.right
                    }
                    else {
                        if (parentNode.value > curr.value) {
                            parentNode.left = curr.right
                        }
                        else if (parentNode.value < curr.value) {
                            parentNode.right = curr.right
                        }
                    }
                }
                //Case 2: Node has two children
                else if (curr.left && curr.right) {
                    let leftMostParent = curr.right
                    // This node has to be a leaf ⬇
                    let leftMostNode = leftMostParent.left 
                    
                    while (leftMostNode.left !== null) {
                        console.log('Bilie')
                        leftMostParent = leftMostNode
                        leftMostNode = leftMostNode.left
                    }

                    curr.value = leftMostNode.value
                    leftMostParent.left = null
                    leftMostParent = null
                    
                }
                
                return true
            }
        }
    }

    reverse(tree = this.root) {
        if (tree) {
            let left = tree.left
            let right = tree.right
            tree.right = left
            tree.left = right
            this.reverse(tree.right)
            this.reverse(tree.left)
        }

    }

    BFS() {
        let curr = this.root
        let list = []
        let queue = []
        queue.push(curr)

        while (queue.length) {
            curr = queue.shift()
            list.push(curr.value)

            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }

        }

        console.log(list)
    }

    BFSR(queue, list) {
        if (!queue.length) {
            return list
        }

        let curr = queue.shift()
        list.push(curr.value)

        if (curr.left) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }

        return this.BFSR(queue, list)


    }
    //     9
    //  4     20
    //1  6  15  170
}


const myTree = new BST()
myTree.insert(9)
myTree.insert(4)
myTree.insert(6)
myTree.insert(20)
myTree.insert(170)
myTree.insert(1)
myTree.insert(15)
traverse(myTree.root)
myTree.BFS()
console.log(myTree.BFSR([myTree.root], []))

//BFS : 9, 4, 20, 1, 6, 15, 170

function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left ?? traverse(node.left)
    tree.right = node.right ?? traverse(node.right)
    console.log((JSON.stringify(tree)))
    console.log('\n########################\n')
    return tree
}






