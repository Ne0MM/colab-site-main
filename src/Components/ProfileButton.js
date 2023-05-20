import Link from 'next/link'
import styles from './ComponentStyles/ProfileButton.module.css'


export default function profileButton(props) {

    if(props.username === undefined) {

        return(

            <div>
                <Link 
                href='/cadastro'
                className={styles.signUpButton}
                >
                    Cadastro
                </Link>

                <Link 
                href='/login' 
                className={styles.loginButton}
                >
                    Login
                </Link>
            </div>            

        )

    }

  return (
    <Link
    href='/jogar'
    className={styles.signedButton}
    >
        Jogos
    </Link>
  )
}
