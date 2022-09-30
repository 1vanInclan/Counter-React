import { getImagen } from "../../src/base-pruebas/11-async-await"



describe('Pruebas en 11-async-await', () => { 
    test('getImage debe retornar un error de la si no tenemos un paikey', async() => { 

        const resp = await getImagen();
        console.log(resp)
        expect( resp ).toBe('No se encontro la imagen')
        
     })
 })