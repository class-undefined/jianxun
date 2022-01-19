import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import "../static/index"
import SvgIcon from '../component/SvgIcon/SvgIcon'
import { ToolBar } from '../component/ToolBar/ToolBar'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        
      </Head>

      <main className={styles.main}>
        <SvgIcon iconClass={'comment'}/>
      </main>

      <footer className={styles.footer}>
        <ToolBar />
      </footer>
    </div>
  )
}

export default Home
