// Interactive Quiz (using Objects to contain my questions and answers).


let totalScore = 0              // the sum of each question if answer correctly

let questionNumber = 1

let questionDataBase = {
    question1: "What is my name?\n1: James\n2: Ryan\n3: Bob\n4: Billy",      // insert string for question 1 and its possible multiple choice answers.
    answer1: 2,                                                                 // this will change for each question of course between 1-4
    question2: "What is my surname?\n1: Smith\n2: Jones\n3: Black\n4: Farrell",
    answer2: 4,
    question3: "What is my age?\n1: 38\n2: 29\n3: 36\n4: 42",
    answer3: 1,
    question4: "What animal orange with black stripes?\n1: Elephant\n2: Sloath\n3: Tiger\n4: Giraffe",
    answer4: 3,
    question5: "What ship did Charles Darwin sale on to get to the Galapagos Islands?\n1: H.M.S Spaniel\n2: H.M.S Retriever\n3: H.M.S Beagle\n4: H.M.S Poodle",
    answer5: 3,
};

let correctConfirmation = ["Congrats you brain box!", "Brilliant!","Keep it up!", "Now your just showing off!", "Go on!","You Hero!","Carry on being awesome!"]

let inCorrectConfirmation = ["Unlucky better luck on the next question!", "Unlucky that was tough one!", "That's unfortunate!", "Rodney You Plonker!", "Nope did you guess?","Come on are you even trying?"]



function randomNiceMsg () {
    let confirmationMsg = (Math.floor(Math.random() * correctConfirmation.length));
    return correctConfirmation[confirmationMsg];
};

function randomWrongMsg () {
    let incorrectMsg = (Math.floor(Math.random() * inCorrectConfirmation.length));
    return inCorrectConfirmation[incorrectMsg];
};


function questionFunctionOne() { // Function that gives a prompt window for input of the answer.
    let userInput = window.prompt(questionDataBase.question1, "Number 1 to 4")
    if (userInput == questionDataBase.answer1) {            // if answer is the same as == the key "answer:" within this object             
    totalScore +=1;                                         // if answered correctly add up by my totalScore variable to keep a running total.
    window.confirm(randomNiceMsg());
    } else if (userInput < 1 || userInput > 4 || userInput === "") { 
    alert("Please try again with a number 1 - 4, you got this smarty pants.")
    questionFunctionOne();
    } else { totalScore +=0;4
    window.confirm(randomWrongMsg());
    }
};

function questionFunctionTwo() { // Function that gives a prompt window for input of the answer.
    let userInput = window.prompt(questionDataBase.question2, "Number 1 to 4")
    if (userInput == questionDataBase.answer2) {            // if answer is the same as == the key "answer:" within this object             
    totalScore +=1;                                         // if answered correctly add up by my totalScore variable to keep a running total.
    window.confirm(randomNiceMsg());
    } else if (userInput < 1 || userInput > 4) { 
    alert("Please try again with a number 1 - 4, you got this smarty pants.")
    questionFunctionTwo();
    } else { totalScore +=0;
    window.confirm(randomWrongMsg());
    }    
};

function questionFunctionThree() { // Function that gives a prompt window for input of the answer.
    let userInput = window.prompt(questionDataBase.question3,"Number 1 to 4")
    if (userInput == questionDataBase.answer3) {            // if answer is the same as == the key "answer:" within this object             
    totalScore +=1;                                         // if answered correctly add up by my totalScore variable to keep a running total.
    window.confirm(randomNiceMsg());
    } else if (userInput < 1 || userInput > 4) { 
    alert("Please try again with a number 1 - 4, you got this smarty pants.")
    questionFunctionThree();
    } else { totalScore +=0;
    window.confirm(randomWrongMsg());
    }
};

function questionFunctionFour() { // Function that gives a prompt window for input of the answer.
    let userInput = window.prompt(questionDataBase.question4, "Number 1 to 4")
    if (userInput == questionDataBase.answer4) {            // if answer is the same as == the key "answer:" within this object             
    totalScore +=1;                                         // if answered correctly add up by my totalScore variable to keep a running total.
    window.confirm(randomNiceMsg());
    } else if (userInput < 1 || userInput > 4) { 
    alert("Please try again with a number 1 - 4, you got this smarty pants.")
    questionFunctionFour();
    } else { totalScore +=0;
    window.confirm(randomWrongMsg());
    }
};

function questionFunctionFive() { // Function that gives a prompt window for input of the answer.
    let userInput = window.prompt(questionDataBase.question5, "Number 1 to 4")
    if (userInput == questionDataBase.answer5) {            // if answer is the same as == the key "answer:" within this object             
    totalScore +=1;                                         // if answered correctly add up by my totalScore variable to keep a running total.
    window.confirm(randomNiceMsg());
    } else if (userInput < 1 || userInput > 4) { 
    alert("Please try again with a number 1 - 4, you got this smarty pants.")
    questionFunctionFive();
} else { totalScore +=0;
    window.confirm(randomWrongMsg());
    }
    window.alert(`Your score is ${totalScore}/5`)
};


//Questions 1 to 5 calling the data from an object 


// class questionDataBaseTwo {
//     constructor (question,answer,nice,unlucky) {
//         this.question = question;
//         this.answer = answer;
//         this.niceMessage = nice;
//         this.unluckyMessage = unlucky;
//     }
//     get randomNiceMsg() {

// }

// };


// new questionSix(),

questionFunctionOne();
console.log(totalScore);
questionFunctionTwo();
console.log(totalScore);
questionFunctionThree();
console.log(totalScore);
questionFunctionFour();
console.log(totalScore);
questionFunctionFive();
console.log(totalScore);


// confirmation window confirming incorrect or sorry thats wrong.
// return a boolean true for a correcct answer


// add up all trues for a final result with 3 possible messages depending on the result
//reset the counter ready for a new game.
