let correctAnswers = 0;
const completedTasks = new Set();

function checkAnswer(levelIndex, taskIndex, answerIndex) {
    const level = levels[levelIndex];
    const task = level.tasks[taskIndex];
    const buttons = document.querySelectorAll(`.task:nth-child(${taskIndex + 2}) .answer-btn`);
    if (task.correct === answerIndex) {
        alert('Правильно!');
        if (!completedTasks.has(taskIndex)) {
            correctAnswers++;
            completedTasks.add(taskIndex);
        }
        buttons[answerIndex].classList.add('correct-answer', 'disabled');
        buttons.forEach((btn, index) => {
            if (index !== answerIndex) btn.classList.add('incorrect-answer');
        });
    } else {
        alert('Неправильно, попробуй еще раз.');
    }

    if (correctAnswers === level.tasks.length) {
        document.getElementById('navigation-buttons').style.display = 'block';
        alert('Вы выполнили все задания!');
    }
}

const levels = [
    {
        title: "Уровень 1: Сложение и вычитание",
        tasks: [
            { question: "5 + 3 = ?", answers: [8, 7, 6], correct: 0 },
            { question: "9 - 4 = ?", answers: [5, 4, 3], correct: 0 },
            { question: "15 - 12 = ?", answers: [3, 2, 1], correct: 0 },
            { question: "20 + 15 = ?", answers: [35, 30, 25], correct: 0 },
            { question: "45 - 20 = ?", answers: [25, 30, 35], correct: 0 },
            { question: "55 + 23 = ?", answers: [78, 77, 79], correct: 0 },
            { question: "100 - 47 = ?", answers: [53, 52, 54], correct: 0 },
            { question: "63 + 17 = ?", answers: [80, 79, 78], correct: 0 },
            { question: "50 - 25 = ?", answers: [25, 24, 23], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 },
            { question: "72 + 18 = ?", answers: [90, 89, 91], correct: 0 }
        ]
    },
    {
        title: "Уровень 2: Иван Царевич",
        tasks: [
            { question: "2 * 3 = ?", answers: [5, 6, 7], correct: 1 },
            { question: "4 * 2 = ?", answers: [6, 8, 9], correct: 1 }
        ]
    },
    {
        title: "Уровень 3: Кащей Бессмертный",
        tasks: [
            { question: "8 / 2 = ?", answers: [4, 3, 5], correct: 0 },
            { question: "9 / 3 = ?", answers: [2, 3, 4], correct: 1 }
        ]
    }
];

function nextChapter() {
    // Логика для перехода к следующей главе
    alert('Переход к следующей главе!');
}
