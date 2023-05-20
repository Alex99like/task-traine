import { useState } from 'react';
import { AccordionItem } from '../../components/AccordionItem/AccordionItem';
import styles from './EventPage.module.scss';
import ImageAcc from '../../assets/img/one-event.jpg'

const dataAccordion = {
  one: { name: 'Hawaiian party', count: '01', data: '13.02.2023' },
  two: { name: 'Мafia party', count: '02', data: '13.02.2023' },
  three: { name: 'Party', count: '03', data: '13.02.2023' },
  four: { name: 'Party on the beach', count: '04', data: '13.02.2023' },
  five: { name: 'Home Security', count: '05', data: '13.02.2023' },
  six: { name: 'Network Design & Implementation', count: '06', data: '13.02.2023' },
  seven: { name: 'System Design & Engineering', count: '07', data: '13.02.2023' },
  eight: { name: 'Client Care Plans', count: '08', data: '13.02.2023' },
}

export const EventPage = () => {
  const [activeCard, setActiveCard] = useState<string>(dataAccordion.one.name)

  const handlerActive = (value: string) => {
    setActiveCard(value)
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>ALL EVENTS</h2>

      <div className={styles.accordion}>
        {Object.values(dataAccordion).map(item => (
          <AccordionItem 
            key={item.name} 
            count={item.count}
            name={item.name}
            active={activeCard === item.name}
            date={item.data}
            img={ImageAcc}
            setActive={handlerActive}
          />
        ))}
      </div>
    </section>
  )
}
