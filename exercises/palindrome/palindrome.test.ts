import { isPalindrome } from './palindrome';

describe('isPalindrome', () => {
    test('"aba" is a palindrome', () => {
        expect(isPalindrome('aba')).toBeTruthy();
    });

    test('" aba" is not a palindrome', () => {
        expect(isPalindrome(' aba')).toBeFalsy();
    });

    test('"aba " is not a palindrome', () => {
        expect(isPalindrome('aba ')).toBeFalsy();
    });

    test('"greetings" is not a palindrome', () => {
        expect(isPalindrome('greetings')).toBeFalsy();
    });

    test('"1000000001" a palindrome', () => {
        expect(isPalindrome('1000000001')).toBeTruthy();
    });

    test('"Fish hsif" is not a palindrome', () => {
        expect(isPalindrome('Fish hsif')).toBeFalsy();
    });

    test('"pennep" a palindrome', () => {
        expect(isPalindrome('pennep')).toBeTruthy();
    });
})