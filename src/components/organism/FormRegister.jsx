import { Link } from "react-router-dom";
import H1Register from "../atoms/H1Register";
import Pregister from "../atoms/Pregister";
import RegisterButtonA from "../atoms/RegisterButtonA";
import RegisterButtonT from "../atoms/RegisterButtonT";
import Pname from "../atoms/Pname";
import Puser from "../atoms/Puser";
import Pmail from "../atoms/Pmail";
import PRpassword from "../atoms/PRpassword";
import Plasname from "../atoms/Plasname";
import Inputname from "../atoms/Inputname";
import Inputlastname from "../atoms/Inputlastname";
import Inputmail from "../atoms/Inputmail";
import Inputuser from "../atoms/Inputuser";
import InputRpassword from "../atoms/InputRpassword";
import ButtonRR from "../atoms/ButtonRR";
import ButtonCR from "../atoms/ButtonCR";

function FormRegister() {
    return ( 
        <>
        <H1Register>Registrate</H1Register>
        <Pregister>!Es rapido y facil!</Pregister>
        <RegisterButtonA type={"button"} value={"Registrarse como Académico"}></RegisterButtonA>
        <RegisterButtonT type={"button"} value={"Registrarse como Tutor"}></RegisterButtonT>
        <Pname>Nombre</Pname>
        <Plasname>Apellidos</Plasname>
        <Pmail>Correo Electrónico</Pmail>
        <Puser>Nombre de usuario</Puser>
        <PRpassword>Contraseña</PRpassword>
        <Inputname type="text"></Inputname>
        <Inputlastname type="text"></Inputlastname>
        <Inputmail type="mail"></Inputmail>
        <Inputuser type="text"></Inputuser>
        <InputRpassword type="password"></InputRpassword>
        <Link to="/"><ButtonRR type={"button"} value={"Registrarse"}></ButtonRR></Link>
        <Link to="/"><ButtonCR type={"button"} value={"Cancelar"}></ButtonCR></Link>
        </>
     );
}

export default FormRegister;