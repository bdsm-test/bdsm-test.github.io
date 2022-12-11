const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    answer = answer.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    if ((answer == 'un poco loco') || (answer == 'ay mi amor') || (answer == 'what color is the sky')){
        location = '../seventh%20task/seventhTask.html'
    } else {
        alert('Ну, ты пытался. Скорее всего ты опечатался, так что напиши Диме :)')
    }
};