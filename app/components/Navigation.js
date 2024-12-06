import React, { useContext, useEffect, useState } from 'react'
import styles from './navigation.module.css'
import logo from '../assets/gtglogo.png'
import Image from 'next/image'
import UserAuth, { AuthContext } from './UserAuth'
import 'animate.css'

const Navigation = () => {
  const [hideModal, setHideModal] = useState(true)
  const { user, handleSignOut } = useContext(AuthContext) // Access user and handleSignOut from context

  const authPopup = () => {
    setHideModal(!hideModal)
  }

  useEffect(() => {
    if (user) {
      setHideModal(true)
    }
  }, [user])

  return (
    <nav style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 30 }}>
        <button className={styles.navButton}>
          <Image src={logo} alt='GTG Logo' height='170' width='170' />
        </button>
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
      </div>
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
