import { React , useEffect, useState } from "react"
import style from '../styles/login.module.css'
import Link from "next/link";
import LIttleHeader from "@/Components/LIttleHeader";
import StaticLogo from "@/Components/StaticLogo";
import Image from "next/image";
import { useRouter } from "next/router";

function login() {

    const [authToken, setAuthToken] = useState("NULL");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordSee, setPasswordSee] = useState("password");
    const [passwordImg, setPasswordImg] = useState("hide.png");
    const [passwordAlert, setPasswordAlert] = useState(false);
    const router = useRouter();

    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setAuthToken(jsonAuthToken.access_token);

        if(jsonAuthToken.access_token !== undefined){

            router.push("/");

        }

    }

    useEffect(() => {

        fetchToken();

    },[])

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
            router.push('/')

        }catch(e){

            setPasswordAlert(true);

        }

    }

    //Botao para ver a senha
    const handlePasswordSee = () => {

        if(passwordSee === "text"){

            setPasswordSee("password");
            setPasswordImg("hide.png");

        }
        else{

            setPasswordSee("text");
            setPasswordImg("view.png")

        }

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

                    {passwordAlert &&
                    <p
                    className={style.submitError}
                    >
                        Seu nome de usuário ou senha podem estar incorretos
                    </p>
                    }

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
                        >
                            <Image
                            src={`/${passwordImg}`}
                            width={24}
                            height={24}
                            alt="password view indicator"
                            className={style.passwordSeeImg}
                            />
                        </button>

                        <Link
                        href="/passwordRecovery"
                        className={style.recoveryLink}
                        >
                        Esqueceu sua senha?
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

                    <div className={style.colabContainer}>

                        <Link
                        href="/"
                        className={style.logoLink}
                        >
                        
                            <StaticLogo/>

                        </Link>

                    </div>

                    <div className={style.textContainer}>
                        <h1>ColabEduc</h1>
                        <span>Juntos, Construindo a educação</span>
                    </div>

                    <div className={style.registerContainer}>

                        <span className={style.textContainer}>Ainda não possui conta?</span>

                        <Link 
                        className={style.registerButton}
                        href="/register"
                        >
                            Cadastro
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default login