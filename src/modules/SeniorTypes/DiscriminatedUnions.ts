/**
 * @file 可辨识联合
 */

/**
 * 1.具有普通的字符串字面量属性—可辨识的特征。
 * 2.一个类型别名包含了那些类型的联合—联合。
 * 3.此属性上的类型保护。
 */
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

interface Triangle {
    kind: "triangle";
    angle: number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}