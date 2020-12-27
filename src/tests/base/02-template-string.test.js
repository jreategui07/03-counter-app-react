import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas de 02-template-string.js', () => {

    test('getSaludo(), debe de retornar: Hola + el nombre indicado ', () => {
        const nombre = 'Jonathan';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
        expect(saludo).toContain(nombre);
    });

    test('getSaludo(), debe de retornar un saludo con el nombre Carlos si no se indica nomnbre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
        expect(saludo).toContain('Carlos'); 
    });

});
