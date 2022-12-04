import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en imp heroes', () => {
    test('getHeroeById should return a hero by id', () => {
        const hero = getHeroeById(1);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC',
        });
    });

    test('getHeroeById should return undefined by id', () => {
        const hero = getHeroeById(0);
        expect(hero).toEqual(undefined);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner should return a hero by owner', () => {
        const heroes=getHeroesByOwner('Marvel');
        expect(heroes.length).toEqual(2);
    });
});
