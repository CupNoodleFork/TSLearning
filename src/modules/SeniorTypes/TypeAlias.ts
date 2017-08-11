type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}

getName(() => '123');
getName('123');

//泛型 type

type Container<T> = { value: T };

//引用自身的type
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

//然而，类型别名不能出现在声明右侧的任何地方
// type Yikes = Array<Yikes>; // error

//链表定义
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;