import React from 'react';
import styles from './ComponentStyles/GameListRender.module.css'
import Link from 'next/link';

export default function GameListRender(props) {

    let gameList = props.gameList;

    if(gameList !== undefined){

        return(
            
            <div className={styles.gameListContainer}>

                <div className={styles.gameRow}>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[0].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[0].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[0].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[1].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[1].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[1].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[2].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[2].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[2].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                </div>

                <div className={styles.gameRow}>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[3].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[3].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[3].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[4].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[4].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[4].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[5].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[5].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[5].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                </div>

                <div className={styles.gameRow}>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[6].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[6].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[6].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[7].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[7].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[7].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[8].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[8].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[8].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                </div>

                <div className={styles.gameRow}>

                    <div className={styles.gameContainer}>

                        <span className={styles.gameTitle}>
                            {gameList[9].nome}
                        </span>

                        <div className={styles.gameCard}>

                            <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${gameList[9].video}`}
                            className={styles.gameVideo}
                            />

                        </div>

                        <Link
                        href={gameList[9].linkJogo}
                        className={styles.jogarButton}
                        target='_blank'
                        >Jogar</Link>

                    </div>

                </div>

            </div>

        )

    }else{
        
        return(
            <div className={styles.loadingShow}>
                Loading
            </div>
        )

    }
}
