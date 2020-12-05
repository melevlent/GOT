const menuBtn = document.querySelector('.navDropdown');
const showDropdown = document.querySelector('.dropdownContent');
const startBtn = document.querySelector('.start-btn');
const nextBtn = document.querySelector('.next-btn');
const questionDisplay = document.querySelector('.questionDisplay');
const answerBtns = document.querySelector('.answerContainer');
const scoreDisplay = document.querySelector('.score');

// show menu dropdown
menuBtn.addEventListener('click', () => {
	showDropdown.classList.toggle('show');
});

// quiz
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);

function startGame() {
	startBtn.classList.add('hide');
	nextBtn.classList.remove('hide');
	shuffledQuestions = questions.sort(() => 0.5 - Math.random());
	console.log(shuffledQuestions);
	currentQuestionIndex = 0;
	questionDisplay.classList.remove('hide');
	score = 0;
	scoreDisplay.innerText = score;
	showQuestion();
}

function showQuestion() {
	questionDisplay.innerText = questions[currentQuestionIndex].question;
	let answers = questions[currentQuestionIndex].answers;
	console.log(answers);
	answers.forEach(function(answer) {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		button.dataset.correct = answer.correct;
		button.addEventListener('click', selectAnswer);
		answerBtns.appendChild(button);
	});
}

function nextQuestion() {
	reset();
	currentQuestionIndex++;
	console.log(currentQuestionIndex);
	if (currentQuestionIndex >= questions.length) {
		questionDisplay.innerText = 'Your Score Was ' + score;
		nextBtn.classList.add('hide');
		startBtn.innerText = 'Restart';
		startBtn.classList.remove('hide');
	} else {
		showQuestion();
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const correct = selectedBtn.dataset.correct;
	console.log(correct);
	if (correct === 'true') {
		selectedBtn.classList.add('correct');
		scoreDisplay.innerText = score += 10;
		console.log(score);
	} else {
		selectedBtn.classList.add('wrong');
		scoreDisplay.innerText = score -= 5;
		console.log(score);
	}
}

function reset() {
	while (answerBtns.firstChild) {
		answerBtns.removeChild(answerBtns.firstChild);
	}
}
