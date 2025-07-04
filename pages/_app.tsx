import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
const theme = createTheme({
  palette: {
    secondary: {
      main: 'rgba(0, 0, 0, 0.6)', // Material-UI gray-500
    },
  },
});
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
