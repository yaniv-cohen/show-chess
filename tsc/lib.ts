export class Person {
  age: number;
  name: string;
  type: string;

  constructor(name: string, age: number) {
    this.type = 'human';
    this.name = name;
    this.age = age;
  }

  hi(): void {
    console.log('Hi ' + this.name);
  }

  sayAge(): void {
    console.log('My age is ' + this.age);
  }
}
