import { Stack } from "./stack";

export class Queue {
    private readonly pStack = new Stack();
    private readonly sStack = new Stack();

    add(item: unknown) {
        this.pStack.push(item);
    }

    remove() {
        while (this.pStack.peek()) {
            this.sStack.push(this.pStack.pop());
        }

        const item = this.sStack.pop();

        while (this.sStack.peek()) {
            this.pStack.push(this.sStack.pop());
        }

        return item;
    }

    peek() {
        while (this.pStack.peek()) {
            this.sStack.push(this.pStack.pop())
        }

        const item = this.sStack.peek();

        while (this.sStack.peek()) {
            this.pStack.push(this.sStack.pop());
        }

        return item;
    }
}