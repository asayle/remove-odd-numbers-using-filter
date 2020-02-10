// Remove Odd Numbers From an Array
// By creating a function that takes an array of numbers and returns only even values
// The function should return an array containing only even numbers



function evensOnly(arr){
    // Use filter method for each item in the array
     return arr.filter(function(number){
    // use modulus operator to evluate even numbers and 'return' items with a remainder of 0
       return number % 2 === 0;
     })
      
      
    }
    
    console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]))
    console.log(evensOnly([21,26,28,29]))