import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('test template-string', () => {
    test('should  retur name "Hola Edwin" ', () => {
        const message = getSaludo('Edwin');
        expect(message).toBe('Hola Edwin');
    });
});
