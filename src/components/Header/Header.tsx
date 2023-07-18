import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../AppContext'
import { changeLocalStorage } from '../../services/Storage'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn, title } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)    
    navigate('/')
  }
  
  return(
    <Flex backgroundColor='teal' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank - {title}</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              backgroundColor='teal.200'
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}