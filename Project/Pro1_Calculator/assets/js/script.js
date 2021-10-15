const numbers = document.getElementsByClassName('btn');
const result = document.getElementById('result');

for (const number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value;
    });
}

function equal() {
    result.innerHTML = eval(result.innerHTML);
}

function clean() {
    result.innerHTML = "";
}

function undo() {
    let res = result.innerHTML;
    result.innerHTML = res.substring(0, res.length - 1); // Xoá số cuối cùng 
}

