function populate() {
    if (quiz.isEnded()) {
        //showScores();
    } else {
        // show qustion 
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // display choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            const element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
        }

    }

}

var questions = [
    new Question("What is the capital of the USA?", ["Chicago", "Los Angeles", "Washington DC", "London"], "Washington DC"),
    new Question("What year did World War One begin?", ["1814", "1910", "1935", "1914", ], "1914"),
    new Question("What is the tallest mountain in the world?", ["Mount Kilimanjaro", "Mount Everest", "Mauna Loa", " Mount Lamlam", ], "Mount Everest", ),
    new Question("How many centimetres in a metre?", ["10", "1000", "100", "10000", ], "100", ),
    new Question("What company is also the name of one of the longest rivers in the world?", ["Nile", "Amazon", "Parana", "Niger", ], "Amazon", ),
    new Question("Which language is most spoken in the world", ["Spanish", "Mandarin", "English", "French", ], "English", ),
    new Question("what language is spoken in Ireland", ["English", "Gaeilge", "Irish", "French", ], "English", ),
    new Question("Which English King beheaded two of his wives?", ["Edward the Elder", "George III", "Henry VIII", "Edward VII", ], "Henry VIII", ),
];

var quiz = new Quiz(questions);

populate();