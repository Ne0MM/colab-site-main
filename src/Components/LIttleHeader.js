import Link from 'next/link'
import Image from 'next/image'
import styles from './ComponentStyles/LittleHeader.module.css'

export default function LIttleHeader() {
  return (
    <header className={styles.header}>

        <div className={styles.headerIcons}>
        
        <Link
        href="https://www.instagram.com/colabeduc/"
        target="_blank"
        className={styles.instagramIcon}
        >

            <Image
            src="/instagramIcon.svg"
            width={24}
            height={24}
            alt="instagram icon"
            className={styles.instaIcon}
            />

        </Link>

        <div className={styles.headerLeft}>

            <span>
            Sobre Nós
            </span>

            <span>
            Contato
            </span>

        </div>

        </div>

    </header>
  )
}