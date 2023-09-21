export class Queue {
    private readonly items = [];

    add(item: unknown) {
        this.items.unshift(item);
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    remove() {
        return this.items.pop();
    }
}