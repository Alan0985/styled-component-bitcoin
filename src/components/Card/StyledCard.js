import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
align-items: center;
background-color: #fff;
border-radius: 15px;
border: 1px solid #F5CA28;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
margin: 40px 0;
padding: 60px;
flex-direction: ${({ layout }) => layout || 'row'};

img {
    width: 90%;
    border-radius: 15px;
    margin: 20px;
}

& > div {
    flex: 1;
}

@media (max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
}
`