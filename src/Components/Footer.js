import Link from 'next/link'
import styles from './ComponentStyles/Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>

        <span>APOIO</span>

        <Link
        href="http://www.natalnet.br/home/"
        className={styles.natalNetContainer}
        >

            <Image
            src="/Natalnet.png"
            height={127}
            width={320}
            className={styles.natalNetImage}
            />

        </Link>

    </footer>
  )
}