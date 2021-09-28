import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 40px 0 10px;

ul li {
    margin-bottom: 20px;   
}

p{
    text-align: right;
}

@media (max-width: ${({ theme }) => theme.mobile}){
    text-align: center; 
}

ul{
    padding: 0;
}

p{
    text-align: center;
}

`
