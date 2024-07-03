import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe( 'Pruebas en <GiftItem />', () => {

    const title = 'Patrick';
    const url   = 'https://kelevo.com/kelevo.png';

    test( 'Debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test( 'Debe de mostrar la imagen con el URL y ALT indicado', () => {

        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole( 'img' ).src ).toBe( url );
        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    })

    // test( 'Debe de mostrar el titulo en la card', () => {

    //     render( <GifItem title={ title } url={ url } /> );
    //     expect( screen.getByText( title ) ).toBeTruthy();

    // })

});