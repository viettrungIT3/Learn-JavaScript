// var names = ['Leo', 'Tom', 'Brad'];

// names.push('Kevin')     // push to the end of the list

// console.log(names)

// var last = names.pop();     //pop the last value out of the list
// console.log(names);
// console.log(last);

// var first = names.shift();     //shift the first value out of the list
// console.log(names);
// console.log(first);

// names[0] = 'Hello';     // change values at index 1
// console.log(names);


let fruits = ["Apple", "Orange", "Plum"];

/* 
// 1. Tổng số các phần tử trong mảng là: length:
console.log(fruits.length);

// 2. Nối một phần tử vào cuối mảng: push 
fruits.push("Pear");    // Pear - quả lê
console.log(fruits);

// 3. Trích xuất phần tử đầu tiên của mảng và trả về nó: shift
let first = fruits.shift();
console.log(first);
console.log(fruits);

// 4. Thêm phần tử vào đầu mảng: 
fruits.unshift('Apple');
console.log(fruits);

// 5. Trích xuất phần tử cuối cùng của mảng và trả về nó: pop
let last = fruits.pop();
console.log(last);
console.log(fruits);
*/

// 6. Vòng lặp
// 6.1
for (let i = 0; i < fruits.length; i++) {
    let element = fruits[i];
    console.log(element );
}

//6.2: for .. of
for (let fruit of fruits) {
    console.log(fruit);
}

//6.2: for .. in (ít sử dụng)
for (let index in fruits) {
    console.log(fruits[index]);
}

