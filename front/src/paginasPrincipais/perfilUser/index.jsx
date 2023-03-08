import { Style } from './styles'
import ButtonDefault from './../../components/button-default/index'

const PerfilUser = () => {
    return (
        <>
            <Style>
                <div className='perfilUser-page'>

                    <h1>Perfil do Usuário</h1>

                    <div>
                        <p><b> Nome:</b> <br />
                            Alice da Silva</p>

                        <p><b> Curso:</b> <br />
                            Pedagogia</p>

                        <p><b> Email:</b> <br />
                            alice@gmail.com</p>

                        <a className="opem-modal-teste" href="#openModal-about">
                            <button>Editar Perfil</button>
                        </a>

                    </div>

                    <div id="openModal-about" className="modalDialog">
                        <div>
                            <a href="#close" title="Close" className="close">X</a>

                            <form>
                                <h4>Editar perfil</h4>
                                <label >Nome</label>
                                <input value='Alice da Silva' type="text" />

                                <label >Curso</label>
                                <input value='Pedagogia' type="text" />

                                <label >Email</label>
                                <input value='alice@gmail.com' type="text" />

                                <button className='btn-salvar'>Salvar Alterações</button>
                            </form>
                        </div>
                    </div>

                </div>
            </Style>
        </>
    );
};

export default PerfilUser;