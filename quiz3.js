
function check0(){
    var score = 0;
    if (document.forms["quiz1"]["question1"].value == "Mark Hamill") {
        score++;}
    if (document.forms["quiz1"]["question2"].value == "New Orleans") {
        score++;}
    if (document.getElementById("numb").value == 1700) {
        score++;
    }
    if (document.forms["quiz1"]["question4"].value == "Gunther") {
        score++;}
    if (document.forms["quiz1"]["question5"].value == "People's Republic of Benin") {
        score++;}
    document.getElementById("demo").innerHTML = score+"/5";
    alert("You finished the Sins of the Father quiz, you should try the other quizzes!")
}

function check1(){
    var score = 0;
    if (document.forms["quiz2"]["question_2.1"].value == "Kay E. Kuter") {
        score++;}
    if (document.forms["quiz2"]["question_2.2"].value == "Smith") {
        score++;}
    if (document.getElementById("numb2").value == 1738) {
        score++;
    }
    if (document.forms["quiz2"]["question_2.3"].value == 'Neuschwanstein') {
        score++;
    }
    if (document.forms["quiz2"]["question_2.4"].value == "Garr von Zell") {
        score++;}

    document.getElementById("demo2").innerHTML = score+"/5";
    alert("You finished quiz the Beat Within quiz, you should try the other quizzes!")
}

function check2(){
    var score = 0;
    if (document.forms["quiz3"]["question_3.1"].value == "Illuminati") {
        score++;}
    if (document.forms["quiz3"]["question_3.2"].value == "Albany") {
        score++;}
    if (document.forms["quiz3"]["question_3.3"].value == "Chateau") {
        score++;}
    if (document.forms["quiz3"]["question_3.4"].value == "Yes") {
        score++;}
    document.getElementById("demo3").innerHTML = score+"/5";
    alert("You finished quiz the Blood of the Sacred, Blood of the Damned, you should try the other quizzes!")
}
	
	
	