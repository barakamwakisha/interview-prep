const ITERATION_DIRECTION = {
    right: 0,
    bottom: 1,
    left: 2,
    top: 3
}

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

    let direction = ITERATION_DIRECTION.right;

    while (startRow <= endRow && startColumn <= endColumn) {
        if (direction === ITERATION_DIRECTION.right) {
            // top row
            for (let i = startColumn; i <= endColumn; i++) {
                result[startRow][i] = currElement;
                currElement++;
            }
            startRow++;
        } else if (direction === ITERATION_DIRECTION.bottom) {
            // right column
            for (let i = startRow; i <= endRow; i++) {
                result[i][endColumn] = currElement;
                currElement++;
            }
            endColumn--;
        } else if (direction === ITERATION_DIRECTION.left) {
            // bottom row
            for (let i = endColumn; i >= startColumn; i--) {
                result[endRow][i] = currElement;
                currElement++;
            }
            endRow--;
        } else if (direction === ITERATION_DIRECTION.top) {
            // left column
            for (let i = endRow; i >= startRow; i--) {
                result[i][startColumn] = currElement;
                currElement++
            }
            startColumn++;
        } else {
            throw new Error('Invalid iteration direction');
        }

        // Change direction. Changes sequentially, ranging from 0 to 3
        direction = (direction + 1) % 4;
    }

    return result;
}