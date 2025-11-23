// memoization (higher order function)

let map = new Map();

function memoizeOne(fn) {
    function temp (...args){
        const key = args.join("_");

        console.log("keys",key);
        
        if(map.has(key)){
            console.log("cache");
            return map.get(key)
            
        }

        const result = fn(...args);
        map.set(key, result)

        return result
    }
    return temp;
}

const add = (a,b) => a + b;

const add_memo = memoizeOne(add)

console.log(add_memo(1,2));
console.log(add_memo(1,2));
