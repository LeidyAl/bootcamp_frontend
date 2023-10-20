import React from 'react';

import { Box } from '@mui/material';

import Header from 'components/Header';
import './generalLayout.css';
interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout = ({ children }: GeneralLayoutProps) => {
  return (
    <>
      <Header />

      <Box className="container-children-general-layout">{children}</Box>
    </>
  );
};

export default GeneralLayout;
