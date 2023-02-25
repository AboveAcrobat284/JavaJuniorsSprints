import styled from "styled-components";

const StyledButton = styled.button`
    position: absolute;
    width: 269px;
    height: 25px;
    left: 409px;
    top: 201px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
    position: absolute;
    width: 331px;
    height: 52px;
    left: 378px;
    top: 187px;

    background: #0A4A82;
    border-radius: 15px;
    border-color:#0A4A82;
`;

function RegisterButtonA({ type, value}) {
    return ( 
        <StyledButton type={type}>{value}</StyledButton>
     );
}

export default RegisterButtonA;