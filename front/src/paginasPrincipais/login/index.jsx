import React from 'react';
import { Style } from './styles';
import login from '../../assets/login.svg';

const Login = () => {



  function handleLogin(event) {
    event.preventDefault();
    const data = {
      email: document.getElementById("email").value,
      senha: document.getElementById("password").value,
    };

  }

  return (
    <>
      <Style>
        <div className='login-page'>
          <section>
            <img className='img-ilustrativa-login' src={login} alt={"imagem ilustrativa de login"} />
          </section>



          <section className='section-form'>
            <div className='boas-vindas'>
              <h1>Portal Unifesspa F5</h1>
            </div>

            <h3>Login</h3>

            <form onSubmit={handleLogin}>

              <section className='section-input'>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Insira seu email"
                  required
                />
                <br />
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Insira sua senha"
                  required
                />
              </section>

              <button>Entrar</button>


            </form>
          </section>

        </div>
      </Style>
    </>
  );
}

export default Login;