import React from 'react'
import styles from '../footer/footer.module.css'
const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>Lama Dev</div>
        <div className={styles.text}>© All rights reserved 2025.</div>
      </div>
    </div>
  )
}

export default Footer
