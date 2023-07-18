import { Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'


const AccountInfo = () => {
    return (
        <>
        <Text>Account Info:</Text>
        <Link to='/conta/1'>
            <Text> YourAccount </Text>
        </Link>
        </>
    )
}

export default AccountInfo;