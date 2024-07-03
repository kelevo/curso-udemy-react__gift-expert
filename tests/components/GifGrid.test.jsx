import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe( 'Pruebas en <GifGrid />', () => {

    const category = 'Pokemon';

    test('Debe de mostrar el loading inicialmente', () => {

        render( <GifGrid category={ category } /> );
        screen.debug();

    });

})