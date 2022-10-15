// LinkedList
// generate node
class geneNode{
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class nestedObject{
    constructor(val) {
        const parentNode = new geneNode(val);
        this.head = parentNode;
        this.tail = parentNode;
        this.length = 1;
        // return this;
    }

    push(val) {
        const pushNode = new geneNode(val)
        // if the list is empty
        if (!this.head) {
            this.head = pushNode;
            this.tail = pushNode;
        }
        // if the list contain one are two node(s)
        else {
            this.tail.next = pushNode;
            this.tail = pushNode;
        }
        this.length++
        return this
    }

    // pop method BIG 0 0(N) 1. empty list 2. one or two node list 3. 
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev
        this.tail.next = null;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    unShift(val) {
        const shiftNode = new geneNode(val);
        if (!this.head) {
            this.head = shiftNode;
            this.tail = shiftNode;
        }
        else {
            shiftNode.next = this.head;
            this.head = shiftNode;

        }
        this.length--
        return this
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;

    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }
    set(val, ind) {
        let temp = get(ind);
        if (temp) {
            temp.value = val;
            return true
        }
        return false;
    }
    insert(index, value) {
        if (index === 0) return this.unShift(value);
        if (index === this.length) return this.push(value);
        if(index < 0 || index > this.length)return false 
        const insertNode = new geneNode(value)
        let temp = this.get(index -1);
        insertNode.next = temp.next;
        temp.next = insertNode;
        this.length++
        return this

    }
    remove(index){
        if (index < 0 || this.length < index) return undefined;
        if (index === 0) return this.shift
        if (index === this.length -1 ) return this.pop();;
        let before = this.get(index - 1);
        let temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;
        for (let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
}

