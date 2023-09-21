export class Queue {
    private readonly items = [];

    add(item: unknown) {
        this.items.unshift(item);
    }

    remove() {
        return this.items.pop();
    }
}