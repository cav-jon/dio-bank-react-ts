import { API } from '../api'

export const Login = async (email:string, password: string):Promise<boolean> => {

    const data: any = await API

    if(data.email !== email || data.password !== password) {
        return false
    }
        return true
    }
    