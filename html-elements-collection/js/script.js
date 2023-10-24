const listItems = document.querySelectorAll("li");
console.log(listItems); // Array

for (let i = 0; i < listItems.length; i++) {
    const curElem = listItems[i]; // Elemento html
    console.log(curElem);
    curElem.innerHTML = `Questo è elemento ${i}`;
    curElem.addEventListener("click", function() {
        alert(`Ciao, sono li n ${i}`);
    })
}