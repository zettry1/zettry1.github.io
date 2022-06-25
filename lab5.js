//prob1
const testArray = [1, 10, 20, 30, 40, 50, 2, 3];
const sums = testArray
  .filter((cur) => cur > 20)
  .reduce((prev, cur) => prev + cur, 0);

console.log(sums);

//prob2

// Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.
const strings = [
  "TEst",
  "sadreqrf",
  "johny boy",
  "pulp fictional",
  "aaaa",
  "star wars",
];

const words = strings.filter((word) => word.length >= 5 && word.includes("a"));
console.log(words);

//quiz
const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

const students_averages = students.map((stu) => {
  return {
    [stu.name]: stu.grades.reduce(
      (prev, curr) => prev + curr / stu.grades.length,
      0
    ),
  };
});

console.log(students_averages);
