const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'look what you made me do'){
        location = '../second%20task/secondTask.html'
    } else {
        alert('Неправильно')
    }
};