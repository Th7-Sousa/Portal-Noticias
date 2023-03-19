import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';

import { Style } from './styles'
import logo from './../../assets/logotipof5.png'

const Login = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/gerenciarPublicacoes")

  }

  return (
    <>
      <Style>
        <div className='login-page'>


          <div className='modal'>

            <div className='boas-vindas'>
              <h1>Portal Unifesspa F5</h1>
            </div>




            <form>

              <h3>Login</h3>

              <input
                type='email'
                placeholder='Insira seu email'
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />

              <input
                type='password'
                placeholder='Insira sua senha'
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />


              <button type='submit' onClick={handleLogin}>
                Entrar
              </button>

            </form>





            <section className='section-link'>
              <p>Não possui uma conta?
                <Link className='link-login' to="/cadastro">Cadastre-se</Link>
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

export default Login;