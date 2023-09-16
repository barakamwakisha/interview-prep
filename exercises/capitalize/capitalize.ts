export function capitalize(input: string) {
    return input.split(' ')
        .map(word => `${word[0].toUpperCase()}${word.split('').slice(1).join('')}`)
        .join(' ');
}