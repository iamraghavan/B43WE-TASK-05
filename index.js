// Print Odd Number in Array -  Anonymous Function

console.log("Print Odd Number in Array -  Anonymous Function");
let arr = [1,2,3,4,5,6,7,8,9];
let oddNumbers = function(arr) {
  let oddArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i]%2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  return oddArr;
}(arr);

console.log(oddNumbers);

// Print Odd Number in Array -  IIFE

console.log("Print Odd Number in Array - IIFE");
let arrIIFE = [1,2,3,4,5,6,7,8,9];
let oddNumbers1 = (function(arrIIFE) {
  let oddArr = [];
  for (let i=0; i<arrIIFE.length; i++) {
    if (arr[i]%2 !== 0) {
      oddArr.push(arrIIFE[i]);
    }
  }
  return oddArr;
})(arrIIFE);

console.log(oddNumbers1);


// Convert all the strings to title caps in a string array - Anonymous Function

console.log("Convert all the strings to title caps in a string array - Anonymous Function");
let strArr = ["pradeep raghavan", "ram kumar", "guvi geeks"];
let titleCaps = function(strArr) {
  let capsArr = [];
  for (let i=0; i<strArr.length; i++) {
    capsArr.push(strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1).toLowerCase());
  }
  return capsArr;
}(strArr);

console.log(titleCaps);

// Convert all the strings to title caps in a string array - IIFE

console.log("Convert all the strings to title caps in a string array - IIFE");
let strArrIIFE = ["pradeep raghavan", "ram kumar", "guvi geeks"];
let titleCapsIIFE = (function(strArrIIFE) {
  let capsArr = [];
  for (let i=0; i<strArrIIFE.length; i++) {
    capsArr.push(strArrIIFE[i].charAt(0).toUpperCase() + strArrIIFE[i].substring(1).toLowerCase());
  }
  return capsArr;
})(strArrIIFE);

console.log(titleCapsIIFE);


// Sum of all numbers in an Array - Anonymous Function

console.log("Sum of all numbers in an Array - Anonymous Function");
let arrSum = [11,92,34,23];
let sum = function(arrSum) {
  let total = 0;
  for (let i=0; i<arrSum.length; i++) {
    total += arrSum[i];
  }
  return total;
}(arrSum);

console.log(sum);
