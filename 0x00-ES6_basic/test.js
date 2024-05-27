class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log (`Hi! I'm ${this.name}`);
    }
}
const youssef = new Person("Youssef");
youssef.introduceSelf();

