export function steps(levels: number) {
    for (let i = 0; i < levels; i++) {
        const step = Array(levels)
            .fill('')
            .map((_, index) => index <= i ? '#' : ' ')
            .join('');
        console.log(step);
    }
}