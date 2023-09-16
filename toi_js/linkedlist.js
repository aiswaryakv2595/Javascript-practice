class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(){
        this.head = null
    }
    insert(value){
        const node = new Node(value)
        let current
        if(this.head == null)
        this. head = node
    else{
        current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    reverse(){
        this.head = this.reverseList(this.head,null)
    }
    reverseList(current,prev){
        if(current == null)
        return prev
        else{
           let next = current.next
            current.next = prev
            return this.reverseList(next,current)
        }
    }
}
const list = new LinkedList()
list.insert(10)
list.insert(20)
list.insert(30)
list.print()
console.log('-------')
list.reverse()
list.print()