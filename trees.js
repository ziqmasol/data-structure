
class nodeTree{
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class TreeList{
    constructor() {
        this.root = null
    }
    insert(value) {
        const rootNode = new nodeTree(value)
        if (this.root === null) {
            this.root = rootNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (rootNode.value === temp.value) return undefined;
            if (rootNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = rootNode;
                    return this;
                }
                temp =temp.left
            }
            else {
                if (temp.right === null) {
                    temp.right = rootNode;
                    return this;
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if(this.root === null) return false
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp =temp.left
            } else if (value > temp.value) {
                temp =temp.right
            } else {
                return true;
            }
        } 
        return false
    }
    
}

const root = new TreeList()
root.insert(90)
root.insert(87)
root.insert(9)

console.log(root)