//closuree (lexical scope)
function Incre(){
    let count = 1;
    function increment(){
        count +=10;
        return count;
    }
    return increment();
}

console.log(Incre());



// closuree with memoizatiion

function memo(){
    let cache = {};

     function me(n){
        if(n in cache){
            return cache[n];
        }
       console.log("hiii");

        cache[n]= n * n;
        return cache[n];
    }

    return me;
}

let memoo = memo();
console.log(memoo(5));
console.log(memoo(5));
