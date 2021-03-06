import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: ${({ theme }) => theme.colors.header};
padding: 40px 0;
`

export const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

svg {
    font-size: 65px;
}

span{
    font-size: 70px;
    margin-left: 10px;
}

@media(max-width: ${({ theme }) => theme.mobile}){
    flex-direction: column;
}
`

export const Image = styled.img`
width: 375px;
margin-left: 40px;
border-radius: 20px;

@media(max-width: ${({ theme }) => theme.mobile}){
    margin: 40px 0 30px;
}

`