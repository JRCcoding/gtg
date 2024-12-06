import React from 'react'
import styles from './homescreen.module.css'

const HomeScreen = () => {
  return (
    <div>
      <h1 className={styles.header}>Grow Your Green Oasis</h1>
      <h3 className={styles.subheader}>
        Rare and Exotic Plants for Your Home and Garden
      </h3>
      <div className={styles.container}>
        <button className={styles.cta}>Discover Your Perfect Plant</button>
      </div>
    </div>
  )
}

export default HomeScreen
