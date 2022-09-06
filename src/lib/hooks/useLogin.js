import { useState } from "react";
import useCookie from './useCookie';
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import { login } from "../api/";

const useLogin = () => {

    const [username, setUsername] = useState("mor_2314");
    const [password, setPassword] = useState("83r5^_");
    const [errorUsername, setErrorUsername] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorLogin, setErrorLogin] = useState(null);
    const [successLogin, setSuccessLogin] = useState(null);
    
    const [cookie, updateCookie] = useCookie(config.token, "");
    const [cookieUsername, updateCookieUsername] = useCookie(config.username, "");

    const navigate = useNavigate();

    const handleUsername = (e) => { e.preventDefault(); setUsername(e.target.value) };
    const handlePassword = (e) => { e.preventDefault(); setPassword(e.target.value) };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0) {
            setErrorUsername("Username is required");
        }
        else if (password.length === 0) {
            setErrorUsername(null);
            setErrorPassword("Password is required");
        }
        else {
            setErrorPassword(null);

            const loginRes = login({
                username,
                password
            })

            loginRes.then(res => {
                setErrorLogin(null);
                setSuccessLogin("Login successful ...");
                
                setTimeout(function() {
                    updateCookieUsername(username, 1);
                    updateCookie(res.token, 1);
                    navigate("/");
                    window.location.reload(true);
                }, 2000)
            }).catch(err => {
                const error = `${err.response.data}`;
                setErrorLogin(error);
                setTimeout(function () {
                    setErrorLogin(null);
                }, 2000)
            })
            
        }
    };
    
    return {
        username, password, errorUsername, errorPassword, errorLogin, successLogin, cookie, cookieUsername, 
        handleUsername, handlePassword, handleSubmit
    };
};

export default useLogin; 