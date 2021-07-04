let duck = {
    color: 'yellow',
    name: 'Donald',
    speak: function () {
        console.log('duck speaks quack quack');
    }
}

// console.log(duck);
// console.log('duck color is ' + duck.color);
// console.log('duck name is ' + duck.name);
// duck.speak();

// Loops  vòng lặp
// for (const key in duck) {
//     if (Object.hasOwnProperty.call(duck, key)) {
//         const element = duck[key];
//         console.log(element);
//     }
// }


// https://cafedev.vn/tu-hoc-javascript-doi-tuong-trong-javascript/
let codes = {
    "84": "Việt Nam",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49         // vì những số kia thuộc dạng kiểu nguyên
}


// cách hiển thị đúng thứ tự
let codes2 = {
    "+84": "Việt Nam",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let code in codes2) {
    console.log(+code); // 84, 41, 44, 1        
}


// object in object: đối tượng trong 1 đối tượng
let user = {
    name: "David",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 
