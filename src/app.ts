 let itera = {
    value: [1, 2, 3],
    [Symbol.iterator]: function () {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.value.length) {
                    return {
                        value: self.value[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }
    }
}
let c = [...itera];
console.log(c);

interface b1 {
    name: string;
    hhh: number;
}
interface b1 {
    name: string;
    book: string;
    age: string;
}

let b: b1;

class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { 
        constructor(public label: string) {}
    }
}

let a = new Album();
a.label = new Album.AlbumLabel('123');
console.log(a);