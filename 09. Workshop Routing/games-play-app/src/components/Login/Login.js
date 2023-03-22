import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForms";
import { Link } from "react-router-dom";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: ''
    }, onLoginSubmit)
    return (
        <section id="login-page" className="auth">
            <form id="login" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler} />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler} />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link href="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}