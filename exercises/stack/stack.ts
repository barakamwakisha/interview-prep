export class Stack {
    private readonly items: unknown[] = [];

    push(item: unknown) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}