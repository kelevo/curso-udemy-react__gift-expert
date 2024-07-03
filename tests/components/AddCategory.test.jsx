import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        // Se crea el sujeto de pruebas
        render( <AddCategory onNewCategory={ () => {} } /> );
        // Referencia a input
        const input = screen.getByRole( 'textbox' );
        // Disparar un evento
        fireEvent.input( input, { target: { value: 'Love' } } );
        // Asercion de lo que esperamos que suceda despues del evento
        expect( input.value ).toBe( 'Love' );
        
        // screen.debug();

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const input = wrapper.find( 'input' );
        const value = 'Pokemon';

        // Simulate input change
        input.simulate( 'change', {
            target: { value }
        });

        console.log('InputValue: ',wrapper.find('input').prop('value') );

        // Simulate submit
        wrapper.find( 'form' ).simulate( 'submit', {
            preventDefault: () => {},
        })

        // setCategories should to be called
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        // Input value should be empty
        expect( input.prop( 'value' ).toBe( '' ) );

    })

})