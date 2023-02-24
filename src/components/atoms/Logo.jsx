import styled from "styled-components";

const StyledImg = styled.img`
    width: 250px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-left: 0;
	padding: 150px 20px 20px 50px;
`;

function Logo({src}) {
    return (
        <StyledImg src={src}></StyledImg>
    );
}




export default Logo;