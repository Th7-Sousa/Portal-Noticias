import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';

import { Style } from './styles'
import logo from './../../assets/logotipof5.png'

const Cadastro = () => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSignup = () => {
        if (!email | !emailConf | !password) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, password);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/login");
    };

    return (
        <>
            <Style>
                <div className='cadastroPage'>

                    <div className='modal'>

                        <div className='boas-vindas'>
                            <h1>Bem vindo ao Portal Unifesspa F5 !</h1>
                        </div>

                        <form >

                            <h3>Cadastre-se</h3>

                            <input
                                type='email'
                                placeholder='Insira seu email'
                                value={email}
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                            />

                            <input
                                type='email'
                                placeholder='Confirme seu email'
                                value={emailConf}
                                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                            />

                            <input
                                type='password'
                                placeholder='criar senha'
                                value={password}
                                onChange={(e) => [setPassword(e.target.value), setError("")]}
                            />

                            <button type='submit' onClick={handleSignup} >
                                Criar conta
                            </button>
                        </form>

                        <section className='section-link'>
                            <p>Já possui conta?
                                <Link className='link-login' to="/login">Login</Link>
                            </p>
                        </section>

                        <section className='section-logo'>
                            <img className='logo' src={logo} alt="Logo F5" />
                        </section>

                    </div>

                </div>
            </Style>
        </>
    )
}

export default Cadastro;