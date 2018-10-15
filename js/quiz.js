$(function(){
    console.log('DOM Loaded');



    $.backstretch('img/citymap.jpg');

    // var quiz = jQuery('#quiz').quiz('2PACX-1vTB-GcgiQQ404pLZ1rR7KQGNYNXbXoDIjY2G06YjHgsuOFuGN_9yfFY5ue86Y99gwnxsRLOS_ijjxwJ/pubhtml'); //your published spreadsheet key or URL goes here
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

    var myQuiz = new ysQuiz(myQuestions);

    $( ".tryAgain" ).click(function() {
        location.reload();
    });
//Close Document Ready Function
});