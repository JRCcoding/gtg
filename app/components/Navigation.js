import React, { useContext, useEffect, useState } from 'react'
import styles from './navigation.module.css'
import logo from '../assets/gtglogo.png'
import Image from 'next/image'
import UserAuth, { AuthContext } from './UserAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import 'animate.css'

const Navigation = ({ isMobile }) => {
  const [hideModal, setHideModal] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { user, handleSignOut } = useContext(AuthContext) // Access user and handleSignOut from context

  const authPopup = () => {
    setHideModal(!hideModal)
  }

  useEffect(() => {
    if (user) {
      setHideModal(true)
      setShowMobileMenu(false)
    }
  }, [user])

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <nav style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 30 }}>
        <button className={styles.navButton}>
          <Image src={logo} alt='GTG Logo' height='170' width='170' />
        </button>

        <>
          {isMobile ? (
            <div className={styles.hamburgerIcon}>
              <FontAwesomeIcon icon={faBars} onClick={toggleMobileMenu} />
            </div>
          ) : (
            <>
              <button className={styles.navButton}>shop</button>
              <button className={styles.navButton}>about</button>
              <button className={styles.navButton}>plant care</button>
              {user ? (
                <button className={styles.navButton} onClick={handleSignOut}>
                  logout
                </button>
              ) : (
                <button className={styles.navButton} onClick={authPopup}>
                  login
                </button>
              )}
            </>
          )}
        </>
      </div>
      {isMobile && (
        <div
          className={`${styles.mobileMenu} ${
            showMobileMenu ? styles.showMenu : ''
          }`}
          hidden={!showMobileMenu}
        >
          <div className={styles.mobileMenu2}>
            <div className='animate__animated animate__fadeInLeft'>
              <button className={styles.mobileMenuButton}>shop</button>
              <button className={styles.mobileMenuButton}>about</button>
              <button className={styles.mobileMenuButton}>plant care</button>
              {user ? (
                <button
                  className={styles.mobileMenuButton}
                  onClick={handleSignOut}
                >
                  logout
                </button>
              ) : (
                <button className={styles.mobileMenuButton} onClick={authPopup}>
                  login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div hidden={hideModal}>
        <div
          style={{
            position: 'absolute',
            top: 120,
            width: '100%',
          }}
          className='animate__animated animate__zoomInDown'
        >
          <UserAuth />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
