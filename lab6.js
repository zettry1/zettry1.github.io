//Question 2
function printNumbers(from, to) {
  while (from <= to) {
    print(from);
    from += 1;
  }

  function print(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
  return print;
}

printNumbers(1, 5);

//Question 3
let i = 0;
setTimeout(() => {
  //   alert(i);
  console.log(i);
}, 100);

for (let j = 0; j < 10000000; j++) {
  i++;
}

// this prints 10000000 This scheduled function run after the loop
//
