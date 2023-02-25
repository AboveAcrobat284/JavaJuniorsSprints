import styled from 'styled-components';

const StyledInput = styled.input`
    position: absolute;
    width: 678px;
    height: 40px;
    left: 380px;
    top: 399px;

    background: #FFFFFF;
    border-radius: 10px;
    color: black;
`;

//Para que este componente sea reutilizable - No se puede llamar igual que el elemento del styled
function Inputlastname({type}) {
    return ( 
        <StyledInput type={type}/>
     );
}

export default Inputlastname;
