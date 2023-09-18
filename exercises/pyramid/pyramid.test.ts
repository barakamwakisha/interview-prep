import { pyramid } from './pyramid';
describe('pyramid', () => {
    test('prints a pryamid for n = 2', () => {
        const spy = vi.spyOn(console, 'log');
        pyramid(2);
        expect(spy.mock.calls[0][0]).toEqual(' # ');
        expect(spy.mock.calls[1][0]).toEqual('###');
        expect(spy.mock.calls.length).toEqual(2);
    });

    test('prints a pryamid for n = 3', () => {
        const spy = vi.spyOn(console, 'log');
        pyramid(3);
        expect(spy.mock.calls[0][0]).toEqual('  #  ');
        expect(spy.mock.calls[1][0]).toEqual(' ### ');
        expect(spy.mock.calls[2][0]).toEqual('#####');
        expect(spy.mock.calls.length).toEqual(3);
    });

    test('prints a pryamid for n = 4', () => {
        const spy = vi.spyOn(console, 'log');
        pyramid(4);
        expect(spy.mock.calls[0][0]).toEqual('   #   ');
        expect(spy.mock.calls[1][0]).toEqual('  ###  ');
        expect(spy.mock.calls[2][0]).toEqual(' ##### ');
        expect(spy.mock.calls[3][0]).toEqual('#######');
        expect(spy.mock.calls.length).toEqual(4);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });
});