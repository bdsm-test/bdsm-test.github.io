const button = document.getElementById('send');
button.onclick = function () {
    let answer = document.getElementById('answer').value.toLowerCase();
    if (answer === 'савичев'){
        location='../final/final.html'
    } else if (answer == 'савченко') {
        alert('👿')
    } else {
        alert('как.................')
    }
};