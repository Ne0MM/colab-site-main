import { useEffect, useState } from "react";
import ProfileButton from "../Components/ProfileButton"
import styles from '../styles/Home.module.css'

export default function Home() {

    const[authToken, setAuthToken] = useState("NULL");
    const[userName, setUsername] = useState("NULL");

    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setAuthToken(jsonAuthToken.access_token);
        setUsername(jsonAuthToken.username)

    }

    useEffect(() => {
      fetchToken();
    },[])

  return (
    <>

      <ProfileButton username = {userName}/>

    </>
  )
}
