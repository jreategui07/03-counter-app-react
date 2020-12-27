import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas del archivo: 05-funciones.spec.js', () => {

    it('getUser(), debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(user).toEqual(userTest);
    });

    it('getUsuarioActivo(), debe de retornar un objeto con el nombre enviado', () => {
        const nombre = 'Jonathan';
          const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        };
        const usuarioActivo = getUsuarioActivo(nombre);
        expect(usuarioActivo).toEqual(usuarioActivoTest);
    });

});