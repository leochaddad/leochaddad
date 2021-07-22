import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>leochaddad</title>
        <meta name='description' content='this is a website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src='/cheese.svg' alt='cheese' id="#cheese" width={200} height={200} />
        </span>
      </main>

      <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} leochaddad</span>
      </footer>
    </div>
  );
}
