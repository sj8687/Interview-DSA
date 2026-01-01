function currying(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
   }
}

// 2
const currying2 = (a) => (b) => (c) => a+b+c

console.log(currying(1)(2)(3));



// realtime usecase is liek a shop want to give discount but its changeable
function discount(discountRate){
    return function(price){
        return price - (price * discountRate/100);
    }
}    

const calAmt = discount(10);
console.log(calAmt(1000));