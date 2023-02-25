import styled from 'styled-components';

const StyledInput = styled.input`
    position: absolute;
    width: 446px;
    height: 61px;
    left: 453px;
    top: 357px;
    background: #FFFFFF;
    border-radius: 10px;
    color: black;
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Inputtex({type}) {
    return ( 
        <StyledInput type={type}/>
     );
}

export default Inputtex;
