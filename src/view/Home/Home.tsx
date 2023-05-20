import { useState } from 'react'
import { DateCounter } from '../../components/DateCounter/DateCounter'
import { Footer } from '../../components/Footer/Footer'
import { Modal } from '../../components/Modal/Modal'
import { ImageCustom } from '../../utils/ImageCustom'
import styles from './Home.module.scss'

export const Home = () => {
  const [activeModal, setActiveModal] = useState(true)

  return (
    <section className={styles.wrapper}>
      {activeModal && <Modal setActive={setActiveModal} />}
      <ImageCustom name='left-top' className={styles['left-image']} alt='' />
      <ImageCustom name='right-top' className={styles['right-image']} alt='' />
      <ImageCustom name='logo' className={styles.logo} alt='' />
      <h3 className={styles.title}>Under Construction</h3>
      <p className={styles.description}>We're making lots of improvements and will be back soon</p>
      <DateCounter />
      <p className={styles['description-button']}>Check our event page when you wait:</p>
      <button className={styles.button}>Go to the event <ImageCustom name='arrow'/></button>
      <Footer setActive={setActiveModal} />
    </section>
  )
}
