// Array di classi di studenti
const classes = [
                               
    ["Marco", "Giuseppe", "Ludovica", "Sara"], 
    ["Maria", "Andrea", "Davide"], 
    ["Serena", "Luca", "Giuseppe", "Anna"] // i = 2
];
console.log(classes);

const resultElem = document.querySelector(".result");

for (let i = 0; i < classes.length; i++) {
    const curClass = classes[i]; // Array
    console.log(curClass);
    resultElem.innerHTML += `<h2>Classe n. ${i + 1}</h2>`;
    let list = "<ul>";
    for (let j = 0; j < curClass.length; j++) {
        console.log(curClass[j]);
        list += `<li>${curClass[j]}</li>`;
    }
    list += "</ul>";
    console.log(list);
    resultElem.innerHTML += list;
}