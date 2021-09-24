// async control flow //
// console.log('hello computer');
// const string = '4311o th3r3 w0r1d';
// setTimeout(() => {
//   for (let word in string) {
//     console.log(string);
//   }
// }, 3000);

// console.log('hello computer');
// setTimeout(() => {
//   console.log('4311o');
// }, 1000);

// setTimeout(() => {
//   console.log('th3r3');
// }, 2000);

// setTimeout(() => {
//   console.log('w0r1d');
// }, 3000);

setTimeout(() => {
  console.log('1');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('3');
    }, 1000);
  }, 1000);
}, 1000);