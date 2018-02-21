// A queue implemented through an array. Queues are first in first out structures
var Queue = (function(){
    function Queue() {
        this.dataStore = [];
        this.back = 0;
    }
    Queue.prototype.enqueue = function(item) {
        this.dataStore[this.back] = item;
        this.back++;
    }
    Queue.prototype.dequeue = function() {
        let output = this.dataStore[0];
        this.dataStore = this.dataStore.slice(1,this.back);
        this.back--;
        return output;
    }
    Queue.prototype.display = function() {
        for (let i = 0; i < this.back; i++) {
            console.log(this.dataStore[i]);
        }
    }
    return Queue;
})();
module.exports = Queue;

var q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.dequeue())
console.log(q.dataStore)
q.display()