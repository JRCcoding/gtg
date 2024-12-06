import React from 'react'
import styles from './navigation.module.css'
import logo from '../assets/gtglogo.png'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav
      style={{
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: 30 }}>
        <button className={styles.navButton}>
          <Image src={logo} alt='GTG Logo' height='200' width='200' />
        </button>
        <button className={styles.navButton}>shop</button>
        <button className={styles.navButton}>about</button>
        <button className={styles.navButton}>plant care</button>
      </div>
    </nav>
  )
}

export default Navigation
