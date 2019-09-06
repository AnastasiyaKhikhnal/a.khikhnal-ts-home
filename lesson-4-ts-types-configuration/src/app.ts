// generics
class MyMap<T>{
  storage: {[key: string]: T} = {};


  setItem(key: string, item: T): void {
    this.storage[key] = item;
  }

  getItem(key: string): T {
    return this.storage[key];
  }

  clear(): void {
    this.storage = {};
  }

  printMap(): void {
    for (let key in this.storage)
      console.log(`${key}: ${this.storage[key]}`);
  }
}

const nummberMap = new MyMap<number>();
nummberMap.setItem('apples', 5);
nummberMap.setItem('bananas', 10);
nummberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "John");
stringMap.setItem('age', "30");
stringMap.printMap();

//interfaces
interface IPerson {
  firstName: string;
  hobbies?: string[];
  lastName?: string;
  greet(lastName: string): void;
}
​
let person: IPerson;
​
function greet(person: IPerson): void {
  console.log("Hello, " + person.firstName);
}
​
function changeName(person: IPerson): void {
  person.firstName = 'Anna';
}
​
function createPerson(firstName: string, hobbies: string[]): IPerson {
  return {
    firstName,
    hobbies,
    greet(lastName: string): void {
      console.log(`Hi, I am ${this.firstName} ${lastName}`);
    }
  }
}
​
person = createPerson('John', ['Cooking', 'Sports']);
​
greet(person);
changeName(person);
greet(person);
person.greet('Anybody');
​
​
class Person implements IPerson {
  firstName: string = '';
  lastName: string = '';
  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}
​
const myPerson = new Person();
console.log(myPerson);
myPerson.firstName = "Doe";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);