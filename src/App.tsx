import { CssBaseline } from '@mui/material';
import { Global, css } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import queryClient from '@/lib/queries/queryClient';
import DynamicRoutes from './DynamicRoutes';
import theme from './styles/mui/theme';
import './App.css';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <DynamicRoutes />
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
