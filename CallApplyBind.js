Function.prototype.myCall = function(context, ...args) {
    if (context == null) context = globalThis;
    let key = Symbol()
    context[key] = this
    let result = context[key](...args)
    delete context[key]
    return result
}

Function.prototype.myApply = function (context, argsArray) {
    if (context == null) context = globalThis;
    if (!Array.isArray(argsArray) && argsArray !== undefined) {
        throw new TypeError("Second argument must be an array");
    }

    const key = Symbol();
    context[key] = this;

    const result = context[key](...(argsArray || []));
    delete context[key];
    return result;
};


Function.prototype.myBind = function(context, ...args) {
    const fn = this
    return function(...nextArgs) {
        return fn.apply(context, [...args, ...nextArgs])
    }
}
