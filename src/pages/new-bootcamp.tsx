import React from 'react';

import { Divider, Grid, Typography, TextField, Button } from '@mui/material';

import GeneralLayout from 'layouts/generalLayout';

// interface BootcampList {
//   profesor: string;
//   titulo: string;
//   descripcion: string;
//   completado: boolean;
// }

const NewBootcamp = () => {
  return (
    <>
      <GeneralLayout>
        <Typography variant="h6">Registrar Bootcamp</Typography>
        <Divider />
        <form>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                label="Titulo del Bootcamp"
                name="name"
                variant="outlined"
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Profesor"
                name="name"
                variant="outlined"
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Descripción"
                name="name"
                variant="outlined"
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Button variant="contained" color="primary">
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </GeneralLayout>
    </>
  );
};

export default NewBootcamp;
