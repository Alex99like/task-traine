import { useEffect } from 'react'
import styles from './Modal.module.scss'

interface IModal {
  setActive: (val: boolean) => void;
}

export const Modal = ({ setActive }: IModal) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
  }, [])

  const closeModal = () => {
    setActive(false)
    document.body.style.overflowY = 'scroll'
  }

  return (
    <div 
      className={styles.wrapper}
      onClick={closeModal}
    >
      <div className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className={styles.title}>SUCCESS!</h3>
        <p className={styles.description}>You have successfully subscribed to the email newsletter</p>
        <button 
          className={styles.button}
          onClick={closeModal}
        >Close</button>
      </div>
    </div>
  )
}
