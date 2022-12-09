const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'heavy boobs'){
        location = '../fourth%20task/fourthTask.html'
    } else {
        alert('Неправильно :( Я верю, что ты справишься')
    }
};