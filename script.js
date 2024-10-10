// // Categorized word lists

// // Animals
// let animals = [
//   "dog", "cat", "lion", "tiger", "bear", "elephant", "giraffe", "zebra", "horse", "cow", "pig", "chicken", "duck", "turkey", "fish", "shark", "squid", "octopus", "crab", "lobster"
// ];

// // Colors
// let colors = [
//   "red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray", "brown", "silver", "gold", "copper", "bronze", "turquoise", "violet", "indigo", "magenta", "cyan"
// ];

// // Fruits
// let fruits = [
//   "apple", "banana", "orange", "grape", "strawberry", "watermelon", "mango", "pineapple", "peach", "cherry", "plum", "kiwi", "blueberry", "raspberry", "blackberry", "avocado", "lemon", "lime", "grapefruit", "tangerine"
// ];

// // Vehicles
// let vehicles = [
//   "car", "bike", "truck", "bus", "train", "plane", "boat", "ship", "submarine", "helicopter", "motorcycle", "scooter"
// ];

// // Combined list
// let allWords = [...animals, ...colors, ...fruits, ...vehicles];
let allWords = [
  "dog", "cat", "lion", "tiger", "bear", "elephant", "giraffe", "zebra", "horse", "cow", "pig", "chicken", "duck", "turkey", "fish", "shark", "squid", "octopus", "crab", "lobster",
  "red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray", "brown", "silver", "gold", "copper", "bronze", "turquoise", "violet", "indigo", "magenta", "cyan",
  "apple", "banana", "orange", "grape", "strawberry", "watermelon", "mango", "pineapple", "peach", "cherry", "plum", "kiwi", "blueberry", "raspberry", "blackberry", "avocado", "lemon", "lime", "grapefruit", "tangerine",
  "car", "bike", "truck", "bus", "train", "plane", "boat", "ship", "submarine", "helicopter", "motorcycle", "scooter"];
// console.log(allWords.length)
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let div = document.createElement('div');

for (let i = 0; i < alphabet.length; i++) {
    let button = document.createElement('button');
    button.textContent = alphabet[i];
    button.className = 'letter';
    button.id = alphabet[i];
    document.getElementById("keyboard").appendChild(button);
}


function randomGen() {
  let algorithm = Math.floor(Math.random() * 2)
  console.log(algorithm)
  if (algorithm === 1 ) {
     let randomWordIndex = Math.floor(Math.random() * 72)  
     console.log(randomWordIndex)
     console.log(allWords[randomWordIndex])
     var genWord = allWords[randomWordIndex]
  } else if (algorithm === 0) {
    let randomWordIndex = Math.floor(Math.random() * 72)  
    console.log(randomWordIndex)
    console.log(allWords[randomWordIndex])
    var genWord = allWords[randomWordIndex]
  }
  console.log(`the length of the random word is ${genWord.length}`)
  let hiddenWordbox = document.getElementById("actualGame")
  for (i=0; i<genWord.length; i++) {
    let hiddenLetterBox = document.createElement("div")
    hiddenLetterBox.classList.add("hiddenWord")
    hiddenWordbox.appendChild(hiddenLetterBox)
  }
  // let wordBoxes = document.querySelectorAll(".hiddenWord")
// console.log(wordBoxes[0].textContent)
let userOnBox = 0; 
// let wordBoxes = document.querySelectorAll(".hiddenWord")
// console.log(wordBoxes)
let wordBoxes = document.querySelectorAll(".hiddenWord")
// console.log(wordBoxes[userOnBox])
let letterOnKey = document.querySelectorAll(".letter")
console.log(letterOnKey.length)
// WHAT THE FUCK
// console.log(wordBoxes[userOnBox].textContent)
let characterLimit = wordBoxes.length
console.log(`character limit is ${characterLimit}`)
console.log(letterOnKey[0].textContent)
if (userOnBox<characterLimit) {
  letterOnKey.forEach( function(element){
    element.addEventListener("click", () => {
      console.log(userOnBox);
      console.log(wordBoxes);
      if (userOnBox < wordBoxes.length) {
        console.log(wordBoxes[userOnBox]);
        wordBoxes[userOnBox].textContent += element.textContent;
        userOnBox++;
      } else {
        console.log("You've already filled all the boxes!");
      }
    })  
  })
}
} 
randomGen();
// function typeWriter() {
//   let letterChar = 
// }


