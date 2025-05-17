import { Inter } from "next/font/google";
import "./ui/globals.css";
import Sidebar from "../app/ui/dashboard/sidebar/sidebar";
import Navbar from "../app/ui/dashboard/navbar/navbar";
import styles from "../app/ui/dashboard/dashboard.module.css";
import Footer from "../app/ui/dashboard/footer/footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Next.js Admin Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar/>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
