import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en promesas', () => {
    test('getHeroeByIdAsync should return an hero', async () => {
        expect.assertions(1);
        const hero = await getHeroeByIdAsync(1);
        expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeByIdAsync should return an error', async () => {
        expect.assertions(1);
        await expect(getHeroeByIdAsync(33)).rejects.toEqual('No se pudo encontrar el héroe');
    });
});
