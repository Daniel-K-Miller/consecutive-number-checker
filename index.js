consecNums = (num) => {
    // numDiff is the 'added total' of difference between numbers in the consecutive sequence to the first number in the sequence. Which will always be 1 in a consecutive sequence (going up by 1), then 2, then 3 etc...) 
    // e.g. if the original number is 3. Any 3 consecutive numbers will give the sequence of difference of 1, 2. Totaling to an 'added total' of differnce of 3. [This can be shown as n, n+1, n+2]
    let numDiff = 0;
    // This loop starts from one below the called number, and adds the sequential numbers (going down by 1s) to the variable NumDiff stopping at 0;
    for (let i = num-1; i > 0; i--) {
        numDiff += i;
    }
    // isDivisable determines whether the numDiff divided by the original is an integer or not. 
    // Therefore determining whether for example any 3 consecutive numbers (going up in 1s), equal a multiple of 3 or not OR any 4 consecutive numbers (going up in 1s), equal a multiple of 4 or not. Etc...
    let isDivisable = undefined;
    if (num < 0) {
        isDivisable = "Starting number has to be a positive number!";
    } else if (numDiff % num == 0) {
        isDivisable = true;
    } else if (numDiff % num != 0) {
        isDivisable = false;
    }
    console.log(isDivisable);
}
// To test whether an array of x length consecutive numbers is divisable by x change the number within the brackets 
consecNums(0);