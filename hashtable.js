// A basic hash table data structure implemented in JavaScipt

function hashTable() {
    this.items = {};
    this.length = 0;
}

// Sets a key to a given value. If key is already in use, its value is replaced
hashTable.prototype.setItem = function(key, val) {
    let existing = undefined;
    if (this.hasItem(key)) {
        existing = this.items[key];
    } else {
        this.length++;
    }
    this.items[key] = val;
    return existing;
}

// Checks whether a table has the key in question
hashTable.prototype.hasItem = function(key) {
    return this.items.hasOwnProperty(key);
}

// Returns a value by its key
hashTable.prototype.getItem = function(key) {
    return this.hasItem(key) ? this.items[key] : undefined; 
}

// Removes a table entry by its key
hashTable.prototype.removeItem = function(key) {
    let existing = undefined;
    if (this.hasItem(key)) {
        existing = this.items[key];
        this.length--;
        delete this.items[key];
    }
    return existing;
}

// Returns an array of all the keys in use
hashTable.prototype.getKeys = function() {
    let keys = [];
    for (let k in this.items) {
        if (this.hasItem(k)) {
            keys.push(k);
        }
    }
    return keys;
}

// Returns an array of all the values in the table
hashTable.prototype.getValues = function() {
    let values = [];
    for (let k in this.items) {
        if (this.hasItem(k)) {
            values.push(this.items[k]);
        }
    }
    return values;
}

// Allows a function to be called on every key, value pair in the table
hashTable.prototype.each = function(fn) {
    for (let k in this.items) {
        if (this.hasItem(k)) {
            fn(k, this.items[k]);
        }
    }
}

// Resets the hash table to an empty state
hashTable.prototype.empty = function() {
    this.items = {};
    this.length = 0;
}

/* Testing */
let ht = new hashTable();
ht.setItem('one', 1);
ht.setItem('two', 2);
ht.setItem('one', 'not one');
console.log('Current size is', ht.length)
console.log('Key \'one\' is in use?', ht.hasItem('one'));
console.log('Value at \'two\' is', ht.getItem('two'));
console.log('Keys are', ht.getKeys());
console.log('Values are', ht.getValues());
ht.each(function(k, v) {
    console.log('each', k + ',', v)
});
ht.empty();
console.log(ht.getKeys());
console.log(ht.getValues());
console.log('Current size is', ht.length)

