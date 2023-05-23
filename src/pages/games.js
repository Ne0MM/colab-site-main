import { React, useEffect, useState } from 'react';
import styles from '../styles/games.module.css'
import LIttleHeader from "@/Components/LIttleHeader";
import GameListRender from '@/Components/GameListRender';
import StaticLogo from '@/Components/StaticLogo';
import Link from 'next/link';
import Footer from '@/Components/Footer';

export default function Games() {

    const [username, setUsername] = useState("");
    const [gameList, setGameList] = useState(undefined);


    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setUsername(jsonAuthToken.username);

        if(jsonAuthToken.access_token !== undefined){

            fetchGameList(jsonAuthToken.access_token);

        }

    }

    const fetchGameList = async (authToken) => {
        
        const newGameList = await fetch('http://colabeduc.org/api/projeto',{
            headers : {
                'Content-Type' : 'aplication/json',
                'X-Auth-Token' : authToken,
            }
        })

        try{

            setGameList(await newGameList.json());

        }catch{

        }


    }

    useEffect(() => {

        fetchToken();

    },[])

  return (
    <div className={styles.mainPage}>

        <LIttleHeader/>

        <Link 
        href="/"
        className={styles.logoContainer}
        >

            <div className={styles.logoWrapper}>

                <StaticLogo/>

            </div>

            <h1>ColabEduc</h1>

        </Link>
        
        <GameListRender gameList={gameList}/>

        <Footer/>

    </div>
  )
}