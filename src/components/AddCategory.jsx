import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ( event ) => {

        setInputValue( event.target.value )

    }

    const onSubmit = ( event ) => {

        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue( "" );
    
    }

    return (
        <form onSubmit={ ( event ) => onSubmit( event ) } aria-label="form">
            <input 
                type="text"
                placeholder="Search gifs and press enter"
                value={ inputValue }
                onChange={ ( event ) => onInputChange( event ) }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}