const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord;
// Assuming words is an array of objects like this
// const words = [{word: "example", hint: "This is a sample word"}];

const initGame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  console.log(wordArray, randomObj.word);
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
