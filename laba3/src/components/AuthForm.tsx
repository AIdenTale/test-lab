import React, { useState} from "react";

import users from "../assets/users.json";

export interface User {
    email: string,
    password: string
}

interface props {
    setUserState: React.Dispatch<React.SetStateAction<User | null>>
}

export function AuthForm({ setUserState }: props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const sendForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Sending email...");
        console.log(email, password)

        const user = users.find((user: {email: string, password: string}) =>
            user.email == email && user.password == password
        )

        if (user){
            setUserState(user);
        }
    }



    return (
        <>
        <div className="container">
            <form>
                <div>Форма для входа</div>
                <label>
                    Email:
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br/>
                <button onClick={(e) => sendForm(e)}>Отправить</button>
            </form>
        </div>
        </>
    )

}