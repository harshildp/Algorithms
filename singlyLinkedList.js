function Node(val) {
    this.value = val;
    this.next = null;
}
function SLL() {
    this._length = 0;
    this.head = null;
}

SLL.prototype.find = function(value) {
    let cur = this.head;
    while (cur.value != value) {
        cur = cur.next;
    }
    return cur;
}

SLL.prototype.add = function(value) {
    var node = new Node(value);
    let cur = this.head;

    if (!cur) {
        this.head = node;
        
    } else {
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node;
    }

    this._length++;
    return node;
}

SLL.prototype.display = function() {
    let cur = this.head;
    while (cur) {
        console.log(cur.value);                
        cur = cur.next;
    }
}

let sll = new SLL();
sll.add("one")
sll.add("one")
sll.add("one")
sll.display();