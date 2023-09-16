import { reverseString } from './reverse-string';

describe('reverseString', () => {
    test('reverses a string', () => {
        expect(reverseString('abcd')).toEqual('dcba');
    });

    test('reverses a string with spaces', () => {
        expect(reverseString('  abcd')).toEqual('dcba  ');
    });
});