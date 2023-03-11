import { FC } from 'react';
import { CircularProgress, Stack } from '@mui/material';

const LoadingScreen: FC = () => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Stack>
  );
};

export default LoadingScreen;
