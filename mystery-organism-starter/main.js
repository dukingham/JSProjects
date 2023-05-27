// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const replaceRandBase = (array) => {
  const letters = ['A', 'T', 'C', 'G'];
  const randomIndex = Math.floor(Math.random() * letters.length);
  const letterToReplace = letters[randomIndex];
  const otherLetters = letters.filter((letter) => letter !== letterToReplace);
  const replacementLetter = otherLetters[Math.floor(Math.random() * otherLetters.length)];

  return array.map((letter) => (letter === letterToReplace ? replacementLetter : letter));
};

const compareArr = (arr1, arr2) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      newArr.push(arr1[i]);
    }
  }
  const percentage = ((newArr.length / arr1.length) * 100).toFixed();
  console.log(`Specimen #1 and Specimen #2 share ${percentage}% of their DNA`);
};

const likelihoodOfSurvival = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'G' || arr[i] === 'C') {
      newArr.push(arr[i]);
    }
  }
  const percentage = ((newArr.length / arr.length) * 100).toFixed();
  return percentage <= 60;
  
};

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      this.dna = replaceRandBase(this.dna);
    },
    compareDNA(spec) {
      compareArr(this.dna, spec);
    },
    willLikelySurvive() {
      return likelihoodOfSurvival(this.dna);
      
    },
  };
};

let successfulSpecimen = []
let i = 1;
while (successfulSpecimen.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    successfulSpecimen.push(temp);
    i += 1
  } 
}

console.log(successfulSpecimen)
