import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "../static/index"
import { ToolBar } from '../component/ToolBar/ToolBar'
import "../test"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <ToolBar />
      </footer>
    </div>
  )
}

export default Home
