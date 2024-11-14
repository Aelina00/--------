const quizData = [
    {
        question: "Суу: Агуу",
        answers: ["А) от: күйүү", "Б) шамал: сокуу", "В) жарык: чачуу", "Г) үн: чыгуу"],
        correct: 3
    },
    {
        question: "Жоготуу: Табуу",
        answers: ["А) унутуу: эстөө", "Б) жек көрүү: сүйүү", "В) капалуу: кубануу", "Г) ыйлоо: күлүү"],
        correct: 0
    },
    {
        question: "Жаз: Мезгил",
        answers: ["А) күн: саат", "Б) ай: жыл", "В) кыш: температура", "Г) күз: өсүмдүк"],
        correct: 1
    },
    {
        question: "Китеп: Окуу",
        answers: ["А) сүрөт: көрүү", "Б) музыка: угуу", "В) фильм: көрүү", "Г) оюн: ойноо"],
        correct: 0
    },
    {
        question: "Жазуу: Окуу",
        answers: ["А) ырдоо: угуу", "Б) сүйлөө: угуу", "В) тийишүү: жооштук", "Г) жаза берүү: окуу"],
        correct: 0
    },
    {
        question: "Медаль: Жеңиш",
        answers: ["А) сыйлык: иш", "Б) көйгөй: чечим", "В) диплом: билим", "Г) белек: достук"],
        correct: 2
    },
    {
        question: "Үн: Музыка",
        answers: ["А) боек: сүрөт", "Б) сөз: сүйлөшүү", "В) жомок: окуу", "Г) ыр: бий"],
        correct: 0
    },
    {
        question: "Текшерүү: Тастыктоо",
        answers: ["А) жогорулатуу: төмөндөтүү", "Б) ченөө: эсептөө", "В) көрсөтүү: жашыруу", "Г) ачыктоо: жашыруу"],
        correct: 3
    },
    {
        question: "Акылдуу: Билимдүү",
        answers: ["А) күчтүү: чебер", "Б) ий кемдүү: бекем", "В) таза: кир", "Г) ыймандуу: адептүү"],
        correct: 0
    },
    {
        question: "Курал: Иштөө",
        answers: ["А) машина: жүрүү", "Б) телефон: сүйлөшүү", "В) компьютер: программалоо", "Г) китеп: окуу"],
        correct: 0
    },
    {
        question: "Унаа: Жол",
        answers: ["А) суу: көл", "Б) үй: көчө", "В) учак: аэропорт", "Г) поезд: станция"],
        correct: 2
    },
    {
        question: "Билим: Билим берүү",
        answers: ["А) сүйүү: көңүл буруу", "Б) күч: аракет", "В) акча: инвестиция", "Г) убакыт: пайдалуу"],
        correct: 0
    },
    {
        question: "Мөмө: Жемиш",
        answers: ["А) сүт: каймак", "Б) картошка: пюре", "В) жүгөрү: попкорн", "Г) жомок: китеп"],
        correct: 0
    },
    {
        question: "Аял: Эне",
        answers: ["А) кыз: боорукер", "Б) апа: сулуу", "В) келин: акылдуу", "Г) эне: сүйүктүү"],
        correct: 3
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
