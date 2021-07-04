function Duck(name, color) {
    this.name = name;
    this.color = color;
    this.speak = function () {
        console.log(this.name + ' speaks quack quack');
    }
}

var donald = new Duck('Donald', 'yellow');
var daisy = new Duck('Daisy', 'white');

donald.speak();
daisy.speak();


Duck.prototype.height = 1.5;
Duck.prototype.walk = function (distance) {
    console.log( this.name + ' walk for ' + distance + ' meters');
}

console.log(donald.name + ' height is ' + donald.height);

donald.walk(5);
daisy.walk(1);