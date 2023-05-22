import { useRef, useState } from "react"
import style from '../styles/login.module.css'
import Link from "next/link";
import LIttleHeader from "@/Components/LIttleHeader";
import StaticLogo from "@/Components/StaticLogo";

function login() {

    const [authToken, setAuthToken] = useState("NULL");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSee, setPasswordSee] = useState("password");

    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setAuthToken(jsonAuthToken);

    }

    //Setar o novo token puxado do backEnd
    const submitToken = async (submitToken) => {

        const newToken = await fetch('/api/authToken', {
            method: 'POST',
            body: JSON.stringify({ submitToken }),
            headers: {
                'Content-type': 'application/json',
            },
        })

        setAuthToken(await newToken.json());

    }

    const handleUsername = (e) => {

        setUsername(e.target.value);

    }

    const handlePassword = (e) => {

        setPassword(e.target.value);

    }

    //Tentar POST na api de login do backend e puxar um token de autenticacao valido
    const handleSubmit = async () => {

        const token = await fetch('http://colabeduc.org/api/login',{
            method : 'POST',
            body : JSON.stringify({
                username, 
                password,
                }
            ),
            headers : {
                'Content-Type': 'appication/json',
            },
        })

        try{
            
            const submitResponse = await token.json();
            submitToken(submitResponse);

        }catch(e){

            console.log("handle submit error");

        }

    }

    //Botao para ver a senha
    const handlePasswordSee = () => {

        if(passwordSee === "text"){setPasswordSee("password");}
        else{setPasswordSee("text");}

    }

  return (
    <div className={style.mainPage}>

        <LIttleHeader/>

        <div className={style.loginContainer}>

            <div className={style.loginWrapper}>

                <div className={style.titleWrapper}>

                    <h1>Login</h1>

                </div>

                <div className={style.formWrapper}>

                    <span>Nome de usuario</span>

                    <input 
                    type="text" 
                    value={username}
                    onChange={handleUsername}
                    className={style.loginUsername}
                    placeholder="Nome de usuario"
                    />

                    <span>Senha</span>

                    <input 
                    type={passwordSee}
                    value={password}
                    onChange={handlePassword}
                    className={style.loginPassword}
                    placeholder="Senha"
                    >
                    </input>

                    <div className={style.underPassword}>

                        <button
                        className={style.passwordSee}
                        onClick={handlePasswordSee}
                        />

                        <Link
                        href="/passwordRecovery"
                        className={style.recoveryLink}
                        >
                        Esqueceu a senha?
                        </Link>

                    </div>

                    <button
                    onClick={handleSubmit}
                    className={style.submitButton}
                    > Entrar </button>

                </div>

            </div>

            <div className={style.logoWrapper}>

                <div className={style.logoContainer}>

                    <StaticLogo/>

                    <div className={style.textContainer}>
                        <h1>ColabEduc</h1>
                        <span>Juntos, Construindo a educação</span>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default login