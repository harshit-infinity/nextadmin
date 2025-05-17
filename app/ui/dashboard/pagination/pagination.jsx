import React from 'react'
import styles from '../../dashboard/pagination/pagination.module.css'

const Pagination = () => {
  return (
    <div>
      <div className={styles.container}>
        <button className={styles.button} disabled>Previous</button>
        <button className={styles.button}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
