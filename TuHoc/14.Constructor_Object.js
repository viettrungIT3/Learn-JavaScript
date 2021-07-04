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
