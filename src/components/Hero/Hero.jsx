import Button from '../Button/Button';
import { SectionHero, BlockHero, HeaderHero } from './Hero.styled';
import { Container } from '../App.styled';

const Hero = () => {
  return (
    <SectionHero id="home">
      <Container>
        <BlockHero>
          <HeaderHero>
            Effective modern ideas and solutions <br/>for
            your business
          </HeaderHero>
          <Button name="Hire Me" link="mailto:svv.workmail11@gmail.com" primary isMobile />
        </BlockHero>
      </Container>
    </SectionHero>
  )
}

export default Hero;