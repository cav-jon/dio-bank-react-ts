import { Login } from "./Login"

// const mockSetIsLoggedIn = jest.fn()
// const mockNavigate = jest.fn()
// jest.mock('react', ()=>({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }))
// jest.mock('react-router-dom', ()=>({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: ()=> mockNavigate
// }))

describe('login', ()=> {

    const mockEmail = 'jon@react.test'
    const mockPassword = 'test'
    

    it('Must return a true value of login atempt', async()=>{
        
        const response = await Login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
        
    })

    it('Must throw an error with an invalid email address and password', async() => {
        const response = await Login('invalid@email.com','invalidpassword')
        expect(response).toBeFalsy()
        //expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        //expect(mockNavigate).not.toHaveBeenCalled()
    })
})