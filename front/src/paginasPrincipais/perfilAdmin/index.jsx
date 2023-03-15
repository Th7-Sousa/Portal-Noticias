import React from 'react';
import { Style } from './styles'
import { useNavigate } from "react-router-dom";

import CloseIcon from "./../../assets/close-icon.svg"

const PerfilAdmin = () => {

    function Voltar() {
        window.history.back();
    }

    const navigate = useNavigate();

    return (
        <>
            <Style>
                <div className='perfilAdmin-page'>
                    <div>
                        <a href='/gerenciarPublicacoes' className='voltar'>Voltar</a>
                    </div>

                    <div className='dados'>

                        <div className='dados-titulo'>
                            <h1>Perfil do Administrador</h1>
                        </div>

                        <p><b> Nome:</b> <br />
                            Epaminôndas Glaciatus</p>

                        <p><b> Email:</b> <br />
                            epaminodas@gmail.com</p>

                        <div className='content-buttons'>
                            <a className="opem-modal-teste" href="#modal-email">
                                <button>Alterar email</button>
                            </a>
                            <a className="opem-modal-teste" href="#modal-senha">
                                <button>Alterar senha</button>
                            </a>
                        </div>

                    </div>

                    <div id="modal-email" class="modal">
                        <div class="modal__content">
                            <h4>Alterar email</h4>

                            <div className="modal-content-buttons">

                                <form>
                                    <input type="email" value='epaminodas@gmail.com' />
                                    <section>
                                        <label>Confirmar senha:</label>
                                        <input type="password" />
                                    </section>
                                    <button id="modal-btn-editar">Salvar alterações</button>
                                </form>


                            </div>

                            <a href="#" class="modal__close"><img className="modal-icon-close" src={CloseIcon} alt="Ícone fechar" /></a>
                        </div>
                    </div>



                    <div id="modal-senha" class="modal">
                        <div class="modal__content">
                            <h4>Alterar senha</h4>

                            <div className="modal-content-buttons">

                                <form>
                                    <section>
                                        <label>Senha atual:</label>
                                        <input type="password" />
                                    </section>
                                    <section>
                                        <label>Nova senha:</label>
                                        <input type="password" />
                                    </section>
                                    <section>
                                        <label>Confirmar nova senha:</label>
                                        <input type="password" />
                                    </section>
                                    <button id="modal-btn-editar">Salvar alterações</button>
                                </form>


                            </div>

                            <a href="#" class="modal__close"><img className="modal-icon-close" src={CloseIcon} alt="Ícone fechar" /></a>
                        </div>
                    </div>

                </div>
            </Style>
        </>
    );
};

export default PerfilAdmin;