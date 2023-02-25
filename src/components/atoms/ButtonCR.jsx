import styled from "styled-components";

const StyledButton = styled.button`
    position: absolute;
    width: 677px;
    height: 52px;
    left: 381px;
    top: 857px;

    background: #0A4A82;
    border-radius: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    border-color:#0A4A82;
`;

function ButtonCR({ type, value}) {
    return ( 
        <StyledButton type={type}>{value}</StyledButton>
     );
}

export default ButtonCR;