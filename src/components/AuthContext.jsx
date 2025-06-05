import React, { useContext, useEffect, useState } from 'react'
import { auth, provider } from '../fireabase'
import { createContext } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async () => {
    try {
        const result = await signInWithPopup(auth, provider)
        setUser(result.user)
        console.log('sesion iniciada', result.user)
        console.log('sesion iniciada', result.user.email)
        console.log('sesion iniciada', result.user.displayName)
        console.log('sesion iniciada', result.user.photoURL)
      } catch (error) {
      console.error('error al iniciar sesion', error)  
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser(null)
      console.log('sesion cerrada')
    } catch (error) {
      console.error('error al cerrar sesion', error)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    setUser(currentUser)
    })
    return () => unsubscribe()
  }, [auth])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)