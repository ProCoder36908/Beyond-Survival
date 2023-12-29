function playIntroduction() {
    let audio1 = new Audio("../sounds/airplane1.mp3");
    let audio2 = new Audio("../sounds/crash1.mp3");

    audio1.play();
    audio1.volume = 0.5;
    setTimeout(function() {
        audio2.play();
        audio2.volume = 0.5;
    }, 3000);
};

window.onload = function() {
    playIntroduction();
    showText();
};

// var introductionTextListNumber = 0;
// function showText() {
//     let introductionTextList = ["You are Taking off a Plane", "A few Moments Later...", "A Massive Eagle Strikes the Engine..", "The Plane Malfuctions and Crashes"];
//     document.getElementById("introductionText").innerText = introductionTextList[introductionTextListNumber];
//     introductionTextListNumber = introductionTextListNumber + 1;
//     while (introductionTextListNumber < introductionTextList.length) {
//         showText();
//     };
// };
function showText() {
    let introductionTextList = ["You are Taking off in a Plane", "A few Moments Later...", "A Massive Eagle Strikes the Engine..", "The Plane Malfunctions and Crashes"];
    var introductionTextListNumber = 0;
    var introductionTextElement = document.getElementById("introductionText");

    function displayNextText() {
        introductionText.innerText = introductionTextList[introductionTextListNumber];
        introductionTextListNumber++;

        if (introductionTextListNumber < introductionTextList.length) {
            // Call the function again after a delay (e.g., 1000 milliseconds)
            setTimeout(displayNextText, 1000);
        }
    }

    // Start the process
    displayNextText();
}


showText()