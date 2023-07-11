import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({children}: any, {title}:any) => {
    return (
        <>
            <Header/>
            {children}
            <Footer />
        </>
    )
}