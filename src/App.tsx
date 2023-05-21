import { createRef } from 'react'
import styles from './App.module.scss'
import { EventPage } from './view/EventsPage/EventPage'
import { Home } from './view/Home/Home'

function App() {
  const ref = createRef<HTMLDivElement>()
  const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main className={styles.main}>
      <Home scrollHandle={scroll} />
      <EventPage ref={ref} />
    </main>
  )
}

export default App
