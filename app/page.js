import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Link href="/jobs">
          <h2>Job Listing</h2>
        </Link>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about features and API.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about this in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for ease of life.</p>
        </a>

        <a
          href="/jobs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            View more Jobs
          </h2>
        </a>
      </div>
    </>
  );
}
