import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../components/hooks/useAuth';
import axios from 'axios';

import { Style } from './styles'
import logo from './../../assets/logotipof5.png'

const Login = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [admins, setAdmins] = useState([]);



  useEffect(() => {
    axios
      .get('http://localhost:3001/admin')
      .then((response) => {
        setAdmins(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);


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


            <div>
              <h1>Lista de Admins</h1>
              <ul>
                {admins.map((admin) => (
                  <li key={admin._id}>{admin.email}</li>
                ))}
              </ul>
            </div>











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
              <p>Entrar como usuário normal?
                <Link className='link-login' to="/">Feed de Notícias</Link>
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