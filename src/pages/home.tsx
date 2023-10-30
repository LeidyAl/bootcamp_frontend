import React, { useState, useEffect } from 'react';

import { Divider, Grid, Typography } from '@mui/material';

import GeneralLayout from 'layouts/generalLayout';

import BootcampCard from 'components/BootcampCard';

import axios from 'axios';

const Home = () => {
    const [bootcampData, setBootcampData] = useState([]);
    useEffect(() => {
        // Make an API request to fetch bootcamp data
        axios.get("http://localhost:8000/api/bootcamp/")
            .then((response) => {
                setBootcampData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const refetchBootcampData = () => {
        axios.get("http://localhost:8000/api/bootcamp/")
            .then((response) => {
                setBootcampData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    return (
        <>
            <GeneralLayout>
                <Typography variant="h6">Bootcamps registrados</Typography>
                <Divider />
                <Grid container spacing={2} mt={1}>
                    {bootcampData.map(({ completado, id, descripcion, profesor, titulo }) => (
                        <Grid item xs={12} md={4} key={id}>
                            <BootcampCard
                                id={id}
                                descripcion={descripcion}
                                profesor={profesor}
                                titulo={titulo}
                                completado={completado}
                                onDelete={refetchBootcampData}
                            />
                        </Grid>
                    ))}
                </Grid>

            </GeneralLayout>
        </>
    );
};

export default Home;
