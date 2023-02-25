import styled from "styled-components";

const StyledButton = styled.button`
position: absolute;
width: 446px;
height: 61px;
left: 453px;
top: 650px;

background: #0A4A82;
border-radius: 15px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 35px;
border: #FFFEFE;
color: #FFFFFF;
`;

function ButtonIniciar({ type, value}) {
    return ( 
        <StyledButton type={type}>{value}</StyledButton>
     );
}

export default ButtonIniciar;