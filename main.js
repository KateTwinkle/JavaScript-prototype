function Animal(name){
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;	
};


function Dog(name) {
    Animal.apply(this, arguments);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return 'Dog'+ ' ' + this.getName() + ' ' + 'is barking';
};


var dog = new Dog ('Aban');
console.log(dog.getName () === 'Aban');// true
console.log(dog.bark () === 'Dog Aban is barking'); // true