function getElementsByClassName(element, classes) {
    const classArr = classes.split(" ")
    let results = []
    
    function traverse(node) {
        if(node.classList && classArr.every(cls => node.classList.contains(cls))) {
            results.push(node)
        }
        
        for(let child of node.children) {
            traverse(child)
        }
    }
    
    traverse(element)
    return results;
}
