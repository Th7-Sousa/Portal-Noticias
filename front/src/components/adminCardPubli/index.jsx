import { Style } from './styles'
import IconOptions from "./../../assets/icon-option.svg"

const AdminCardPubli = (prop) => {
    return (
        <>
            <Style>
                <div className="publicacao">
                    <div className="container-img">
                        <img className="img-principal" src={prop.img} alt="Publicação" />
                    </div>

                    <div className="container-titulo">
                        <p>{prop.titulo}</p>
                        <button>
                            <a className="opem-modal-teste" href="#demo-modal">
                                <img className='icon-option' src={IconOptions} alt="Configurações de publicaçao" />
                            </a>
                        </button>
                    </div>
                </div>
            </Style>
        </>
    );
};

export default AdminCardPubli;
