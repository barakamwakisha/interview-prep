export function matrix(width: number) {
    const result: number[][] = [];

    // Populate result with empty arrays
    for (let i = 0; i < width; i++) {
        result.push([]);
    }

    let currElement = 1;
    let startRow = 0
    let endRow = width - 1;
    let startColumn = 0;
    let endColumn = width - 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = currElement;
            currElement++;
        }
        startRow++;

        // right column
        for (let i = startRow; i <= endRow; i++) {
            result[i][endColumn] = currElement;
            currElement++;
        }
        endColumn--;

        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = currElement;
            currElement++;
        }
        endRow--;

        // left column
        for (let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = currElement;
            currElement++
        }
        startColumn++;
    }

    return result;
}