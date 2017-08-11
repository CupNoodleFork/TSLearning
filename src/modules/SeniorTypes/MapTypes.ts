interface Men {
    name: string;
    age: number;
    book?: string;
}

//ts 已经存在的type
/* type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
} */

type Nullable<T> = { [P in keyof T]: T[P] | null }
//Readonly Partial Pick会带上原有类型的修饰符
type ReadonlyPerson = Readonly<Men>;
type PersonPartial = Partial<Men>;
type PickFromPerson = Pick<Men, 'name' | 'age'>; //pick会带上原有类型的修饰符

let pickPerson: PickFromPerson = {
    name: '123',
    age: 123
};
//原有类型的修饰符 read-only
// pickPerson.name = '123';
pickPerson.age = 123;


let readonlyPerson: ReadonlyPerson = {
    name: '123',
    age: 12
};
//read-only
// readonlyPerson.name = '123';
// readonlyPerson.age = 123;

let personPartical: PersonPartial = {
    name: '123'
};
//原有类型的修饰符 read-only
// personPartical.name = '123';
// personPartical.age = 123;

//例子： 包装类型
type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}
function proxify<T>(o: T): Proxify<T> {
    var result = {} as Proxify<T>;
    for (let key in o) {
        result[key] = {
            get() {
                return o[key];
            },
            set(value) {
                o[key] = value;
            }
        }
    }

    return result;
}
class Props {
    constructor(public name: string, public age: string) {
    }
}
let props = new Props('123', '23');
let proxyProps = proxify(props);

