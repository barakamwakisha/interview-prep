export function pyramid(levels: number) {
    const width = (levels * 2) - 1;

    for (let level = 0; level < levels; level++) {
        const padding = levels - (level + 1);
        const startIdx = padding;
        const endIdx = width - padding;

        const step = Array(width)
            .fill(' ', 0, startIdx)
            .fill('#', startIdx, endIdx)
            .fill(' ', endIdx)
            .join('');

        console.log(step);
    }
}