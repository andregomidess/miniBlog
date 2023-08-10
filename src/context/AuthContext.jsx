import { useContext, createContext } from "react";
import PropTypes from 'prop-types'; 

const AuthContext = createContext();

export function AuthProvider({children, value}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
    children: PropTypes.node,
    value : PropTypes.object 
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthValue(){
    return useContext(AuthContext);
}