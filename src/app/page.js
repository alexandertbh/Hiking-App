import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div></div>
      </div>

      <div className={styles.grid}>
        <h2>
          Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>
    </main>
  );
}
