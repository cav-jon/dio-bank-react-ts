import {Sum, Mult} from './Sum'
describe ('Sum', ()=> {
    it('Sum provided number with itself', ()=> {
        const value = Sum(1)
        expect(value).toBe(2)
        
    })

    it('Multiplies the given number by 2', ()=> {
        const value = Mult(2,2)
        expect(value).toBe(4)
    })

    it('Multiplies the given number by 3', ()=> {
        const value = Mult(2,3)
        expect(value).toBe(6)
    })

    it('Throw an error in a different multiplier',()=>{
        const value = Mult(2,4)
        expect(value).toBe('Unaccpeted multiplier')
    })
})