function doBreathingSpace(name, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`${name} your email will be sent in ${ms} miliseconds`);
      } else {
        reject();
      }
    }, ms);
  })
};


doBreathingSpace(`Levon`, 5000)
  .then(data => {
    console.log(`All is right : ${data}`);
  }).catch(() => {
    console.log("There was an error");
  });