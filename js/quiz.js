//Quiz JS File
$(function(){
    console.log('DOM Loaded');


    //background image
    $.backstretch('img/citymap.jpg');

    //quiz question to be passed to quiz
    var myQuestions = [{
        question: "True or False: You don't need to consider liveability when designing a sustainable city.",
        answers: ["True"],
        correct: "False"
    }, {
        question: "What is the 2050 estimate for the world's population?",
        answers: ["3 billion",  "15 billion", "7.9 billion"],
        correct: "9.7 billion"
    }, {
        question: "What does eyes on the street mean?",
        answers: ["Painting pictures of eyes on the street", "Actual eyeballs on the street"],
        correct: "Human interest in what is happening in their community"
    }, {
        question: "True or False: We must get rid of all cars.",
        answers: ["True"],
        correct: "False"
    }];

    //initialization of quiz
    var myQuiz = new ysQuiz(myQuestions);

    //addiiton of try again button to restart quiz
    $( ".tryAgain" ).click(function() {
        location.reload();
    });

//Close Document Ready Function
});