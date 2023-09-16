export function chunk<TData>(arr: TData[], chunkSize: number) {
    const result: TData[][] = [];

    let currIdx = 0;
    while (currIdx < arr.length) {
        const chunk = arr.slice(currIdx, currIdx + chunkSize);
        result.push(chunk);
        currIdx += chunkSize;
    }

    return result;
}