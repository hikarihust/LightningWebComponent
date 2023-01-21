// Sets in Javascript
const students = new Set(["John", "Aragorn"]);
students.add("Gimli");
console.log(students);

console.log(students.has("gimli"));

students.delete("John");
console.log(students);

const studentsArr = Array.from(students);
console.log(studentsArr);

students.clear();

console.log(students); 
