import { useEffect, useState } from "react";
import Image from "next/image";
import ProfileButton from "../Components/ProfileButton"
import styles from '../styles/Home.module.css'
import StaticLogo from "@/Components/StaticLogo";
import LIttleHeader from "@/Components/LIttleHeader";

export default function Home() {

    const[authToken, setAuthToken] = useState("NULL");
    const[userName, setUsername] = useState("NULL");


    //Puxar o token de autenticacao da api local 'authToken.js'
    //obs : Usar em todas as paginas em que for nessesario utilizar 
    //o token de autenticacao e/ou nome de usuario
    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setAuthToken(jsonAuthToken.access_token);
        setUsername(jsonAuthToken.username);

    }

    useEffect(() => {
      fetchToken();
    },[])

  return (
    <main>

      <div className={styles.homeInfo}>

        <LIttleHeader/>

        <div className={styles.infoWrapper}>

          <div className={styles.infoTop}>

            <div className={styles.logoWrapper}>

              <div className={styles.staticLogoWrapper}>

                <StaticLogo/>

              </div>

              <div className={styles.logoSideText}>

                <h1>

                  ColabEduc

                </h1>

                <span>

                  Juntos, Construindo a educação

                </span>

              </div>

            </div>

            <div className={styles.profileButtonContainer}>

              <ProfileButton username={userName}/>

            </div>

          </div>

          <div className={styles.infoBottom}>

            <div className={styles.colabStats}>

              <h1>
                DESENVOLVEDORES DE GAMES
              </h1>

              <Image
              src="/coding.png"
              width={64}
              height={64}
              alt="coding icon"
              className={styles.statsIcon}
              />

              <span>
                2874
              </span>

            </div>
            
            <div className={styles.colabStats}>

              <h1>
                DESCRIÇÕES DE GAMES
              </h1>

              <Image
              src="/description.png"
              width={64}
              height={64}
              alt="description icon"
              className={styles.statsIcon}
              />

              <span>
                1290
              </span>

            </div>

            <div className={styles.colabStats}>

              <h1>
                PROJETOS DE GAMES
              </h1>

              <Image
              src="/idea.png"
              width={64}
              height={64}
              alt="idea icon"
              className={styles.statsIcon}
              />

              <span>
                1118
              </span>

            </div>

            <div className={styles.colabStats}>

              <h1>
                HABILIDADES BNCC CONTEMPLADAS
              </h1>

              <Image
              src="/skills.png"
              width={64}
              height={64}
              alt="skills icon"
              className={styles.statsIcon}
              />
              
              <span>
                680
              </span>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.newsWrapper}>

        <div className={styles.newsCarrouselContainer}>

          <div className={styles.newsCarrousel}>

            

          </div>

        </div>

      </div>

    </main>
  )
}
