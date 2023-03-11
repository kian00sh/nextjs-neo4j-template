import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="Next.js + Neo4j template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List>
        <Link href="movies">
          <ListItemButton>
            <ListItemText primary="Movies" />
          </ListItemButton>
        </Link>
      </List>
    </>
  );
};

export default Home;
