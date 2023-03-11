import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import {
  Book as TaglineIcon,
  Event as ReleasedIcon,
} from '@mui/icons-material';

import LoadingScreen from 'components/LoadingScreen';
import ErrorScreen from 'components/ErrorScreen';
import PageHeader from 'components/PageHeader';
import type { Movies } from 'types';

const GET_MOVIE = gql`
  query GetMovie($movieTitle: String) {
    movies(where: { title: $movieTitle }) {
      title
      tagline
      released
      actors {
        name
      }
      directors {
        name
      }
    }
  }
`;

const Movie: FC = () => {
  const { query } = useRouter();
  const { loading, error, data } = useQuery<{ movies: Movies }>(GET_MOVIE, {
    variables: { movieTitle: query.title },
  });

  if (typeof query.title !== 'string') return null;
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error.message} />;

  return (
    <>
      <Head>
        <title>{query.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={4}>
        <PageHeader title={query.title} backHref="/movies" />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 1 }}>
              <CardHeader title="Information" />
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <TaglineIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={data?.movies[0].tagline}
                      secondary="Tagline"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ReleasedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={data?.movies[0].released}
                      secondary="Released"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 1 }}>
              <CardHeader title="Actors" />
              <CardContent>
                <List>
                  {data?.movies[0].actors?.map(({ name }, key) => (
                    <ListItem key={key}>
                      <ListItemText primary={name} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 1 }}>
              <CardHeader title="Directors" />
              <CardContent>
                <List>
                  {data?.movies[0].directors?.map(({ name }, key) => (
                    <ListItem key={key}>
                      <ListItemText primary={name} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default Movie;
