// import React from "react";
// import useLogin from "../hooks/useLogin";
// import { LoginBtn, ErrMessage, SuccessMessage } from "../subComponents";
// import Header from "../subComponents/header";

// export const Login = () => {
//     const {
//         username,
//         password,
//         errorUsername,
//         errorPassword,
//         errorLogin,
//         successLogin,
//         cookie,
//         cookieUsername,
//         handleUsername,
//         handlePassword,
//         handleSubmit
//     } = useLogin();

//     return (
//         <div>
//             <Header header={'Login'}/>
//             <div className="card mt-5 mb-5">
//                 <div className="card-header">Fake Store - {!cookie || cookie === '[object Object]' ? 'Login' : cookieUsername}</div>
//                 <div className="card-body">
//                     <form >
//                         <div className="form-group">
//                             <div className="row">
//                                 <div className="col-12 col-lg-6">
//                                     <label htmlFor="username">Username:</label>
//                                     <input
//                                         type="text"
//                                         className="form-control mt-2"
//                                         id="username_login"
//                                         placeholder="Username"
//                                         name="username"
//                                         onChange={handleUsername}
//                                         value={username}
//                                     />
//                                     <ErrMessage errorMessage={errorUsername} />
//                                 </div>
//                                 <div className="col-12 col-lg-6">
//                                     <label htmlFor="password">Password:</label>
//                                     <input
//                                         type="password"
//                                         className="form-control mt-2"
//                                         id="password_login"
//                                         placeholder="Enter password"
//                                         name="password"
//                                         onChange={handlePassword}
//                                         value={password}
//                                     />
//                                     <ErrMessage errorMessage={errorPassword} />
//                                 </div>
//                                 <div className="col-12 col-lg-6">
//                                     <ErrMessage errorMessage={errorLogin} />
//                                     <SuccessMessage successMessage={successLogin} />
//                                 </div>
//                             </div>
//                             <LoginBtn handleSubmit={handleSubmit} cookie={cookie} />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// };

import React from "react";
import { Nav, LoginSubComp, Footer } from "../subComponents";

export const Login = () => {
    return (
        <>
            <Nav activeRoute={"login"} />
            <LoginSubComp />
            <Footer />
        </>
    )
};
