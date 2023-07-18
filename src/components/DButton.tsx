import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";


interface IDButton{
    text: string,
    onClick: MouseEventHandler
}

export const DButton = ({text, onClick}: IDButton) => {
    return (
        <Button onClick={onClick}
                colorScheme='teal'
                size='sm'
                width='100%'
                marginTop='5px'
                >
            {text}
        </Button>
    )
}