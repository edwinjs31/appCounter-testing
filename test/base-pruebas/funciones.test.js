import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en funciones', () => {
    test('getUser should  return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };
        const user = getUser();
        expect(testUser).toStrictEqual(user);
    });

    test('getUsuarioActivo should  return an object', () => {
        const testUser = {
            uid: 'ABC567',
            username: 'Edwin',
        };
        const user = getUsuarioActivo('Edwin');
        expect(testUser).toStrictEqual(user);
    });
});
