import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

interface Props {
  message: string;
}

const ErrorScreen: FC<Props> = ({ message }) => {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Typography color="error.main">Error! {message}</Typography>
    </Stack>
  );
};

export default ErrorScreen;
