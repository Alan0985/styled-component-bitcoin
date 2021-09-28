import { StyledHeader, StyledNav, Logo, Image } from "./Styled/StyledHeader"
import { StyledContainer } from './Styled/StyledContainer'
import { StyledButton } from './Styled/StyledButton'
import { StyledFlex } from './Styled/StyledFlex'
import { FaBitcoin } from 'react-icons/fa'

export const Header = () => (
    <StyledHeader>
        <StyledContainer>
            <StyledNav>
                <div>
                    <FaBitcoin />
                    <span>Bitcoin</span>
                </div>
                <StyledButton>Give It A Go</StyledButton>
            </StyledNav>

            <StyledFlex>
                <div>
                    <h1>Future. Revolutionary. Decentralized. Magic. Epic.</h1>
                    <p>
                        Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
                    </p>
                    <StyledButton bg="#000000" color="#fff">
                        Get Started Here
                    </StyledButton>
                </div>

                <Image src='./images/bitcoin2.png' />

            </StyledFlex>

        </StyledContainer>
    </StyledHeader>
)