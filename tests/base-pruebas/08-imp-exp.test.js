import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('prueba en 08-imp-exp', () => { 


    test('getHeroeById debe de retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })


    });

    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();


    });

    test('getHeroeById debe de retornar heroes de dc', () => { 
        
        const owner = 'DC';
        const heros = getHeroesByOwner(owner)

        console.log(heroes)

        expect( heros.length ).toBe( 3 );
        expect( heros ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))



    });

    test('getHeroeById debe de retornar undefined si no existe el ID', () => { 
        
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner)

        // console.log(heroes)

        expect( heros.length ).toBe( 2 );

        // expect( heroes ).toEqual([
        //     { id: 2, name: 'Spiderman', owner: 'Marvel' },      
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
        //     ]);
        
        expect( heros ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))


    });

 })