import styles from './AccordionItem.module.scss'

interface IAccordionItem {
  name: string
  count: string
}

export const AccordionItem = ({ name, count }: IAccordionItem) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.count}>{count}</span>
      <hr className={styles.line} />
    </div>
  )
}
