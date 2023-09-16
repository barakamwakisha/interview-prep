export function reverseInt(num: number) {
    const reversedStr = num.toString().split('').reverse().join('');
    return parseInt(reversedStr) * Math.sign(num);
}