function doBreathingSpace(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Time is over in ${ms} milliseconds`);
    }, ms);
  });
}

async function allSetTimeout() {
  let a = await doBreathingSpace(5000);
  let b = await doBreathingSpace(3000);
  let c = await doBreathingSpace(1000);

  console.log(`${a}`);
  console.log(`${b}`)
  console.log(`${c}`);
  ;

}

allSetTimeout();