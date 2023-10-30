import React, { useState } from 'react';

import { Divider, Grid, Typography, TextField, Button } from '@mui/material';

import GeneralLayout from 'layouts/generalLayout';

import axios from 'axios';

const NewBootcamp = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        profesor: '',
        descripcion: '',
        completado: false,
    });

    const handleSubmit = async (data:React.FormEvent<HTMLFormElement>) => {
        data.preventDefault(); // Prevent the default form submission behavior

        try {
            // Make an API request to create a new Bootcamp
            const response = await axios.post("http://localhost:8000/api/bootcamp/", formData);
            console.log('Bootcamp created:', response.data);
            // Redirect the user to the home page
            window.location.href = '/';
        } catch (error) {
            console.error('Error creating Bootcamp:', error);
            // Handle errors or show a notification to the user.
        }
    };

    return (
        <>
            <GeneralLayout>
                <Typography variant="h6">Registrar Bootcamp</Typography>
                <Divider />
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={6}>
                            <TextField
                                label="Titulo del Bootcamp"
                                name="titulo"
                                variant="outlined"
                                size="small"
                                required
                                fullWidth
                                value={formData.titulo}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        titulo: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Profesor"
                                name="profesor"
                                variant="outlined"
                                size="small"
                                required
                                fullWidth
                                value={formData.profesor}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        profesor: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Descripción"
                                name="descripcion"
                                variant="outlined"
                                size="small"
                                required
                                fullWidth
                                value={formData.descripcion}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        descripcion: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                        <Grid container item xs={12} justifyContent="center">
                            <Button type="submit" variant="contained" color="primary">
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
