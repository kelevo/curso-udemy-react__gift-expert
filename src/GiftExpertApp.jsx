import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'Marvel', 'Rocket' ]);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;

        setCategories( [newCategory, ...categories]  );

    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
          'span' : {
            color: 'white'
          }
        },
      });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1 className="titulo">GiftExpertApp</h1>
            </Grid>
            <Grid item xs={12}>
                <CssTextField  fullWidth label="Escribe lo que quieres y preciona enter" id="custom-css-outlined-input" />
                <AddCategory
                    onNewCategory={ value => onAddCategory( value ) }
                />
            </Grid>
            <Grid item xs={12}>
                {       
                    
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ))
                    
                }
            </Grid>
        </Grid>
    )
}
