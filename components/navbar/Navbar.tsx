import { Box, LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/layout'
import NextLink from 'next/link'

const menuItems = [
  {
    name: 'Sobre Artesano',
    route: '/sobre-artesano',
  },
  {
    name: 'Contacto',
    route: '/contacto',
  },
]

function NavBar() {
  return (
    <Box as="nav">
      <List display="flex">
        {menuItems.map(({ name, route }) => (
          <ListItem key={name}>
            <LinkBox>
              <NextLink href={route} passHref>
                <LinkOverlay>{name}</LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default NavBar
