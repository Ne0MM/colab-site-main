import { React, useEffect, useState } from "react";
import Image from "next/image";
import ProfileButton from "../Components/ProfileButton"
import styles from '../styles/Home.module.css'
import StaticLogo from "@/Components/StaticLogo";
import LIttleHeader from "@/Components/LIttleHeader";
import Link from "next/link";
import Footer from "@/Components/Footer";

export default function Home() {

    const[authToken, setAuthToken] = useState("NULL");
    const[userName, setUsername] = useState("NULL");
    const[carrouselPos, setCarrouselPos] = useState(0);


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

    //Muda a posicao das imagens do carrosel
    const handleCarrousel = (position) => {
      
      if(position === "NEXT"){

        if(carrouselPos >= 50){

          setCarrouselPos(0);

        }else{

          setCarrouselPos(carrouselPos + 25);

        }

      }else if(position === "PREV"){

        if(carrouselPos <= 0){

          setCarrouselPos(50);

        }else{

          setCarrouselPos(carrouselPos - 25);

        }

      }else{

        switch (position){

          case 1:
            setCarrouselPos(0);
            break;
          case 2:
            setCarrouselPos(25);
            break;
          case 3:
            setCarrouselPos(50);
            break;
          default:
            break;

        }

      }

    }

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

          <div 
          className={styles.newsCarrousel}
          style={{['--carrousel-pos'] : -carrouselPos + "%"}}
          >

            <Image
            src="/colabImage2.png"
            width={1920}
            height={1080}
            className={styles.carrouselImage}
            alt="colab main"
            />

            <Image
            src="/colabImage3.png"
            width={1920}
            height={1080}
            className={styles.carrouselImage}
            alt="parceria"
            />

            <Image
            src="/colabImage1.png"
            width={1920}
            height={1080}
            className={styles.carrouselImage}
            alt="sopa de letrinhas"
            />

          </div>

          <div
          className={styles.carrouselNavContainer}
          >

            <button 
            className={styles.carrouselNav}
            onClick={() => handleCarrousel("PREV")}
            >

                <Image
                src="/arrow.png"
                width={16}
                height={16}
                className={styles.arrowRight}
                alt="arrowRigt"
                />

            </button>

            <button
            className={styles.carrouselNav}
            onClick={() => handleCarrousel("NEXT")}
            >

              <Image
              src="/arrow.png"
              width={16}
              height={16}
              className={styles.arrowLeft}
              alt="arrowLeft"
              />

            </button>

          </div>

        </div>

        <div className={styles.aboutColab}>
          
          <span>O ColabEduc é um sistema de desenvolvimento colaborativo de objetos de aprendizagem, sejam eles virtuais ou reais. O ColabEduc cria um ambiente onde profissionais de diferentes áreas possam colaborar, construir e compartilhar seus objetos de aprendizagem.</span>

        </div>

      </div>

      <Footer/>

    </main>
  )
}
