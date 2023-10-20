import React from 'react';

import { Divider, Grid, Typography } from '@mui/material';

import GeneralLayout from 'layouts/generalLayout';

import BootcampCard from 'components/BootcampCard';

// interface BootcampList {
//   profesor: string;
//   titulo: string;
//   descripcion: string;
//   completado: boolean;
// }

const Home = () => {
  const BootcampList = [
    {
      id: 0,
      profesor: 'Leidy Álvarez',
      titulo: 'React con Typescript',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore provident enim incidunt, qui quo at recusandae a cupiditate molestiae. Temporibus accusamus amet et nostrum pariatur distinctio possimus ullam aperiam.',
      completado: true,
    },
    {
      id: 1,
      profesor: 'Mateo Narvaez',
      titulo: 'Algo de servidores',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore provident enim incidunt, qui quo at recusandae a cupiditate molestiae. Temporibus accusamus amet et nostrum pariatur distinctio possimus ullam aperiam.',
      completado: false,
    },
    {
      id: 2,
      profesor: 'Daniel Giraldo',
      titulo: 'Cualquier tema porque es un crack',
      descripcion:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo tempore provident enim incidunt, qui quo at recusandae a cupiditate molestiae. Temporibus accusamus amet et nostrum pariatur distinctio possimus ullam aperiam.',
      completado: false,
    },
  ];
  return (
    <>
      <GeneralLayout>
        <Typography variant="h6">Bootcamps registrados</Typography>
        <Divider />
        <Grid container spacing={2} mt={1}>
          {BootcampList.map(
            ({ completado, id, descripcion, profesor, titulo }) => {
              return (
                <Grid item xs={12} md={4}>
                  <BootcampCard
                    descripcion={descripcion}
                    profesor={profesor}
                    titulo={titulo}
                    key={id}
                    completado={completado}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </GeneralLayout>
    </>
  );
};

export default Home;
