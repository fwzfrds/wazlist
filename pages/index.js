import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Waz | Home</title>
        <meta name="keywords" content="waz" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tenetur quibusdam vel consequatur nihil facere perferendis aliquam exercitationem fugiat distinctio, harum amet libero dolor atque alias omnis architecto ullam officiis doloremque accusamus quo. Fuga inventore blanditiis expedita atque alias. Quia, nemo reiciendis quaerat perferendis commodi voluptas ipsum asperiores quas cum?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tenetur quibusdam vel consequatur nihil facere perferendis aliquam exercitationem fugiat distinctio, harum amet libero dolor atque alias omnis architecto ullam officiis doloremque accusamus quo. Fuga inventore blanditiis expedita atque alias. Quia, nemo reiciendis quaerat perferendis commodi voluptas ipsum asperiores quas cum?</p>
        <Link href={`/waz`}>
          <a className={styles.btn}>See Listing</a>
        </Link>
      </div>
    </>
  )
}
