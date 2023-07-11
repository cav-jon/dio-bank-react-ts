import { ChakraProvider} from "@chakra-ui/react";
import { Login } from "./services/Login";
import { Card } from "./components/Card";


function App() {
  return (
    <ChakraProvider>    

      <Card name="Login" eventOnClick={Login} />
    
    </ChakraProvider>
    
  );
}

export default App;
