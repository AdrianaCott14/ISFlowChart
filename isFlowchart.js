var sStudent = "";
var fUserGpa = "";
var bMoveOn = false;
var sPreReqGrade = "";
var sProfessional = "";
var sRejection = "You might want to apply to a different major my friend";
var iCredits = 0;
var sUserResponse = "";

sStudent = prompt("What is your name?");
sPreReqGrade = prompt("Did you get an A in both IS 201 and IS 303?", "Yes");
fUserGpa = parseFloat(prompt("What is your overall GPA?"));

//top section of flowchart
if (fUserGpa > 3.7 && (sPreReqGrade.charAt(0)).toLocaleUpperCase() === "Y") {
    alert("you're doing great!");
    bMoveOn = true;
}
//middle section of flowchart
else if (fUserGpa > 3.5) {
    alert("it's okay");
    sPreReqGrade = prompt("Did you get a B+ or better in both IS 201 and IS 303?", "Yes")
    if ((sPreReqGrade.charAt(0)).toLocaleUpperCase() === "Y") {
        bMoveOn = true;
    } 
    else {
        alert("Keep going through the middle");
    }
}
//bottom section of flowshart
else if (fUserGpa > 3.2) {
    alert("hang in there dude");
    //bMoveOn = false
}
//all is false
else {
    alert(sRejection);
    //bMoveOn = false;
}

//moving down the line 
console.log(bMoveOn);
if (bMoveOn === true) {
    sProfessional = prompt("Are you professional in your interactions with others?", "Yes");
    if ((sProfessional.charAt(0)).toLocaleUpperCase() === "Y") {
        alert("Keep going!!");
        iCredits = parseInt(prompt("How many credits do you have?"));
        if (iCredits < 30) {
            alert("Please apply next year");
            alert("All done!");
        } 
        else if (iCredits < 60) {
            sUserResponse = prompt("Are those mostly AP and language credits?", "Yes");
            if ((sUserResponse.charAt(0)).toLocaleUpperCase() === "Y") {
                alert("Please apply next year");
                alert("All done!");
            }
        }
    } 
    else {
        alert(sRejection);
    }
}