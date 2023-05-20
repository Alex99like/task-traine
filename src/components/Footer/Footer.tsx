import { ImageCustom } from '../../utils/ImageCustom'
import styles from './Footer.module.scss'

interface IFooter {
  setActive: (val: boolean) => void;
}

export const Footer = ({ setActive }: IFooter) => {
  const openModal = () => {
    setActive(true)
  }

  return (
    <footer className={styles.footer}>

      <div className={styles.field}>
        <input 
          placeholder='Enter your Email and get notified' 
          type='text' 
        /> 
        <button
          onClick={openModal}
        ><ImageCustom name='arrow' /></button>
      </div>
      <button 
        className={styles.btn}
      >Other Events <ImageCustom name='arrow' className={styles.icon} /></button>
    </footer>
  )
}
