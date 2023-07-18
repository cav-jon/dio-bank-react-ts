import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./Storage"

const diobank = {
    login:false
}
describe('Tries to return localStorage status', () => { 
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Returns LocalStorage object', ()=>{
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })
    it('Must create the LocalStorage Object with the createLocalStorage function', ()=> {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
    it('Must change localStorage object value',()=> {
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(diobank))
    } )
})