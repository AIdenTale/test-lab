import './App.css'
import {AuthForm, User} from "./components/AuthForm.tsx";
import {useState} from "react";
import {SecurePage} from "./components/Pages/SecurePage.tsx";

function App() {

    const [user, setUser] = useState<User | null>(null);

    const authPage = user ? '' : <AuthForm setUserState={setUser}/>;
    const securePage = user ? <SecurePage setUserState={setUser}/> : '';

    return (
    <>
        {
            authPage
        }
        {
            securePage
        }
    </>
  )
}

export default App
