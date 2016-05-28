var questions=[{
	question: "There are only two lethal spiders in the world",
	choices: ['True', 'False', 'I hate Spiders', 'Other'],
	correctChoice: 1}, {
	question: "Who's show did Wayne Brady take over for one episode?",
	choices: ['True', 'False', 'Chappelle Show', 'Whos line is it Anyway?'],
	correctChoice: 2,
	}, {
	question: "What is the mascot for South Park Elementary?",
	choices: ['cowss', 'turds', 'aliens', 'other'],
	correctChoice: 0,
	}, {
	question: "what is the word?",
	choices: ['Grease', 'a word', 'HIPPOPOTOMONSTROSESQUIPEDALIAN', 'The Bird'],
	correctChoice: 3,
	}

];

var questionCount = 0
var userChoice =[]; //where user input goes
var quiz =$('#quiz'); //populates the page with questions and answers

$(document).ready()
	$("quiz").text(questions)
	console.log(questions)
function answerLog1(){
	if (userChoice === 1){
		answerLog1== true;
		console.log(userChoice)
	}else{
		userChoice == 0,3,2
		answerLog1 ==false;
	}


}





