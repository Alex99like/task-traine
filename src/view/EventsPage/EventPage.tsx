import { AccordionItem } from '../../components/AccordionItem/AccordionItem';
import styles from './EventPage.module.scss';

const dataAccordion = {
  one: { name: 'Hawaiian party', count: '01' },
  two: { name: 'Мafia party', count: '02' },
  three: { name: 'Party', count: '03' },
  four: { name: 'Party on the beach', count: '04' },
  five: { name: 'Home Security', count: '05' },
  six: { name: 'Network Design & Implementation', count: '06' },
  seven: { name: 'System Design & Engineering', count: '07' },
  eight: { name: 'Client Care Plans', count: '08' },
}

export const EventPage = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>ALL EVENTS</h2>

      <div className={styles.accordion}>
        {Object.values(dataAccordion).map(item => (
          <AccordionItem 
            key={item.name} 
            count={item.count}
            name={item.name}
          />
        ))}
      </div>
    </section>
  )
}
