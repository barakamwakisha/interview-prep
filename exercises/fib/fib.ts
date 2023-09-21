const cache = new Map<number, number>();

export function fib(position: number): number {
    if (position < 2) return position;
    if (cache.has(position)) return cache.get(position);

    const result = fib(position - 1) + fib(position - 2);
    cache.set(position, result);

    return result;
}