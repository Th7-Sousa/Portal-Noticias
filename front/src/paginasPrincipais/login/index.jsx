import { Style } from './styles'
import logo from './../../assets/logotipof5.png'

const Login = () => {

  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <>
      <Style>
        <div className='login-page'>


          <div className='modal'>

            <div className='boas-vindas'>
              <h1>Portal Unifesspa F5</h1>
            </div>

            <form onSubmit={handleLogin} >

              <h3>Login</h3>

              <input type='email' placeholder='Insira seu email' />
              <input type='password' placeholder='Insira sua senha' />

              <button type='submit'>Entrar</button>

            </form>

            <section className='section-link'>
              <p>Não possui uma conta?
                <a className='link-login' href="/">Cadastre-se</a
                ></p>
            </section>

            <section className='section-logo'>
              <img className='logo' src={logo} alt="Logo F5" />
            </section>
            <a href="/gerenciarPublicacoes">Admin</a>
          </div>

        </div>
      </Style>
    </>
  )
}

export default Login;