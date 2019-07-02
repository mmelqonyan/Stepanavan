function first() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('2000');
      }, 2000);
    });
  }
  
  function second() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('3000');
      }, 3000);
    });
  }
  
  function thirds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('5000');
      }, 5000);
    });
  }
  
  async function allSetTimeout() {
    let a = await first();
    let b = await second();
    let c = await thirds();
  
    console.log(`${ c }`);
    console.log(`${ b }`)
    console.log(`${ a }`);
    ;
    
  }
  
  allSetTimeout();
  