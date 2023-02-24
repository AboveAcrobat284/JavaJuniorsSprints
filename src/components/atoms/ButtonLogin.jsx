import styled from "styled-components";

const StyledButton = styled.button`
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
    border-radius: 2px;
    border-radius: 5px;
	margin-left: 66em;
	width: 213px;
	height: 36px;
`;

function ButtonLogin({ type, value}) {
    return ( 
        <StyledButton type={type}>{value}</StyledButton>
     );
}

export default ButtonLogin;