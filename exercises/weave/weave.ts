import { Queue } from "./queue";

export function weave(q1: Queue, q2: Queue) {
    const result = new Queue();

    const queueHasItems = (q: Queue) => q.peek() !== undefined;

    while (queueHasItems(q1) || queueHasItems(q2)) {
        if (queueHasItems(q1)) result.add(q1.remove());
        if (queueHasItems(q2)) result.add(q2.remove());
    }

    return result;
}