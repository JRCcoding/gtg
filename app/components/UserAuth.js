'use client'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

import { firebaseConfig } from '@/firebase'

import styles from './userauth.module.css'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Create a context to share authentication state
export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      // Perform any actions that should happen after sign-out
      // Consider navigating to a different page or refreshing the current page
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const value = { user, handleSignUp, handleSignIn, handleSignOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const UserAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleSignUp, handleSignIn } = useContext(AuthContext)

  return (
    <div
      style={{
        padding: '5%',
        width: '100%',
        height: 240,
      }}
      className={styles.main}
    >
      <div className={styles.container}>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button
          className={styles.button}
          onClick={() => handleSignUp(email, password)}
        >
          Sign Up
        </button>{' '}
        <button
          className={styles.button}
          onClick={() => handleSignIn(email, password)}
        >
          Sign In
        </button>{' '}
      </div>
    </div>
  )
}

export default UserAuth
