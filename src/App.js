import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

import { GlobalStyles } from './GlobalStyle';
import { StyledContainer } from './components/Utils/StyledContainer';
import items from './items'

const theme = {
  colors: {
    header: '#F5CA28',
    body: '#fff',
    footer: '#f7d55b'
  },
  mobile: '768px'
}

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      <StyledContainer>
        {items.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </StyledContainer>

      <Footer />

    </>
  </ThemeProvider>
)


export default App;
