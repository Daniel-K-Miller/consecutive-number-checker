// hardset ViewPort on load to prevent Android shrinking Viewport when keyboard is brought up
document.onload = setTimeout(function () {
    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]")
    viewport.setAttribute(`content`, `height=${viewHeight}, width=${viewWidth}, initial-scale=1.0`);
}, 1);

consecNums = () => {
    const num = document.getElementById("number").value;
    const result = document.querySelector("#result").style;
    const preResult = document.getElementById("preResult");
    // numDiff is the 'added total' of difference between numbers in the consecutive sequence to the first number in the sequence. Which will always be 1 in a consecutive sequence (going up by 1), then 2, then 3 etc...) 
    // e.g. if the original number is 3. Any 3 consecutive numbers will give the sequence of difference of 1, 2. Totaling to an 'added total' of differnce of 3. [This can be shown as n, n+1, n+2]
    let numDiff = 0;
    // This loop starts from one below the called number, and adds the sequential numbers (going down by 1s) to the variable NumDiff stopping at 0;
    for (let i = num - 1; i > 0; i--) {
        numDiff += i;
    }
    // isDivisable determines whether the numDiff divided by the original is an integer or not. 
    // Therefore determining whether for example any 3 consecutive numbers (going up in 1s), equal a multiple of 3 or not OR any 4 consecutive numbers (going up in 1s), equal a multiple of 4 or not. Etc...
    let isDivisable = undefined;
    // Number needs to be positive for calculator to work therefore return an error message
    preResult.style.visibility = "visible";
    if (num < 0) {
        isDivisable = "Starting number has to be a positive number!";
        result.backgroundColor = "grey";
        preResult.innerHTML = "";
        preResult.innerHTML = `Input a number in box above`;
        // if nothing is input return an error message
    } else if (typeof num == 'undefined' || num.length < 1) {
        isDivisable = undefined;
        result.backgroundColor = "#ff9900";
        preResult.innerHTML = `Input number in box above`;
        // if end result is an integer return a true message
    } else if (numDiff % num == 0) {
        isDivisable = `A multiple of ${num}`;
        result.backgroundColor = "green";
        // exception of 1 due to 1 not consisting of consecutive numbers just itself (different message)
        if (num == 1) {
            preResult.innerHTML = `${num} divided by ${num} returns`;
        } else {
            preResult.innerHTML = `${num} consecutive numbers added together are`;
        }
        // if end result is not an integer then return a false message
    } else if (numDiff % num != 0) {
        isDivisable = `NOT a multiple of ${num}`;
        result.backgroundColor = "red";
        preResult.innerHTML = `${num} consecutive numbers added together are`;
    }
    document.getElementById('result').innerHTML = isDivisable;
};
// For social media transition
revealGithub = () => {
    const name = document.getElementById("name");
    const gitLogo = document.getElementById("social-media");
    name.style.visibility = "visible";
    name.style.opacity = "1";
    name.style.right = "0";
    gitLogo.style.left = "0";
    gitLogo.style.transform = "rotate(-360deg)";
}
// For responsive info
revealInfo = () => {
    const info = document.getElementById("second-container");
    const gitLogo = document.getElementById("social-media");
    info.style.visibility = "visible";
    gitLogo.style.visibility = "visible";
}
hideInfo = () => {
    const info = document.getElementById("second-container");
    const gitLogo = document.getElementById("social-media");
    info.style.visibility = "hidden";
    gitLogo.style.transition = "none";
    gitLogo.style.visibility = "hidden";
}