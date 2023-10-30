import React, { useState } from 'react';

import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';
import { CheckCircle, Cancel, Delete } from '@mui/icons-material'; // Import the Delete icon

import axios from 'axios';

interface BootcampCardProps {
    id: number;
    titulo: string;
    profesor: string;
    descripcion: string;
    completado: boolean;
    onDelete: () => void;
}

const BootcampCard = ({
    id,
    descripcion,
    profesor,
    titulo,
    completado: initialCompletado,
    onDelete,
}: BootcampCardProps) => {
    const [completado, setCompletado] = useState(initialCompletado);

    const toggleCompletado = async () => {
        try {
            // Send an API request to update the completion status
            const response = await axios.put(`http://localhost:8000/api/bootcamp/${id}/`, {
                descripcion: descripcion,
                profesor: profesor,
                titulo: titulo,
                completado: !completado, // Toggle the completion status
            });

            if (response.status === 202) {
                // If the update was successful, update the local state
                setCompletado(!completado);
            } else {
                console.error('Failed to update completion status.');
            }
        } catch (error) {
            console.error('API request error:', error);
        }
    };

    const deleteBootcamp = async () => {
        try {
            // Send an API request to delete the bootcamp
            await axios.delete(`http://localhost:8000/api/bootcamp/${id}/`);
            // Notify the parent component to re-fetch the data
            onDelete();
        } catch (error) {
            console.error('Failed to delete bootcamp:', error);
        }
    };

    return (
        <Card sx={{ bgcolor: '#ededed' }}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: '#003045' }}>{titulo.charAt(0)}</Avatar>}
                title={titulo}
                subheader={profesor}
                action={
                    <div>
                        <IconButton
                            aria-label="toggle-status"
                            onClick={toggleCompletado}
                        >
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
                        <IconButton
                            aria-label="delete"
                            onClick={deleteBootcamp}
                        >
                            <Tooltip title="Eliminar" placement="top">
                                <Delete sx={{ color: '#ff0000' }} />
                            </Tooltip>
                        </IconButton>
                    </div>
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
