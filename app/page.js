import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image"
import Capture from "../public/capture.png"


export default function Home(){
  return (
    <div className={styles.main}>
      <div className={`${styles.section} ${styles.Welcome}`}>
        Welcome to NESC
        <div className={styles.container}>
          <Image
            className={styles.myImage}
            src={Capture}
            alt="Cant load"
            width="300px"
            height="200px"
            placeholder="blur"
          />
        </div>
      </div>
      <div className={`${styles.section} ${styles.sectionTwo}`}>
        <div className={styles.ourNESC}>Our Vision, Mission, and Values</div>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <h1></h1>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}