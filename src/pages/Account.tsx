import { useNavigate, useParams } from 'react-router-dom'
import { Center, SimpleGrid, Skeleton } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { API } from "../api"
import CardInfo from '../components/CardInfo'
import { AppContext } from '../components/AppContext'

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    lastAccess: string,
    id: string,
}
export const Account = () => {
    const [userData, setUserData] = useState<null | UserData>()

    const { isLoggedIn, setTitle } = useContext(AppContext)
    
    setTitle('My Account')
    
    const { id } = useParams()
    const navigate = useNavigate()
    
    !isLoggedIn && navigate('/')
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await API
            setUserData(data)
        }
        getData()
    })

    if (userData && id !== userData.id) {
        navigate('/')
    }

    let arrName = userData?.name.split(' ')

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {userData === null || userData === undefined ? <Skeleton borderRadius='25px' padding={120} minHeight='120px' /> : <CardInfo title='user' mainContent={`Welcome ${userData?.name}`} content={`Last Access: ${userData?.lastAccess}`} />}
                {userData === null || userData === undefined ? <Skeleton borderRadius='25px' padding={120} minHeight='120px' /> : <CardInfo title='account' mainContent={arrName ? arrName[0] : 'Onon'} content={`Account balance: ${userData?.balance}`} />}
            </SimpleGrid>
        </Center>

    )
}
