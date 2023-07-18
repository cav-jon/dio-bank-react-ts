import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card"
import { Login, } from "../services/Login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { DButton } from "../components/DButton";
import { changeLocalStorage } from "../services/Storage";


const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {setIsLoggedIn, setTitle} = useContext(AppContext)
    const navigate = useNavigate()
    setTitle('Login')

    const validateUser = async (email:string, password:string) => {
        const isLogged = await Login(email, password)

        if(!isLogged) {
            return alert('Invalid email or password!')
        }
        setIsLoggedIn(true)
        changeLocalStorage({ login:true })
        navigate('/conta/1')
    }

    return (
        <Box padding='25px'>
            <Card>
                <Center>
                    <h1>Please Login</h1>
                </Center>
                <Input placeholder="E-mail" type="email" marginTop='2%' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Password" type="password" marginTop='2%' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <Center>
                    <DButton onClick={()=>validateUser(email, password)} text="Login"/>
                </Center>
            </Card>
        </Box>
    )
}
export default Home;