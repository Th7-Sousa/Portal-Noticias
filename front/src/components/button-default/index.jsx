import { Style } from './styles'

const ButtonDefault = (prop) => {
    return (
        <>
            <Style>
                <button>{prop.name}</button>
            </Style>
        </>
    );
};

export default ButtonDefault;