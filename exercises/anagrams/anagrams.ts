function constructCharMap(input: string): Map<string, number> {
    const charMap = new Map<string, number>();
    for (const char of input) {
        const charCount = charMap.get(char);
        charCount ? charMap.set(char, charCount + 1) : charMap.set(char, 1);
    }

    return charMap;
}

export function anagrams(strA: string, strB: string) {
    const formattedStrA = strA.toLowerCase().replace(/\W/g, '');
    const formattedStrB = strB.toLowerCase().replace(/\W/g, '');

    if (formattedStrA.length !== formattedStrB.length) return false;

    const mapA = constructCharMap(formattedStrA);
    const mapB = constructCharMap(formattedStrB);

    for (const [char, count] of mapA) {
        if (mapB.get(char) !== count) {
            return false;
        }
    }

    return true;
}