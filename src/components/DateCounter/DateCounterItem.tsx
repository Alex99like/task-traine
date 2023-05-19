import { ImageCustom } from "../../utils/ImageCustom"
import styles from './DateCounter.module.scss'

export const DateCounterItem = ({ value, name }: { value: string, name: string }) => {
  return (
    <div className={styles.item}>
      <span className={styles.count}>{value}</span>
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
        <ImageCustom className={styles.img} name="bg-count" />
      </div>
    </div>
  )
}
