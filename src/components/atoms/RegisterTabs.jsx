import styled from "styled-components";

const StyledButton = styled.button`
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
    background: var(--primary-color);
    color: #fff;
`;

function RegisterTabs({ type, value}) {
    return (
        <StyledButton type={type}>{value}</StyledButton>
    );
}




export default RegisterTabs;