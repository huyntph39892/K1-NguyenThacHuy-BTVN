function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("John Doe", 30);

person1.sayHello();

Person.sayHello();
