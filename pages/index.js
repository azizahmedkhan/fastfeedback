import Head from 'next/head'
import Image from 'next/image'
import { useAuth } from '@/lib/auth';
import {Heading, Icon, Text, Code, Button, Flex, Box, Link} from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex as="main" direction="column" maxW="700px" margin="0 auto">
      <Head>
        <title>Fast Feedback</title>
      </Head>

        <Heading> Fast Feedback </Heading>
        <Icon name="logo" />
        {auth?.user && (
          <Text> 
          Current User: <Code>{auth?.user?.name}</Code>
          </Text>
        )}
         {auth?.user? (
           <Button onClick={() => auth.signOut()}>Logout</Button>
         ):(
           <Button onClick={() => auth.signInWithGoogle()}>Login</Button>
           )}
    </Flex>
  )
}
