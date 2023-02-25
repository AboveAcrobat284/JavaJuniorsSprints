import '../../assets/styles/Header.css'
import ButtonRegister from '../atoms/ButtonRegister';
import ButtonLogin from '../atoms/ButtonLogin';
import Title from '../atoms/Title';
import TextP from '../atoms/TextP';
import { Link } from "react-router-dom";
import Logo from '../atoms/Logo';

function Header() {

    return (
        <>

            <section class="tabs">
                <Link to="/login"><ButtonLogin type={"btn btn-rounded"} value={"Iniciar sesión"}></ButtonLogin></Link>
            </section>

            <header class="showcase">
                <div class="showcase-top">
                    <Logo src="\src\assets\img\logo-JR.png"></Logo>
                </div>


                <div class="showcase-content">
                    <Title>¡Si puedes imaginarlo, puedes programarlo!</Title>
                    <TextP>Los mejores en el campo autodidacta</TextP>
                    <Link to="/register"><ButtonRegister type={"btn btn-xl"} value={"Registrarse"}><i></i></ButtonRegister></Link>
                </div>
            </header>

        </>
    )
}

export default Header;