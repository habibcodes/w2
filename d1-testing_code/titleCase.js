//

// const text = "foo bar loo zoo moo";
// text = text.toLowerCase()
//     .split(' ')
//     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//     .join(' ');

const titleCase = (string) => {
  const result = string.toLowerCase().split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ');
  return result;
};

console.log(titleCase("this is an example")); // should return "This Is An Example"
console.log(titleCase("test")); // should return "Test"
console.log(titleCase("i r cool")); // should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // should return "What Happens Here"
console.log(titleCase("")); // should return ""
console.log(titleCase("A")); // should return "A"


