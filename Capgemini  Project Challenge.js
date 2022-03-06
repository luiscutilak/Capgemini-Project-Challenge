// # Questão 01

arr = [9, 2, 1, 4, 6]

const foundMedian = (arr) => { 
    const middle = Math.floor(arr.length / 2); 
    arr = [...arr].sort((a, b) => a - b); 
    return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2; 
};
console.log(foundMedian(arr));

// # Questão 02

n = [1, 5, 3, 4, 2]

let result;
const checkPair = (n) => {
  for (let index = 0; index < n.length; index += 1) {
      let number = n[index];
      if (number % 2 === 0) {
          result = number += 1
      }   
  }
  return result;
}
console.log(checkPair(n));

// # Questão 03

let s = 'tenha um bom dia';

const encode = () => {
let str = s.replace(/ /g, '');
const newArray = str.match(/.{1,4}/g);
let array = [];

for (let i = 0; i < newArray.length; i += 1) {
   for (let j = 0; j < newArray[i].length; j += 1) {
   
    if (!array[j]) array[j] = "";
   array[j] += newArray[i][j];
 }
}
let result = array.join(' ');
    return result;
}
console.log(encode(s));

