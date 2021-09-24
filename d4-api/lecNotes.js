const executorFct = (resolveFct, rejectFct) => {
  resolveFct('Success!');
  rejectFct('Failed!');

  setTimeout(()=>{

  }, 3000);
};

// 1. reating a promise obj
const promiseObj = new Promise(executorFct);

// 2. consuming the obj
promiseObj
  .then((message)=> {
    // success case (resolve state)
    console.log(`Success: ${message}`);
  })
  .catch((err)=> {
    // failure state (reject state)
    console.log(`Error: ${err}`);
  });