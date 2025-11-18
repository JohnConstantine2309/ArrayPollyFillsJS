function currying(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        }
        else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        }
    }
}

function debounce(fn, delay) {
    let interval;
    
    return function(...args) {
        clearTimeout(interval)
        interval = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function throttle(fn, delay) {
    let last = 0
    return function(...args) {
        let now = Date.now();
        if(now-last >=delay) {
            last = now
            fn.apply(this, args)
        }
    }
}

function memoise(fn) {
    let cache = new Map();
    return function(...args) {
        let key = JSON.stringify(args)
        if(cache.has(key)) {
            return cache.get(key)
        }
        
        let result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

function deepClone(obj) {
    if(typeof obj!="object" || obj== null) return obj
    
    let clonedObj = Array.isArray(obj) ? [] : {}
    
    for(let [key,value] of Object.entries(obj)) {
        clonedObj[key] = deepClone(value)
    }
    
    return clonedObj
}
