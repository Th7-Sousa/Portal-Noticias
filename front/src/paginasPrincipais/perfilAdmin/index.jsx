import { Style } from './styles'

const PerfilAdmin = () => {
    return (
        <>
            <Style>
                <div className='perfilAdmin-page'>

                    <h1>Perfil do Administrador</h1>

                    <div className='dados'>
                        <p><b> Nome:</b> <br />
                            Epaminôndas Glaciatus</p>

                        <p><b> Email:</b> <br />
                            epa@gmail.com</p>

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

export default PerfilAdmin;