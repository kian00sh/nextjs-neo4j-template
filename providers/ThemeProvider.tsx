import {
  createTheme,
  CssBaseline,
  ThemeProvider as Provider,
} from '@mui/material';
import { FC, ReactNode } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => (
  <Provider theme={theme}>
    <CssBaseline />
    {children}
  </Provider>
);

export default ThemeProvider;
