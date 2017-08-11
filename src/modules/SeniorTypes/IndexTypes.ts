/**
 * @file 索引类型
 * 使用索引类型，
 * 编译器就能够检查使用了动态属性名的代码。 
 * 例如，一个常见的JavaScript模式是从对象中选取属性的子集
 */

//js

/* function pluck(o, names) {
    return names.map(n => o[n]);
} */

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

interface Person {
    name: string;
    age: number;
}

let person: Person = {
    name: 'Jarid',
    age: 35
};

let strings: Array<string | number> = pluck(person, ['name', 'age']); // ok, string[]
let personName: string = getProperty(person, 'name');
let personAge: number = getProperty(person, 'age');


interface StringMap<T> {
    [key: string]: T;
}
let keys: keyof StringMap<number>; // string
let value: StringMap<number>['foo']; // number
