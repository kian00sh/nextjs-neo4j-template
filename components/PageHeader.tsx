import Link from 'next/link';
import { FC } from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import { ArrowBack as BackIcon } from '@mui/icons-material';

interface Props {
  title: string;
  backHref?: string;
}

const PageHeader: FC<Props> = ({ title, backHref }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2} pb={2}>
      {backHref !== undefined && (
        <Link href={backHref}>
          <IconButton>
            <BackIcon />
          </IconButton>
        </Link>
      )}
      <Typography variant="h3">{title}</Typography>
    </Stack>
  );
};

export default PageHeader;
