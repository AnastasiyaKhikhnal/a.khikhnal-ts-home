// Types
let bankAccount: {money: number; deposit(value: number): void} = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};

let myself: {name: string; bankAccount: {money: number; deposit(value: number): void}; hobbies: string[]} = {
  name: 'Alex',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);

//ES6

// Exercise 1. Arrow function
let double = (value: number) => value * 2;
console.log(double(10));


// Exercise 2. Arrow function and template strings
// @ts-ignore
let greet = name => {
  if (name === undefined) {
    name = 'Alex';
  }
  alert(`Hello ${name}`);
};
// @ts-ignore
greet();
greet('Anna');


// Exercise 3. Spread operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));


// Exercise 4. Spread operator
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);


// Exercise 5. Destructuring assignment (array)
const testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3);


// Exercise 6. Destructuring assignment (object)
const scientist = {firstName: 'Will', experience: 12};
let {firstName, experience} = scientist;
console.log(firstName, experience);


// Classes

// Exercise 1
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log('Toooooot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);


// Exercise 2
class Figure {
  width: number = 0;
  length: number = 0;

  constructor() {}

  set updateWidth(value: number) {
    this.width = value;
  }

  set updateLength(value: number) {
    this.length = value;
  }

  public calcSize(): number {
    return this.width * this.length;
  }
}

let rectangle = new Figure();
rectangle.updateWidth = 50;
rectangle.updateLength = 40;
console.log(rectangle.calcSize());


// Exercise 3
class Person {
 firstName: string = "";

  set updateProperty(value: string) {
    if (value.length > 3) {
      this.firstName = value;
    } else this.firstName = "";
  }

  get property() {
      return this.firstName;
  }
}

let person: Person;
person = new Person();
console.log(person.firstName);
person.firstName = "John";
console.log(person.firstName);
person.firstName = "Doe";
console.log(person.firstName);
