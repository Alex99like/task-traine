import styles from './App.module.scss'
import { EventPage } from './view/EventsPage/EventPage'
import { Home } from './view/Home/Home'

function App() {

  return (
    <main className={styles.main}>
      <Home />
      {/* <EventPage /> */}
    </main>
  )
}

export default App
