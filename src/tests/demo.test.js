describe('Pruebas en el archivo demo.test.js', () => {

    test('Los strings deben ser iguales', () => {
        // 1. inicialización
        const mensaje = 'hola...';
    
        // 2. estímulo
        const mensaje2 = `hola...`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });

});

