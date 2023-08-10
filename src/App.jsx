/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import "./app.scss"
import { onAuthStateChanged } from "firebase/auth";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//contexts
import { AuthProvider } from "./context/AuthContext";

//pages
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";



const App = () => {

    const [user, setUser] = useState(undefined);
    const {auth} = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [auth])

    if (loadingUser){
        return <p>Carregando...</p>
    }

    return (
        <AuthProvider value={{ user }}>
            <div >
                <Navbar/>
                <div className="containerr">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;