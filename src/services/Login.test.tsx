import { Login } from "./Login"

describe('login', ()=> {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it('Must show an alert with a welcome message', ()=>{
        Login()
        expect(mockAlert).toHaveBeenCalledWith('Welcome!')
    })
})