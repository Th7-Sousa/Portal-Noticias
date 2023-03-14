import { Style } from './styles.js'

function NavAdmin() {

    function Voltar() {
        window.history.back();
    }

    return (
        <Style>
            <div className='container-nav'>
                <a className='voltar' onClick={Voltar}>Voltar</a>

                <div className='edit-logout'>
                    <a href="/perfilAdmin" className='editar-perfil' >Perfil</a>
                    <button className='btn-sair' >Sair</button>
                </div>
            </div>

        </Style>

    );
}
export default NavAdmin;