// Lightning Exercise Day 17

// make a variable from the targeted DOM class
let headers = document.querySelectorAll(".headers")

// make a function that will console.log the targeted word
let printWord = (event) => {
  let words = event.target.textContent;
  console.log(words);
}

// loop through the three h3s represented by the headers variable and call the function on them via a click event
for (let i=0; i<headers.length; i++) {
  headers.item(i).addEventListener("click", printWord)
}



// <!-- Lightning exercise:
// 1. Create a basic `index.html` `main.js` project
// 2. Create three `<h3>` tags and add any text you want to each. Use javascript to listen for a click event on the header tags and `console.log` their text. -->