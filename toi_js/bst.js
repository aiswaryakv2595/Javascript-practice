class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst {
    constructor(){
        this.root = null
    }
    insert(value){
      const node = new Node(value)
      if(this.root == null)
      this.root = node
    else{
        this.insertNode(this.root,node)
    }
    }
    insertNode(root,node){
        if(node.value == root.value)
        return
    if(node.value < root.value){
        if(root.left == null)
        root.left = node
        else
        this.insertNode(root.left,node)
    }
    if(node.value > root.value){
        if(root.right == null)
        root.right = node
        else
        this.insertNode(root.right,node)
    }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
  
}
const tree = new bst()
tree.insert(10)
tree.insert(1)
tree.insert(13)
console.log(tree)
tree.inOrder(tree.root)
