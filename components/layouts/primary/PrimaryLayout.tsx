import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import { ReactNode } from 'react'

import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'

export type PrimaryLayoutProps = {
  children: ReactNode
}

function PrimaryLayout({ children }: PrimaryLayoutProps) {
  return (
    <>
      <Head>
        <title>Primary layout example title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box display="flex" maxWidth="1200px" margin="0 auto" justifyContent="space-between">
        <Box as="main" flexGrow="1" backgroundColor="red">
          {children}
        </Box>
        <Box as="aside" flexBasis="400px" flexShrink="0" backgroundColor="green">
          <Sidebar />
        </Box>
      </Box>
    </>
  )
}

export default PrimaryLayout
