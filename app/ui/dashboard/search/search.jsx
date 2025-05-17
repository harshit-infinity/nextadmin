import React from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
const Search = ({placeholder}) => {
  return (
    <div>
      <div className={styles.container}>
        <MdSearch/>
        <input type='text' placeholder={placeholder} className={styles.input}/>
      </div>
    </div>
  )
}
export default Search;