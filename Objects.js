const flatObj = {
  name: 'hanny',
  age: 25,
  'address.country': 'india',
  'address.state.stateName': 'haryana',
  'address.state.city': 'mahendergarh',
  'address.state.village': 'sigra',
  'address.pin': 123034
}

function flatToNested(obj, result) {
    for(let [key,value] of Object.entries(obj)) {
        let current = result;
        let keyArr = key.split(".")
        
        for(let i=0;i<keyArr.length-1;i++) {
            if(!current[keyArr[i]]) {
                current[keyArr[i]] = {}
            }
            current = current[keyArr[i]]
            
        }
        current[keyArr[keyArr.length-1]] = value
        
    }
    return result;
}

console.log(flatToNested(flatObj, {}))

const nestedObj = {
    name: "hanny",
    age: 25,
    address: {
        country: "india",
        state: {
            stateName: "haryana",
            city: "mahendergarh",
            village: "sigra"
        },
        pin: 123034
    }
}

const flatObj = {}

function recursive(obj, current) {
    for(let [key,value] of Object.entries(obj)) {
        const newKey = current ? current+"."+ key : key; 
        if(typeof value == 'object') {
            recursive(value, newKey)
        }
        else {
            flatObj[newKey] = value;
        }
    }
}

recursive(nestedObj, "")
console.log(flatObj)


const arr = [
    {
        date: 'JAN',
        value: 5,
        weight: 9
    },
    {
        date: 'JAN',
        value: 2,
        weight: 19
    },
    {
        date: 'FEB',
        value: 9,
        weight: 1
    },
    {
        date: 'FEB',
        value: 10,
        weight: 29
    },
    ]
    
function transform(arr, primarykey) {
    const grouped= arr.reduce((acc, item) => {
        const keyValue = item[primarykey]
        
        acc[keyValue] ??= {[primarykey]: keyValue}
        
        for(let [k,value] of Object.entries(item)) {
            if(k!==primarykey) {
                acc[keyValue][k]??=[]
                acc[keyValue][k].push(value)
            }
        }
        return acc;
    }, [])
    
    return Object.values(grouped)
}


console.log(transform(arr, "date"))
