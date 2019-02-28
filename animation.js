var isTesting = false;
function toggle(){
    if (isTesting === false) {
    document.getElementById('button').innerHTML = "<h2>Назад</h2>";
    document.getElementById('swap').classList.toggle('animate');
    document.getElementById('swap').src = "test.html";
    isTesting = true;
    }
    else {
    document.getElementById('button').innerHTML = "<h2>Начать тест</h2>";
    document.getElementById('swap').classList.toggle('animate');
    document.getElementById('swap').src = "info.html";
    isTesting = false;
    }
    setTimeout(function(){
    document.getElementById('swap').classList.toggle('animate');
    }, 3100);
}
