import { AuthProvider } from '@/lib/auth'
import '@/styles/globals.css'
import theme from '@/styles/theme';
import { ChakraProvider } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <AuthProvider>
       <Component {...pageProps} />
    </AuthProvider>
  </ChakraProvider>
  );
    
}

export default MyApp