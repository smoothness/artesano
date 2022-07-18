import { Box } from '@chakra-ui/layout'
// import NextImage from 'next/image'

import Navbar from '../navbar/Navbar'
import Login from './Login'

function Header() {
  return (
    <Box as="header" height="80px" paddingX="40px" display="flex" alignItems="center">
      {/* <NextImage src="/artesano-logo.jpg" height={60} width={120} alt="Artesano" /> */}
      <Box marginLeft="40px">
        <Navbar />
      </Box>
      <Box marginLeft="auto">
        <Login />
      </Box>
    </Box>
  )
}

export default Header
