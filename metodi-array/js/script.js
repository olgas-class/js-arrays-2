const students = ["Madalina", "Luca", "Gianmarco", "Serena"];

console.log(students.at(-1));
console.log(students[students.length - 1]);

console.log(students.includes("Serena"));

console.log(students.join(" "));

console.log(students);

const copyArray = students; // Questo NON è copia di array, è solo un'altro puntatore

copyArray.reverse();

console.log("Copia", copyArray);
console.log("Original", students);