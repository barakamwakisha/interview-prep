export function isPalindrome(str: string) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}