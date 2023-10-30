import { useState } from 'react';

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Typography,
} from '@mui/material';
import { Menu, ExitToApp } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import './header.css';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const redirect = useNavigate();

  const handleOpenDrawer = () => setOpenDrawer(true);

  const itemsAdmin = [
    {
      title: 'Inicio',
      to: '/',
    },
    {
      title: 'Registrar Bootcamp',
      to: '/new-bootcamp',
    },
  ];

  return (
    <>
      <Box className="container-header">
        <IconButton onClick={handleOpenDrawer}>
          <Menu sx={{ color: '#FFFFFF' }} />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiPaper-root': {
            color: '#FFF',
            background: '#003045',
          },
        }}
      >
        <Box className="container-drawer">
          <Box>
            <Box className="container-avatar-drawer">
              <Avatar
                sx={{
                  bgcolor: '#040f17',
                  height: 60,
                  width: 60,
                  fontSize: 24,
                  textTransform: 'uppercase',
                }}
              >
                U
              </Avatar>
              <Typography variant="subtitle1">Nombre del usuario</Typography>
              <Typography variant="caption">@username</Typography>
            </Box>
            <Divider sx={{ borderColor: '#c5e3f5' }} />
            <List>
              {itemsAdmin.map(({ title, to }) => {
                return (
                  <div key={to}>
                    <ListItemButton onClick={() => redirect(to)}>
                      {title}
                    </ListItemButton>
                    <Divider sx={{ borderColor: '#c5e3f5' }} />
                  </div>
                );
              })}
            </List>
          </Box>
          <Link className="logout-button" sx={{ color: '#FFF' }}>
            <ExitToApp /> Cerrar Sesión
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
