import { hello, hello2Person } from './modules/utils';
import {Person, Student} from './modules/Person';

let myStudent = new Student('h', '2', '3');

class Animal {
    constructor (public name: string) {}
    hello() {
        console.log(this.name);
    }
}

interface hhh {
    name: string
}

class Rhino extends Animal {
    constructor (name: string) {super(name)}
}

class Snake extends Animal {
    constructor (name: string) {super(name)}
    zzz() {
        console.log('zzz');
    }
}

let zoo = [new Rhino('rhino'), new Snake('snake')];