// //1. Khai báo hàm
// function showMessage() {
//     console.log('Hello everyone!');
// }
// showMessage();

//Biến cục bộ trong hàm: Là một biến được khai báo bên trong một hàm chỉ hiển thị bên trong hàm đó.
//Biến ngoài hàm: Là một hàm cũng có thể truy cập vào một biến ở ngoài hàm đó

// let userName = 'Trung';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

//Biến toàn cục: Các biến được khai báo bên ngoài bất kỳ hàm nào, chẳng hạn như userName trong code ở trên, được gọi là biến toàn cục .

// // 2.Tham số(Parameters)
// function showMessage(from, text) { // arguments: from, text
//     console.log(from + ': ' + text);
// }

// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//3. return
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);

// 4.Đặt tên cho hàm
/*
"get…" – trả về một giá trị,
"calc…" – tính toán một cái gì đó,
"create…" – tạo ra một cái gì đó,
"check…" – kiểm tra một cái gì đó và trả lại một boolean, vv
*/

// 5. Callback
function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/*
When you pass a function as an argument, remember not to use parenthesis "()".

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
*/