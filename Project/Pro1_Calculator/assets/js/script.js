const numbers = document.getElementsByClassName('btn');
const result = document.getElementById('result');

for (const number of numbers) {
    number.addEventListener('click', function () {
        result.innerHTML += this.value;
    });
}

// di chuyển xuống dưới để sử dụng kèm chức năng History
// function equal() {
//     result.innerHTML = eval(result.innerHTML);
// }

function clean() {
    result.innerHTML = "";
}

function undo() {
    let res = result.innerHTML;
    result.innerHTML = res.substring(0, res.length - 1); // Xoá số cuối cùng 
}

// Dark & Light Mode 
let toggle = document.getElementById('theme-toggle');
toggle.onclick = function () {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark"
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
}

//History
const logHistory = document.getElementById('history');  // get element với id được chỉ định
let history = [];   // khai báo array empty
let expressionData = "" // Khai báo hàm để lưu biểu thức
let resultData = "";    // Khai báo hàm để lưu kết quả tính toán

function equal() {
    let res = result.innerHTML;
    let output = eval(res);    
    expressionData = res;   // Gán biểu thức tính toán vào hàm đã được khai báo
    resultData = output;    // Gán kết quả tính toán vào hàm đã được khai báo

    // push object gppmf có key là expression, result lần lướt với những value được gán ở trên
    history.push({ expression: expressionData, result: resultData });

    // Gọi hàm showHistory
    showHistory();
    result.innerHTML = output;
}

function showHistory() {
    let log = "";   // khai báo hàm log
    for (let key in history) {
        log += history[key].expression + " = " + history[key].result + "<br>" + "<br>";
    }
    logHistory.innerHTML = log;     // Hiển thị ra view với element được gọi
}

// kích để hiển thị History
let indexHistory = document.getElementsByClassName("fa-history");
indexHistory[0].addEventListener('click', function () {
    logHistory.classList.toggle("indexHistory");
})