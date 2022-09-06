import React from "react";
import useLogin from "../hooks/useLogin";
import { LoginBtn, ErrMessage, SuccessMessage } from "../subComponents";

const LoginSubComp = () => {

    const {
        username,
        password,
        errorUsername,
        errorPassword,
        errorLogin,
        successLogin,
        cookie,
        handleUsername,
        handlePassword,
        handleSubmit
    } = useLogin();

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <div className="form-input">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="username_login"
                        placeholder="Username"
                        name="username"
                        onChange={handleUsername}
                        value={username}
                    />
                    <ErrMessage errorMessage={errorUsername} />
                </div>

                <div className="form-input">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control mt-2"
                        id="password_login"
                        placeholder="Enter password"
                        name="password"
                        onChange={handlePassword}
                        value={password}
                    />
                    <ErrMessage errorMessage={errorPassword} />
                </div>

                <div className="col-12 col-lg-6">
                    <ErrMessage errorMessage={errorLogin} />
                    <SuccessMessage successMessage={successLogin} />
                </div>

                <LoginBtn handleSubmit={handleSubmit} cookie={cookie} />
            </form>
        </div>
    )
};

export default LoginSubComp;