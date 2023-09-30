import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NESC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className={styles.navBar}>
          <div>
            <h1 className={styles.logo}>NESC</h1>
          </div>

          <div className={styles.bNav}>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"./about"}>
              <li>About</li>
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
