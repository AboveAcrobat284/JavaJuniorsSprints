import styled from "styled-components";

const StyledImg = styled.img`
    width: 100%;
`;

function Imgtabs({src}) {
    return (
        <StyledImg src={src}></StyledImg>
    );
}




export default Imgtabs;