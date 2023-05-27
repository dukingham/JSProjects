const array = ['A', 'B', 'C', 'A', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'];

const replaceRandomLetter = (array) => {
    const letters = ['A', 'B', 'C', 'D'];
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letterToReplace = letters[randomIndex];
    const otherLetters = letters.filter(letter => letter !== letterToReplace);
    const replacementLetter = otherLetters[Math.floor(Math.random() * otherLetters.length)];
  
    return array.map((letter) => (letter === letterToReplace ? replacementLetter : letter));
};
  
const newArray = replaceRandomLetter(array);
console.log(newArray);
console.log(array);
console.log(newArray);