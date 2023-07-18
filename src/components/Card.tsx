import { Box } from '@chakra-ui/react'

export const Card = ({ children }: any) => {
  return (
      <Box backgroundColor='#ecf0f1' padding='15px' borderRadius='25px'>
        { children }
      </Box>
  )
}