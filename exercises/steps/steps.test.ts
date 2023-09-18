import { steps } from './steps';

describe('steps', () => {

    test('steps called with n = 1', () => {
        const spy = vi.spyOn(console, 'log');
        steps(1);
        expect(spy.mock.calls[0][0]).toEqual('#');
        expect(spy.mock.calls.length).toEqual(1);
    });

    test('steps called with n = 2', () => {
        const spy = vi.spyOn(console, 'log');
        steps(2);
        expect(spy.mock.calls[0][0]).toEqual('# ');
        expect(spy.mock.calls[1][0]).toEqual('##');
        expect(spy.mock.calls.length).toEqual(2);
    });

    test('steps called with n = 3', () => {
        const spy = vi.spyOn(console, 'log');
        steps(3);
        expect(spy.mock.calls[0][0]).toEqual('#  ');
        expect(spy.mock.calls[1][0]).toEqual('## ');
        expect(spy.mock.calls[2][0]).toEqual('###');
        expect(spy.mock.calls.length).toEqual(3);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });
});