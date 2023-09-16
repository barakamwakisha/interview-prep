import { maxChar } from './maxchar';

describe('maxChar', () => {
    test('finds the most frequently used char', () => {
        expect(maxChar('a')).toEqual('a');
        expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
    });

    test('works with numbers in the string', () => {
        expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
    });
})