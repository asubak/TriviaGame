//Game is set to 90 seconds.

var count = 90;

//Variables for counts of right, wrong ad unanswered answers to questions.

var rightCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

//Programming the quiz

$(document).ready(function() {
    $("#during").hide();
    $("#end").hide();

//After cliking the Begin Quiz button, hide the #start div and show the #during div
    $("#begin-quiz").on("click", function() {
        $("#start").hide();
        $("#during").show();
//Countdown from 90 seconds starts upon clicking the Begin Quiz button
        startCountdown();
        return;
    });
//count down from 90 to 0, display on screen by writing to html
    function countdown() {
        count--;
        $("#time-number").html(count + " Seconds");
//If Finished button is clicked, automatically reach 0 seconds. 
        $("#finish-button").on("click", function() {
            count = 0;
            return;
        });
//When count gets to 0 naturally, run TimeUp function and hide #during div.
        if (count === -1) {
            timeUp();
            $("#during").hide();
        }
    }

    function startCountdown() {
        setInterval(countdown, 1000);
    }
//Checking answers in the radio buttons for right, wrong and unanswered questions. 
    function timeUp() {
        var Q1 = $('input:radio[name="q1"]:checked').val();
        var Q2 = $('input:radio[name="q2"]:checked').val();
        var Q3 = $('input:radio[name="q3"]:checked').val();
        var Q4 = $('input:radio[name="q4"]:checked').val();
        var Q5 = $('input:radio[name="q5"]:checked').val();
        var Q6 = $('input:radio[name="q6"]:checked').val();
        var Q7 = $('input:radio[name="q7"]:checked').val();
        var Q8 = $('input:radio[name="q8"]:checked').val();
        var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();
//logic for what the quiz should do given a certain answer or input. 
        if (Q1 === undefined) {
            unansweredCount++;
        } else if (Q1 === 'legislative') {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q2 == undefined) {
            unansweredCount++;
        } else if (Q2 == "True") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q3 == undefined) {
            unansweredCount++;
        } else if (Q3 == "Judge/interpret the laws") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q4 == undefined) {
            unansweredCount++;
        } else if (Q4 == "19th") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q5 == undefined) {
            unansweredCount++;
        } else if (Q5 == "Speaker of the House of Representatives") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q6 == undefined) {
            unansweredCount++;
        } else if (Q6 == "Power to/of the people") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q7 == undefined) {
            unansweredCount++;
        } else if (Q7 == "100") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q8 == undefined) {
            unansweredCount++;
        } else if (Q8 == "Judicial review") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q9 == undefined) {
            unansweredCount++;
        } else if (Q9 == "False") {
            rightCount++;
        } else {
            wrongCount++;
        }

        if (Q10 == undefined) {
            unansweredCount++;
        } else if (Q10 == "The electoral college") {
            rightCount++;
        } else {
            wrongCount++;
        }

//target the ids to add to the appropriate score
        $("#correct").html(rightCount);
        $("#wrong").html(wrongCount);
        $("#unanswered").html(unansweredCount);

        $("#end").show();

    }

});