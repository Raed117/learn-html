//reverse string 
function reverseString(str) {
    return str.split('').reverse().join('');
}
//Count Characters
function countCharacters(str) {
    return str.length;
}
// Capitalize Words 
function CapitalizeWords(str){
    let Words = str.split(' ')
    CapWords = [ ]
    let( Word of Words ) {
        CapWords.push(word [0].toUpperCase()+word.slice(1)lowerCase())

    }
    return CapWords.join(' ')
}
//maximum and minimum values in an array of numbers
function minMax(arr) {
    minimum = arr[0]
    maximum = arr[0]	
        for (i=1; i < arr.length; i++){
            if( minimum > arr[i]){
                minimum = arr[i]
            }
            if( maximum < arr[i]){
                maximum = arr[i]
        
                }
            }
            return [ minimum,maximum]
}
//sum of array 
unction sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
    }
    return sum;
}

// filter array 
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Factorial 

function Factorial(n){
    if (n === 0 || n === 1) {
        return 1;

    }
    return n * Factorial( n - 1 );
}
