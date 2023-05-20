import { ImageCustom } from '../../utils/ImageCustom'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.field}>
        <input 
          placeholder='Enter your Email and get notified' 
          type='text' 
        /> 
        <button><ImageCustom name='arrow' /></button>
      </div>
      <button className={styles.btn}>Other Events <ImageCustom name='arrow' className={styles.icon} /></button>
    </footer>
  )
}
