'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    let sumAB = a + b;
    let sumConcat = `The sum of ${a} and ${b} is ${sumAB}.`;
    let sumArray = [sumAB, sumConcat];
    //console.log(sumArray);
    return sumArray;
}

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    let productAB = a * b;
    let productConcat = `The product of ${a} and ${b} is ${productAB}.`;
    let productArray = [productAB, productConcat];
    //console.log(productArray);
    return productArray;
}

// Here is the test for multiply(); uncomment it to run it
// testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    let sumABC = sum(sum(a, b)[0], c)[0];
    let concatSumABC = `${a} and ${b} and ${c} sum to ${sumABC}.`;

    let productABC = multiply(multiply(a, b)[0], c)[0];
    let concatProductABC = `The product of ${a} and ${b} and ${c} is ${productABC}.`;

    let arraySumAndMulti = [sumABC, productABC, concatSumABC, concatProductABC];
    return arraySumAndMulti;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
//testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    let sumArrayABC = sum(sum(sumArr[0], sumArr[1])[0], sumArr[2])[0];
    let concatSumArrayABC = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumArrayABC} is their sum.`;
    let arraySumABC = [sumArrayABC, concatSumArrayABC];
    return arraySumABC;
}

// Here is the test for sumArray(); uncomment it to run it

//testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
    let productArrayABC = multiply(multiply(multArr[0], multArr[1])[0], multArr[2])[0];
    let concatProductArrayABC = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${productArrayABC}.`;
    let arrayProductArrayABC = [productArrayABC, concatProductArrayABC];
    return arrayProductArrayABC;
}

// Here is the test for multiplyArray(); uncomment it to run it
//testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line
//let testDynamicArray = [1,2,3,4,5,10,10,1]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

    let product = null; // number container for multiplication product
    let message = ''; // string container for output message
    let numbersString = ''; // string container for the concatenated list of numbers read from parameter dynamicArray
    let outputArray = []; // array container for returning the values of product and message

    // test if parameter dynamicArray has enough elements to perform multiplicationl
    if (dynamicArray.length < 2){
        // if dynamicArray has less than 2 elements return message indicating unable to complete multiplication
        message = 'The input array has too few numbers to perform multiplication';

    } else {
        // call multiply() with first two elements of dynamicArray and set index [0] of multiply() returned value to the product
        product = multiply(dynamicArray[0], dynamicArray[1])[0];

        // test if dynamicArray has more than 2 elements
        if (dynamicArray.length > 2){
            // if dynamicArray contains more than 2 elements increment through the array starting at index [2]
            for (let i = 2; i < dynamicArray.length; i++){
                // call multiply() with product and index [i], and set index [0] of multiply()'s returned value to the product
                product = multiply(product, dynamicArray[i])[0];
            }
        }

        // increment through dynamicArray[] to build string list of numbers  for use in the output message
        for (let i = 0; i < dynamicArray.length; i++){
            // concatenate values to numberString
            numbersString = numbersString + dynamicArray[i];
            // insert a comma into the list numbers w/o spaces unless [i] = last element of the array
            if (i < dynamicArray.length - 1){
                numbersString = numbersString + ',';
            }
        }

        // set output message using the assembled list of numbers and multiplcation product within the specified text
        message = `The numbers ${numbersString} have a product of ${product}.`;
    }

    // set the two element output array with multiplication product and assembled message
    outputArray = [product, message];
    // return the array to the function call
    return outputArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray); //eslint-disable-line

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
