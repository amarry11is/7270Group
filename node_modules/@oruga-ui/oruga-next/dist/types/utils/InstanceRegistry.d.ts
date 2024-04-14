export default class InstanceRegistry<T> {
    entries: Array<T>;
    constructor();
    add(entry: T): void;
    remove(entry: T): void;
    walk(callback: (value: T) => boolean | void): void;
}
