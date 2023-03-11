import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';

import LoadingScreen from 'components/LoadingScreen';
import ErrorScreen from 'components/ErrorScreen';
import PageHeader from 'components/PageHeader';
import { Movies } from 'types';

const GET_MOVIES = gql`
  query GetMovies {
    movies(options: { sort: { released: DESC } }) {
      title
      released
    }
  }
`;

const Movies: FC = () => {
  const { loading, error, data } = useQuery<{ movies: Movies }>(GET_MOVIES);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error.message} />;

  return (
    <>
      <Head>
        <title>MOVIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={4} height="100vh" overflow="hidden">
        <PageHeader title="Movies" backHref="/" />
        <Stack component={Card}>
          <CardContent sx={{ overflowY: 'auto' }}>
            <List>
              {data?.movies.map(({ title, released }, key) => (
                <Link key={key} href={`movies/${title}`}>
                  <ListItemButton>
                    <ListItemText primary={title} secondary={released} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </CardContent>
        </Stack>
      </Stack>
    </>
  );
};

export default Movies;
