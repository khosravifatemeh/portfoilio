import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { DesktopMenu, MobileBottomNav } from '../header';
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {isMobile ? <MobileBottomNav /> : <DesktopMenu />}
      <Box
        sx={{
          backgroundColor: 'rgba(128,128,128,0.3)',
          padding: isMobile ? 0 : 2,
          marginBottom: isMobile ? 6 : 0,
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md" sx={{ padding: '0 !important' }}>
          <Box>
            <main>{children}</main>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Layout;
