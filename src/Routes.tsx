import { Route, Routes } from "react-router-dom"
import { useContext } from 'react'

import { Account } from "./pages/Account"
import { AppContext } from "./components/AppContext"

import AccountInfo from "./pages/AccountInfo"
import Home from "./pages/Home"


const MainRoutes = () => {
    const {isLoggedIn} = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={
                <Home />
            } />
            <Route path='/conta/:id' element={
                isLoggedIn ? <Account /> : <Home />
            } />
            <Route path='/accountinfo' element={
                isLoggedIn? <AccountInfo /> : <Home />
            } />
        </Routes>

    )
}

export default MainRoutes