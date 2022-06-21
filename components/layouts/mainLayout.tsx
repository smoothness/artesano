import { ReactNode } from 'react'
import { Box } from '@chakra-ui/layout'

type MainLayoutProps = {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box>
      Layout
      {children}
    </Box>
  )
}

export default MainLayout
