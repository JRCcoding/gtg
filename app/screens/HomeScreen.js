import React from 'react'
import styles from './homescreen.module.css'

const HomeScreen = ({ isMobile }) => {
  return (
    <div>
      <h1 className={isMobile ? styles.mheader : styles.header}>
        Grow Your Green Oasis
      </h1>
      <h3 className={isMobile ? styles.msubheader : styles.subheader}>
        Rare and Exotic Plants for Your Home and Garden
      </h3>
      <div className={styles.container}>
        <button className={isMobile ? styles.mcta : styles.cta}>
          Discover Your Perfect Plant
        </button>
      </div>
    </div>
  )
}

export default HomeScreen
