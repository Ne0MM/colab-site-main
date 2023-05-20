import { useState } from "react"

function login() {

    const [authToken, setAuthToken] = useState("NULL");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const fetchToken = async () => {

        const newAuthToken = await fetch('/api/authToken');
        const jsonAuthToken = await newAuthToken.json();
        setAuthToken(jsonAuthToken);

    }

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

            console.log("handle submit error")

        }

    }

  return (
    <div>

        <div>

            <button
            onClick={fetchToken}
            >teste</button>

            <button
            onClick={() => console.log(authToken)}
            >
                teste 2
            </button>

            <input 
            type="text" 
            value={username}
            onChange={handleUsername}
            />

            <input 
            type="password" 
            value={password}
            onChange={handlePassword}
            />

            <button
            onClick={handleSubmit}
            > submit </button>

        </div>

    </div>
  )
}

export default login