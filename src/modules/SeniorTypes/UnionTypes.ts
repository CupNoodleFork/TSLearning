class Bird {
    fly() {};
}
class Fish {
    swim() {};
}

//函数式类型保护
function isFish (animal: Fish | Bird): animal is Fish  {
    return (<Fish>animal).swim !== undefined;
}

function move(animal: Fish | Bird) {
    //函数式类型保护    
    if (isFish(animal)) {
        animal.swim();
    }

    //强制类型断言
    (<Fish>animal).swim();

    //instanceof 类型保护
    if (animal instanceof Fish) {
        animal.swim();
    }
}

function number(num: string | number) {
    //typeof 类型保护 
    //typeof v === "typename"和typeof v !== "typename"，"typename"必须是"number"，"string"，"boolean"或"symbol"
    if (typeof num === 'string') {
        num.length;
    }
}


