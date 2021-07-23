import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const normalizeSrc = (src) => {
  return src[0] === "/" ? src.slice(1) : src;
};

const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

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
          <Image
            src='/cheese.svg'
            alt='cheese'
            id='#cheese'
            width={200}
            height={200}
            loader={cloudflareLoader}
          />
        </span>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} leochaddad</span>
      </footer>
    </div>
  );
}
