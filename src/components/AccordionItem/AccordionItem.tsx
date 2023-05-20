import styles from './AccordionItem.module.scss'

interface IAccordionItem {
  name: string
  count: string
  active: boolean
  setActive: (val: string) => void
  img: string
  date: string
}

export const AccordionItem = ({ name, img, date, count, active, setActive }: IAccordionItem) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item} onClick={() => setActive(name)}>
        <h3 className={styles.name}>{name}</h3>
        {!active && (
          <>
            <img src={img} className={styles.img} />
            <div className={styles.bg}></div>
          </>
        )}
        <span className={styles.count}>{count}</span>
        <hr className={styles.line} />
      </div>
      <div className={`${styles.card} ${active && styles.active}`}>
        <img src={img} />
        <aside className={styles.aside}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.date}>{date}</span>
          <button className={styles.btn}>More information</button>
        </aside>
        <hr className={styles.line} />
      </div>
    </div>
  )
}
