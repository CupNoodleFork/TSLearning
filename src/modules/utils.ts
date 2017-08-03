import { Person } from './Person';

export function hello (name: string) {
    return `Hello ${name}`;
}

export function hello2Person (person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}