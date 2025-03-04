class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeHead() {
        if (this.isEmpty()) {
            return null;
        }
        const removeNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removeNode.value;
    }

    removeTail() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.size === 1) {
            const removeNode = this.head;
            this.head = null;
            this.size--;
            return removeNode.value;
        }
        let prev = this.head;
        while (prev.next && prev.next.next) {
            prev = prev.next;
        }
        const removeNode = prev.next;
        prev.next = null;
        this.size--;
        return removeNode.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Lista vacía");
        } else {
            let curr = this.head;
            let lisValue = '';
            while (curr) {
                lisValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(lisValue.trim());
        }
    }
}

const list = new LinkedList();
console.log("¿Está vacía la lista?", list.isEmpty());
console.log("Tamaño de la lista", list.getSize());

list.prepend(10);
list.prepend(14);
list.prepend(8);
list.print();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(100);
list.print();

console.log("Eliminar cabeza:", list.removeHead());
list.print();

console.log("Eliminar cola:", list.removeTail());
list.print();

console.log("Eliminar cola:", list.removeTail());
list.print();