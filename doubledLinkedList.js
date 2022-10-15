'use strict'

class DNode{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value) {
        const defaultNode = new DNode(value);
        this.head = defaultNode;
        this.tail = defaultNode;
        this.length = 1;
    }
    push(value) {
        const pushNode = new DNode(value)
        if (!this.head) {
            this.head = pushNode;
            this.tail = pushNode;
        }
        else {
            this.tail.next = pushNode;
            // pushNode.prev = this.tail;
            this.tail = pushNode;
            this.tail.prev = this.head
        }
        
        this.length++
        return this;
    }

    pop() {
        if (!this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = temp.prev;
            this.tail.next = null
            temp.prev = null;
        }
        this.length--
        return temp
    }
    unShift(value) {
        const unShiftNode = new DNode(value);
        if (!this.head) {
            this.head = unShiftNode;
            this.tail = unShiftNode;
        }
        else {
            unShiftNode.next = this.head;
            this.head.prev =unShiftNode
            this.head = unShiftNode;
            this.length++
        }
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null
        }
        this.length--
        return temp
    }
    getComputedStyle(index) {
        if (index < 0 || this.length < index) return undefined;
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i <  index; i++){
                temp = temp.next;
            }
        } else {
            let temp = this.tail;
            for (let i = this.length - 1; i > index; i--){
                temp =temp.prev
            }
        }
        return temp
    }

    set(index, value) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unShift(value);
        if(index === this.length -1) return this.push(value)
        let temp = get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false; 

    }
    insert(index, value) {
        if (index === 0) return this.unShift(value);
        if (index === this.length) this.push(value);
        if (index < 0 || index > this.length ) return false;
        
        const insertNode = new DNode(value);
        let before = get(index - 1);
        let next = before.next;
        before.next = insertNode;
        insertNode.next = after;
        next.prev =insertNode
        this.length++
    }

    remove(index) {
        if (index === 0) return this.unShift(value);
        if (index === this.length) this.push(value);
        if (index < 0 || index > this.length) return false;
        
        let temp = get(index)
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;  
        this.length--
        return this;
    }

}

const DoubledLinkedList = new DoublyLinkedList(90);
// DoubledLinkedList.push(56)
// DoubledLinkedList.pop() 
console.log(DoubledLinkedList.pop())