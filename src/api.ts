const account = {
    email: 'jon@react.test',
    password: 'test',
    name: 'Jonathas Cavalcante',
    balance: 2000.00,
    lastAccess: new Date(),
    id: '1'
}

export const API = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(account)
    },3000)
})