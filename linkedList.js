'use strict'

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value) {
        const defaultNode = new Node(value)
        this.head = defaultNode;
        this.tail = defaultNode;
        this.length = 1;
    }

    // push => adding new node at the end of the list
    push(value) {
        const pushNode = new Node(value);
        if (!this.head) {
            this.head = pushNode;
            this.tail = pushNode;
        } else {
            this.tail.next = pushNode;
            this.tail = pushNode;
            this.length++
        }
        return this
    }

    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            temp = temp.next
            prev = temp;
            this.tail = temp;
        }
        this.length --
        return temp

    }

    unshift(value) {
        const unShiftNode = new Node(value);
        if (!this.head) {
            this.head = unShiftNode;
            this.tail = unShiftNode;
        }
        else {
            unShiftNode.next = this.head;
            this.head = unShiftNode;
            this.length++
        }
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        return temp
    }
    get(index) {
        if (index < 0 || this.length < index) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp
    }

    set(index, value) {
        if (index < 0 || this.length < index) return undefined;
        let temp = get(index);
        if (temp) {
            
            temp.value = value;
            return true
        } return false;
    }
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop;
        if (!this.head) return undefined;
        let temp = get(index);
        let before = temp.next;
        temp.next = null;
        before.next = temp.next;
        return temp;
    }
    
    reverse() {
        let temp = this.head;
        this.head =this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;
        for (let i = 0; i < this.length - 1; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        
        }
    }
    
}

const defNode = new LinkedList(9)
defNode.push(123);
defNode.unshift(909)
// defNode.shift()
// console.log(defNode.get(2))
// console.log(defNode)