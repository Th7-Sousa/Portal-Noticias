import notfound from "./../../assets/notfound.jpg";
import errorFound from "./../../assets/404-error.svg";
import { Style } from "./styles";

const NotFound = () => {
    return (
        <div>
            <Style>
                <div className="not-found-page">
                    <div className="content-img-main">
                        <img src={notfound} alt="404 error" />
                    </div>

                    <div className="content-mesage">
                        <h2>Desculpe, mas essa página não existe!</h2>
                        <img src={errorFound} alt="Ícone 404" />
                    </div>

                    <div className="content-back">
                        <a href="javascript: history.go(-1)">Voltar a página anterior</a>
                    </div>
                </div>
            </Style>
        </div>
    );
};

export default NotFound;
