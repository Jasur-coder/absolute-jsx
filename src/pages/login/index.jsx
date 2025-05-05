import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate()

        function onSubmit(e) {
                e.preventDefault()
                console.log({ "login": login, "password": password });
                if (login == "123" && password == "1234") {
                        navigate("/home")
                }
        }

        return (
                <section className="login-section">
                        <form className="login-form" onSubmit={onSubmit}>
                                <input type="text" placeholder="login" className="login-form_login" onChange={(e) => setLogin(e.target.value)} />
                                <input type="password" placeholder="password" className="login-form_password" onChange={(e) => setPassword(e.target.value)} />
                                <button type="submit" className="login-form_btn">Submit</button>
                        </form>
                </section>
        )


}

export default Login