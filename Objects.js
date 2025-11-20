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
