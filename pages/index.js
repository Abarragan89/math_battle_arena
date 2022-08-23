import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Homepage/homepage.module.css';

export default function Home() {
  return (
    <div className={``}>
      <Head>
        <title>Math Battles</title>
        <meta name="keywords" content="math games, classroom, educational, teacher, student" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Hero */}
        <div className={'flex-box-sa'}>
          <h3>hello</h3>
          <h2>Welcome to the Battle Grounds</h2>
          <h3>hello</h3>
        </div>
        {/* sections of game options */}
        <section className={'flex-box-sa'}>
          <h2 className={styles.gameLink}>Horse Race</h2>
          <Link href='/snakeLobby'>
            <h2 className={styles.gameLink}>Snake</h2>
          </Link>
        </section>
        <section className={'flex-box-sa'}>
          <h2 className={styles.gameLink}>Battle Ship</h2>
          <h2 className={styles.gameLink}>Train</h2>
        </section>
      </main>
    </div>
  )
}


