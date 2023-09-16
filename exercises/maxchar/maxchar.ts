export function maxChar(str: string) {
    const charMap = new Map<string, number>();

    Array.from(str).forEach(char => {
        const charCount = charMap.get(char);
        charCount ? charMap.set(char, charCount + 1) : charMap.set(char, 1);
    });

    return Array.from(charMap).sort((a, b) => b[1] - a[1])[0][0]
}