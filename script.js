const quizData = [
    {
        question: "үй: куруу",
        answers: ["А) там: салуу", "Б) кирпич: тизүү", "В) дубал: актоо", "Г) фундамент: куюу"],
        correct: 0
    },
    {
        question: "ыйлатуу: сооротуу",
        answers: ["А) эркелетүү: уруша", "Б) капалантуу: кубантуу", "В) тамашалоо: күлдүрүү", "Г) тийишүү: какшыктоо"],
        correct: 1
    },
    {
        question: "кыш: мезгил",
        answers: ["А) июнь: ай", "Б) саат: мүнөт", "В) жыл: убакыт", "Г) кылым: доор"],
        correct: 0
    },
    {
        question: "машина: отургуч",
        answers: ["А) ээр: жылкы", "Б) самолёт: кресло", "В) поезд: купе", "Г) үй: диван"],
        correct: 1
    },
    {
        question: "уктоо: ойгонуу",
        answers: ["А) бузуу: куруу", "Б) отуруу: ойлонуу", "В) жабуу: ачуу", "Г) ыйлоо: уруша"],
        correct: 2
    },
    {
        question: "медаль: тарап",
        answers: ["А) жарыш: финиш", "Б) барак: бет", "В) тоо: чоку", "Г) сөз: маани"],
        correct: 1
    },
    {
        question: "үн: ыр",
        answers: ["А) көз: көлөкө", "Б) кыймыл: бий", "В) боек: сүрөт", "Г) өнөр: талант"],
        correct: 1
    },
    {
        question: "ырастоо: төгүндөө",
        answers: ["А) жумшартуу: майдалоо", "Б) керектөө: барактоо", "В) тилүү: бүтөө", "Г) ачыктоо: жашыруу"],
        correct: 3
    },
    {
        question: "тайманбас: жалтанбас",
        answers: ["А) кадырлуу: кайратуу", "Б) айбатуу: сурдүү", "В) зээндүү: элпек", "Г) сырдуу: аянычтуу"],
        correct: 1
    },
    {
        question: "кайрак: бычак",
        answers: ["А) мык: балка", "Б) дрель: ток", "В) сызгыч: сызык", "Г) учтагыч: карандаш"],
        correct: 3
    },
    {
        question: "устукан: уча",
        answers: ["А) беш бармак: тамак", "Б) мал: жылкы", "В) конок: аксакал", "Г) суусундук: кымыз"],
        correct: 2
    },
    {
        question: "билимдүү: китеп",
        answers: ["А) пайдалуу: жардам", "Б) күчтүү: тарбия", "В) адептүү: жеме", "Г) тажрыйбалуу: иш"],
        correct: 3
    },
    {
        question: "эт: фарш",
        answers: ["А) сүт: айран", "Б) картошка: пюре", "В) алма: варенье", "Г) ун: нан"],
        correct: 1
    },
    {
        question: "аял: боорукер",
        answers: ["А) эне: сулуу", "Б) апа: сүйүктүү", "В) кыз: жароокер", "Г) келин: ийкемдүү"],
        correct: 2
    },
    {
        question: "көмөлдүрүк: өр",
        answers: ["А) тизгин: жакын", "Б) ээр токум: алыс", "В) куюшкан: эңкейиш", "Г) чылбыр: узак"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0; // Переменная для хранения баллов

function loadQuestion() {
    const questionElement = document.getElementById('quiz');
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerHTML = `<div class="question">${currentQuestion.question}</div>`;
    currentQuestion.answers.forEach((answer, index) => {
        questionElement.innerHTML += `<div class="answer" onclick="selectAnswer(${index})">${answer}</div>`;
    });
}

function selectAnswer(index) {
    const currentQuestion = quizData[currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');

    if (index === currentQuestion.correct) {
        answers[index].classList.add('correct');
        score++; // Увеличиваем счет за правильный ответ
    } else {
        answers[index].classList.add('incorrect');
        answers[currentQuestion.correct].classList.add('correct');
    }

    // Переход к следующему вопросу через 1 секунду
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 1000);
}

function showScore() {
    const questionElement = document.getElementById('quiz');
    questionElement.innerHTML = `<h2>Тестти аяктадыңыз!</h2><p>Сиздин балл: ${score} из ${quizData.length}</p>`;
}

loadQuestion();

function markAnswerAsCorrect(answerElement) {
    answerElement.classList.add('correct'); // Добавьте класс для правильного ответа
}
