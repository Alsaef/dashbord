/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)




    const createAccount=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
         displayName:name ,photoURL: photo
         })
       }
       const logOut = () => {
        return signOut(auth);
    }
    const contextValue={
        user,
        loading,
        createAccount,
        updateUserProfile,
        login,
        logOut
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
       
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    return (
      <AuthContext.Provider value={contextValue}>
{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;