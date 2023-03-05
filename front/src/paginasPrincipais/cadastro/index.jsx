import { Style } from './styles'
import logo from './../../assets/logotipof5.png'

const Cadastro = () => {

    function handleCadastro(event) {
        event.preventDefault();
    }

    return (
        <>
            <Style>
                <div className='cadastroPage'>

                    <div className='modal'>

                        <div className='boas-vindas'>
                            <h1>Bem vindo ao Portal Unifesspa F5 !</h1>
                        </div>

                        <form onSubmit={handleCadastro} >

                            <h3>Cadastre-se</h3>

                            <input type='text' placeholder='Insira seu nome' />
                            <input type='email' placeholder='Insira seu email' />
                            <input type='password' placeholder='Criar senha' />

                            <button type='submit'>Criar conta</button>
                        </form>

                        <section className='section-link'>
                            <p>Já possui conta?
                                <a className='link-login' href="/login">Login</a
                                ></p>
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