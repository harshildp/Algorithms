//  A stack implemented through an array. Stacks are first in last out structures
var Stack = (function(){
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function(item) {
        this.dataStore[this.top] = item;
        this.top++;
    }
    Stack.prototype.pop = function() {
        this.top--;
        let output = this.dataStore[this.top];
        this.dataStore = this.dataStore.slice(0,this.top)
        return output;
    }
    Stack.prototype.display = function() {
        for (let i = 0; i < this.top; i++) {
            console.log(this.dataStore[i]);
        }
    }
    return Stack;
})();
module.exports = Stack;

var s = new Stack();
s.push(1)
s.push(2)
s.push(3)
console.log(s.pop())
console.log(s.dataStore)
s.display()

