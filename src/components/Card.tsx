
import {Input,
        Box, 
        Center, 
        Button } from '@chakra-ui/react'

interface ICard {
    name:string,
    eventOnClick: () => any //deve retornar o tipo Any para tratar objetos void sem erros


}

export const Card = ({name, eventOnClick}:ICard) => {
    return(
        <Box minHeight='100vh' backgroundColor='#34495e' padding='25px'>
        <Box backgroundColor='#ecf0f1' padding='15px' borderRadius='25px'>
          <Center>
            <h1>Bem-Vindo</h1>
          </Center>
          <Input placeholder="E-mail" type="email" marginTop='2%'/>
          <Input placeholder="Password" type="password" marginTop='2%'/>
          <Center>

          <Button onClick={eventOnClick} colorScheme='teal'width='100%' marginTop='2%'>
            {name}
          </Button>

          </Center>
        </Box>
      </Box>
    )
}