import { vowels } from './vowels';

describe('vowels', () => {
    test('returns the number of vowels used', () => {
        expect(vowels('aeiou')).toEqual(5);
    });

    test('returns the number of vowels used when they are capitalized', () => {
        expect(vowels('AEIOU')).toEqual(5);
    });

    test('returns the number of vowels used', () => {
        expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
    });

    test('returns the number of vowels used', () => {
        expect(vowels('bcdfghjkl')).toEqual(0);
    });
})