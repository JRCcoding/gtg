'use client'

import React, { useState, useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'
import Navigation from './components/Navigation'
import bg from './assets/gtgbg.png'
import mbg from './assets/gtgbgmobile.png'
import { AuthProvider } from './components/UserAuth'

const Home = () => {
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 700) // Adjust breakpoint as needed
      }

      handleResize() // Check on initial render
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
  }
  const isMobile = useIsMobile()

  return (
    <AuthProvider>
      <div
        style={{
          backgroundImage: isMobile ? `url(${mbg.src})` : `url(${bg.src})`,
          height: '100vh',
          width: '100vw',
          backgroundHeight: '100vh',
          backgroundWidth: '100vw',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
        }}
      >
        <Navigation />
        <HomeScreen />
      </div>
    </AuthProvider>
  )
}

export default Home
