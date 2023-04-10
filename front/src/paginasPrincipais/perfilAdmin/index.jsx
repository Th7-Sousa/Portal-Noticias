import React, { useState, useEffect } from 'react';
import { Style } from './styles'
import { useNavigate } from "react-router-dom";
import CloseIcon from "./../../assets/close-icon.svg"

const PerfilAdmin = () => {
    const [email, setEmail] = useState('thiagof.profissional@gmail.com');
    const navigate = useNavigate();

    const [admin, setAdmin] = useState([]);

    function Voltar() {
        window.history.back();
    }

    useEffect(() => {
        async function getAdmin() {
            try {
                const response = await axios.get('http://localhost:3001/admin');
                setAdmin(response.data);

            } catch (error) {
                console.log(error);
            }
        }
        getAdmin();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dados do admin atualizados:', data);
                // Atualiza o email do admin no estado
                setEmail(data.email);
                // Fecha o modal
                const modal = document.getElementById('modal-email');
                modal.classList.remove('open');
            })
            .catch((error) => {
                console.error('Erro ao atualizar os dados do admin:', error);
            });
    }

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
                            Thiago Fernandes</p>

                        <p><b> Email:</b> <br />
                            {email}</p>

                        <div className='content-buttons'>
                            <a className="opem-modal-teste" href="#modal-email">
                                <button>Alterar email</button>
                            </a>

                        </div>

                    </div>

                    <div id="modal-email" className="modal">
                        <div className="modal__content">
                            <h4>Alterar email</h4>

                            <div className="modal-content-buttons">

                                <form onSubmit={handleSubmit}>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                                    <button id="modal-btn-editar">Salvar alterações</button>
                                </form>

                            </div>

                            <a href="#" className="modal__close"><img className="modal-icon-close" src={CloseIcon} alt="Ícone fechar" /></a>
                        </div>
                    </div>
                </div>
            </Style>
        </>
    );
};

export default PerfilAdmin;
