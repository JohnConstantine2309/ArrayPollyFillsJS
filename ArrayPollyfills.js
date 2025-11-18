// map function pollyfill
Array.prototype.myMap = function(fn) {
    if(typeof fn!= "function") throw new Error("callback must be a function.")
    let finalArr = []
    
    for(let i=0;i<this.length;i++) {
        finalArr.push(fn(this[i], i, this))
    }
    return finalArr
}

// filter function pollyfill
Array.prototype.myFilter = function(fn) {
    if(typeof fn!= "function") throw new Error("callback must be a function.")
    let finalArr = []
    
    for(let i=0;i<this.length;i++) {
        if(fn(this[i], i, this)) {
        finalArr.push(this[i])
        }
    }
    return finalArr
}

//is Array function 
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]"
}

// reduce function
Array.prototype.myReduce = function (fn, initialValue) {
    if (typeof fn !== "function") {
        throw new TypeError("Callback must be a function");
    }

    let acc = initialValue;
    let startIndex = 0;

    if (acc === undefined) {
        if (this.length === 0) throw new TypeError("Reduce of empty array with no initial value");
        acc = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }

    return acc;
};

// Flat function without depth
Array.prototype.myFlat = function() {
    let flatArr = []
    
    function recursive(arr) {
                if(Array.isArray(arr)) {
               for(let i=0;i<arr.length;i++) {
                        recursive(arr[i])
                }
            }
                else {
                    flatArr.push(arr)
                }
    }
    recursive(this)
    return flatArr
}

