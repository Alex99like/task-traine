import { useState } from 'react';
import { ImageCustom } from '../../utils/ImageCustom'
import styles from './Footer.module.scss'

interface IFooter {
  setActive: (val: boolean) => void;
  scrollHandle: () => void
}

export const Footer = ({ setActive, scrollHandle }: IFooter) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const request = async (val: string) => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          email: val,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      console.log(await data.json())
    } catch(e) {
      console.log(e)
    }
  }

  const openModal = async () => {
    const test = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    if (test.test(input)) {
      await request(input)
      setActive(true)
      setInput('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <footer className={styles.footer}>

      <div className={styles.field}>
        {error && <span className={styles.error}>no valid email</span>}
        <input 
          placeholder='Enter your Email and get notified' 
          type='email' 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /> 
        <button
          onClick={openModal}
        ><ImageCustom name='arrow' /></button>
      </div>
      <button 
        className={styles.btn}
        onClick={scrollHandle}
      >Other Events <ImageCustom name='arrow' className={styles.icon} /></button>
    </footer>
  )
}
