// import caesar13 from './caesar13';

const alphabetCapitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetSmallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function checkCardNumber(stringSource){

  if(Object.prototype.toString.call(stringSource) !== "[object String]") throw 'Error: passed argument is not a String';
  if(stringSource.length === 0) throw 'Error: passed argument is an empty String'

  // debugger;
  const resultAsArray = [];
  const sourceAsArray = [...stringSource];
  for(let i = 0; i < sourceAsArray.length; i++){

    let letterSource = sourceAsArray[i];
    let isLetterFound = false;

    //check big letters
    for (let j = 0; j < alphabetCapitals.length; j++){

      const letterInReferenceArray = alphabetCapitals[j];
      if (letterSource === letterInReferenceArray){
        let indexPlus13 = j + 13;
        if (indexPlus13 === alphabetCapitals.length) indexPlus13 = 0;
        if (indexPlus13 > alphabetCapitals.length) indexPlus13 = indexPlus13 - alphabetCapitals.length;
        resultAsArray.push(alphabetCapitals[indexPlus13]);
        isLetterFound = true;
        continue;
      }
    }

    //check small letters
    for (let j = 0; j < alphabetSmallLetters.length; j++){
  
      const letterInReferenceArray = alphabetSmallLetters[j];
      if (letterSource === letterInReferenceArray){
        let indexPlus13 = j + 13;
        if (indexPlus13 === alphabetSmallLetters.length) indexPlus13 = 0;
        if (indexPlus13 > alphabetSmallLetters.length) indexPlus13 = indexPlus13 - alphabetSmallLetters.length;
        resultAsArray.push(alphabetSmallLetters[indexPlus13]);
        isLetterFound = true;
        continue;
      }
    }

  if(!isLetterFound) resultAsArray.push(letterSource);
  }
 
return resultAsArray.join("");
}



/* Weryfikacja */

function verify(input, goal) {
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkCardNumber("PRZEPROGRAMOWANI"), "CEMRCEBTENZBJNAV");
verify(checkCardNumber("1PRZEPROGRAMOWANI1"), "1CEMRCEBTENZBJNAV1");
verify(checkCardNumber("!!PRZEPROGRAMOWAN I"), "!!CEMRCEBTENZBJNA V");
// verify(caesar13(''), "!!CEMRCEBTENZBJNA V");
// verify(caesar13([]), "!!CEMRCEBTENZBJNA V");