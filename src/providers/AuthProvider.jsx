import { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
 
 const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('current User',currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;