export function vowels(input: string) {
    const matches = input.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}