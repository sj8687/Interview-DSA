// // ex like YT cmt box while streaming 

function thortling(fn, delay) {
  let lastCall = 0;
  console.log(lastCall);


  return function (...args) {
    const now = Date.now();

    console.log(now);

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }

  }
}

function sendMsg(param) {
  console.log("hii i m thortling", param);

}

const dedo = thortling(sendMsg, 2 * 1000);
dedo("aie lvde kidhr hai")
dedo("aie lvde ")
dedo("aie  kidhr hai")
dedo("kidhr hai")
dedo("aie")






// with apply method

const thortle = function (fn, delay) {
  let thortlingg;
  const ctx = this;

  return function (...args) {

    if (!thortlingg) {
      fn.apply(ctx, args);
      thortlingg = true;
      setTimeout(() => {
        thortlingg = false;
      }, delay)
    }
  }
}
function sendMssg(param) {
  console.log("hii i m thortling", param);

}

const dedop = thortle(sendMssg, 2 * 1000);
dedop("aie lvde kidhr hai")
dedop("aie lvde ")
dedop("aie  kidhr hai")