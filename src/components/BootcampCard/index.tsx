import React from 'react';

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

interface BootcampCardProps {
  titulo: string;
  profesor: string;
  descripcion: string;
  completado: boolean;
}

const BootcampCard = ({
  descripcion,
  profesor,
  titulo,
  completado,
}: BootcampCardProps) => {
  return (
    <Card sx={{ bgcolor: '#ededed' }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: '#003045' }}>{titulo.charAt(0)}</Avatar>}
        title={titulo}
        subheader={profesor}
        action={
          <IconButton aria-label="settings">
            {completado ? (
              <Tooltip title="Completado" placement="top">
                <CheckCircle sx={{ color: '#73a942' }} />
              </Tooltip>
            ) : (
              <Tooltip title="Sin Completar" placement="top">
                <Cancel sx={{ color: '#ef233c' }} />
              </Tooltip>
            )}
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BootcampCard;
