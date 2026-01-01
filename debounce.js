// debounce : For example, in a search bar, every keystroke could trigger an API request. Without debouncing, this would result in multiple redundant requests. With debouncing, the API call is delayed until the user stops typing for a defined period, ensuring only one request is sent.


function debounce(fn,delay){
    let timeOut;

    return function (...args){
        clearInterval(timeOut)

        timeOut = setTimeout(() => {
            fn(...args)
        },delay)
    }
}


function search(param){
    console.log("param hai hum",param);
}

const dedo = debounce(search,1000)
dedo("hii");
dedo("lvde")






// with apply method

function debounce(fn, delay) {
    let timer;
    const ctx = this;
    
    return function (...args) {
        console.log(args);

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(ctx,args);
        }, delay)
    }
}

const API = function () {
    console.log("API call ho gaya", ...arguments);
}

const betterFunction = debounce(API, 3000)

betterFunction("Dedeo")