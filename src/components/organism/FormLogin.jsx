import { Link } from "react-router-dom";
import H1Login from "../atoms/h1Login";
import Plogin from "../atoms/Plogin";
import Inputtex from "../atoms/inputtex";
import Inputpassword from "../atoms/Inputpassword";
import Ppassword from "../atoms/Ppassword";
import ButtonIniciar from "../atoms/ButtonIniciar";
import ButtonCancelar from "../atoms/ButtonCancelar";

function FormLogin() {
    return ( 
        <>
        <H1Login>Iniciar sesión</H1Login>
        <Plogin>Usuario o correo electrónico</Plogin>
        <Inputtex type="text"></Inputtex>

        <Ppassword>Contraseña</Ppassword>
        <Inputpassword type="password"></Inputpassword>
        <Link to="/"><ButtonIniciar type={"button"} value={"Iniciar sesión"}></ButtonIniciar></Link>
        <Link to="/"><ButtonCancelar type={"button"} value={"Cancelar"}></ButtonCancelar></Link>
        </>
     );
}

export default FormLogin;