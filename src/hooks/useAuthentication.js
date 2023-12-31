/* eslint-disable no-unused-vars */
import {db} from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

import {useState, useEffect} from "react";

export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(null);

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    const auth = getAuth();
    
    function checkIfIsCancelled(){
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);

            return user;

        } catch(error){
            console.error(error);
            console.error(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already")){
                systemErrorMessage = "O email já cadastrado";
            }else{
                systemErrorMessage = "Ocorreu um Erro, por favor tente mais tarde.";
            }
            setLoading(false);
            setError(systemErrorMessage);
        }

    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading
    };
}