// STACK FIFO
class StackNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value) {
        const defStackNode = new StackNode(value)
        this.top = defStackNode;
        this.length = 1;
    }

    push(value) {
        const pushNewNode = new StackNode(value);
        if (!this.head) {
            this.top = pushNewNode;
        } else {
            pushNewNode.next = this.top;
            this.top = pushNewNode;
        }
        this.length++
        return this;
        
    
    }
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--
        return temp
    }
}

const myStack = new Stack(56);
myStack.push(78)
myStack.push(8)
myStack.push(782)
console.log(myStack)

// 2. QUEUE FIFO

class Queue{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queuelist{
    constructor(value) {
        const QueueNode = new Queue(value);
        this.first = QueueNode;
        this.last = QueueNode;
        this.length = 1;
    }
    enQueue(val) {
        const pushQueue = new Queue(val);
        if (this.length === 0) {
            this.first = pushQueue;
            this.last = pushQueue;
        } else {
            this.last.next = pushQueue;
            this.last = pushQueue;
        }
        this.length++
        return this;

    }
    deQueue() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            
        let temp = this.first;
            this.first = this.first.next;
            temp.next = null;
        }
            this.length--
        return temp
    }
}