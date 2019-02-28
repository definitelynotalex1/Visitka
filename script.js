var quizObj = [
    { 
        "question": "Каким языком является JavaScript?",
        "choice": ["Регистрозависимым", "Лингвозависимым", "Транскрипционным", "Машинным"],
        "correct": ["Регистрозависимым"]
   },
   { 
        "question": "Какая фирма разработала язык JavaScript?",
        "choice": ["Netscape", "Borland", "Adobe", "Sun Microsystem"], 
        "correct": ["Netscape"]
   },
    { 
        "question": "Каково основное назначение языка JavaScript?",
        "choice": ["Создание интерактивных HTML документов", "Автоматизация систем вычисления", "Выполнение операций над БД","Написание Нейросетей глубокого обучения"], 
        "correct": ["Создание интерактивных HTML документов"]
   },
    { 
        "question": "Что такое литерал?",
        "choice": ["Простейшие данные, с которыми может работать программа", "Лингво-арифметическая операция", "Наименьшая единица памяти", "Литературная единица"], 
        "correct": ["Простейшие данные, с которыми может работать программа"]
   },
    { 
        "question": "Какие элементы относятся к логическим?",
        "choice": ["true | false", "yes | no", "1 | 0", "нет правильного ответа"], 
        "correct": ["true | false"]
   },
    { 
        "question": "Как задаются переменны в JavaScript?",
        "choice": ["var имя = значение", "string имя = значение", "PerfVar имя = new имя(значение)","op имя = значение"],  
        "correct": ["var имя = значение"]
   },
    { 
        "question": "Как записывается логическое ИЛИ?",
        "choice": ["||", "&&", "$$", "OR"],  
        "correct": ["||"]
   },
    { 
        "question": "Что из нижеперечисленного является правильной формой записи ветвления?",
        "choice": ["if(x==y)", "get(x==y)", "give(x=y)","check(x=y)"],  
        "correct": ["if(x==y)"]
   },
    { 
        "question": "Как должны записываться имена переменных?",
        "choice": ["Латиницей", "Кириллицей", "Символьно","Плотонически Условно"],  
        "correct": ["Латиницей"]
   },
    { 
        "question": "Чем обрабатываются Java скрипты?",
        "choice": ["Браузером", "Операционной системой", "Обработчиком событий", "Асинхронно отдельно исполняемым файлом"], 
        "correct": ["Браузером"]
   },

]; // Вопрос, ответы и правильный ответ, трехмерный массив, все просто

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// Функция перемешивания
var iter = 0; // Итератор
var diap = [0,1,2,3,4,5,6,7,8,9]; // Диапозон количества вопросов
var shuffleQ = shuffle(diap); // Перемешиваем вопросы

function setEverything() {
    if (iter < 10) { // Ограничиваем количество вопросов
    var shuffled = shuffle(quizObj[shuffleQ[iter]].choice);
    document.getElementById('question').innerHTML = quizObj[shuffleQ[iter]].question; // Перемешиваем варианты вопросов и задаем их в HTML
    document.getElementById('answA').innerHTML = shuffled[0];
    document.getElementById('answB').innerHTML = shuffled[1];
    document.getElementById('answC').innerHTML = shuffled[2];
    document.getElementById('answD').innerHTML = shuffled[3];
    document.getElementById('numqfield').innerHTML = iter;
     }
    else { // Выскакивает при достижении лимита
    document.getElementById('question').innerHTML = "Получить результат";
    document.getElementById('answA').innerHTML = "";
    document.getElementById('answB').innerHTML = "";
    document.getElementById('answC').innerHTML = "";
    document.getElementById('igotit').innerHTML = "Ок";
    document.getElementById('answD').innerHTML = "";
    document.getElementById('numq').innerHTML = "";
    document.getElementById('score').innerHTML = "";
    }
} // Можно сказать главная функция

var score=0; // Очки

function checkansw(clicked_id) { // Проверка вопроса на правильность
    if (document.getElementById(clicked_id).innerHTML == quizObj[shuffleQ[iter]].correct)  {iter++; score++; setEverything();} else {iter++; if (score>0) score--; setEverything();}
    checkscore();
}

var mark = 2;

function checkscore() { // Проверка и указание цвета количества очков
    if (score < 4){ // Двойка
    mark = 2;
    document.getElementById('scorefield').innerHTML = '<div class="bad">'+score+'</div>';}
    else if (score < 6){ // Тройка
    mark = 3;
    document.getElementById('scorefield').innerHTML = '<div class="normal">'+score+'</div>';}
    else if (score < 8){ // Четверка
    mark = 4;
    document.getElementById('scorefield').innerHTML = '<div class="good">'+score+'</div>';}
    else if (score < 11){ // Пятерка
    mark = 5;
    document.getElementById('scorefield').innerHTML = '<div class="perfect">'+score+'</div>';}
}

function setMark() {
    parent.document.getElementById('swap').classList.toggle('animate');
    parent.document.getElementById('swap').src = "score.html";
    setTimeout(function(){
    parent.document.getElementById('swap').classList.toggle('animate');
    }, 3100);
    document.cookie = mark;
}