import React, {useState} from "react";

import "./login.css";

const Login = ({}) => {

    // const [value, setValue] = React.useState('');

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            email: "admin@admin.com",
            password: "admin"
        },
        {
            email: "admin2@admin.com",
            password: "admin2"
        }
    ];

    const errors = {
        uemail: "Incorrect Email.",
        pass: "Incorrect Password."
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const {uemail, pass} = document.forms[0];

        const userData = database.find((user) => user.email === uemail.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({name: "uemail", message: errors.uemail});
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="login-error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <div className="login-title">Sign In</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input type="email" name="uemail" required placeholder='Email'/>
                </div>
                <div className="input-container">
                    <input type="password" name="pass" required placeholder='Password'/>
                    {renderErrorMessage("uemail")}
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button type="submit" className='btn btn-outline-secondary login-btn'>Login</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login-container">
            <div className="login-form">
                {isSubmitted ? <div className="login-verdict">Succesfully logged in!</div> : renderForm}
            </div>
        </div>
    );

// if (isLoggedIn) {
//     return <Navigate to='/'/>
// } else {
//     return (
//         <div className='container'>
//             <div className="form">
//                 <form>
//                     <div className="input-container">
//                         <label>Username </label>
//                         <input type="text" name="uname" required />
//                         {renderErrorMessage("uname")}
//                     </div>
//                     <div className="input-container">
//                         <label>Password </label>
//                         <input type="password" name="pass" required />
//                         {renderErrorMessage("pass")}
//                     </div>
//                     <div className="button-container">
//                         <input type="submit" />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
}


export default Login;