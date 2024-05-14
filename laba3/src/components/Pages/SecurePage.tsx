import {User} from "../AuthForm.tsx";
import React from "react";

interface props {
    setUserState: React.Dispatch<React.SetStateAction<User | null>>
}

export const SecurePage = ({ setUserState }: props) => {
    return (
        <>
            <h1>This is secure page!</h1>
            <button onClick={() => {setUserState(null);}}>Выйти</button>
        </>
    )
}