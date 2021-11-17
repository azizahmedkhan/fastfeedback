import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from '../lib/auth';
import {Heading, Icon, Text, Code, Button, Flex, Box, Link} from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();
  return (
    <div className={'contianer'}>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main className={styles.main}>
        <Heading> Fast Feedback </Heading>
        <Icon name="logo" />
        <Text> 
        Current Use: <Code>{auth?.user?.displayName}</Code>
        </Text>
        
        <div>
         {auth?.user ? (
           <Button onClick={() => auth.signOut()}>Logout</Button>
         ):(
           <Button onClick={() => auth.signInWithGoogle()}>Login</Button>
           )}
        </div>
      </main>
    </div>
  )
}
