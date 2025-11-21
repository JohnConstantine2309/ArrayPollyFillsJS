function retry(fn,retries,delay) {
    let tries = 0
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }
    
    async function callFunc(fn) {
        while(tries <= retries) {
            tries++;
            
            try {
                await fn()
                return "success";
            } catch(e) {
                if(tries > retries) {
                    throw new Error("retires are over")
                }
                await sleep(delay)
            }
            
        }
     }
    
    return callFunc(fn)
}
