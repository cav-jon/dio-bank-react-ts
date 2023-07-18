import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    mainContent:string,
    content: string,
    title: string
}
const CardInfo = ({title,mainContent,content}:ICardInfo) => {
    return (
        <Box backgroundColor='#95a5a6' borderRadius='25px' padding={8} minHeight='120px'>
            <Text fontSize='2xl' fontWeight='bold'>{mainContent}, your {title} info: </Text>
            <Text fontSize='xl'>{content}</Text>
        </Box>
    )
}

export default CardInfo;