import { ImageCustom } from "../../utils/ImageCustom"
import styles from './DateCounter.module.scss'

export const DateCounterItem = ({ value, name }: { value: string, name: string }) => {
  return (
    <div className={styles.item}>
      <span className={styles.count}>{value}</span>
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
        <span className={styles['min-name']}>{`${name[0] + name[0]}`}</span>
        <ImageCustom className={styles.img} name="bg-count" />
        <ImageCustom className={styles['img-min']} name="bg-count-min" />
      </div>
    </div>
  )
}
