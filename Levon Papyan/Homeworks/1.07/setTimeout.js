
  
  function thirds(i) {
    return new Promise(resolve => {
      setTimeout((i) => {
        resolve(i);
      }, i);
    });
  }
  
  async function allSetTimeout() {
    let a = await first();
    let b = await second();
    let c = await thirds();
  
    console.log(`${ c }`);
    console.log(`${ b }`)
    console.log(`${ a }`);
    
    
  }
  
  allSetTimeout();
  