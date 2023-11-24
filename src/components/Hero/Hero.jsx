import Button from '../Button/Button';
import { SectionHero, HeaderHero } from './Hero.styled';

const Hero = () => {
  return (
    <SectionHero id="home">
      <HeaderHero>
        Effective modern ideas and solutions <br/>for
        your business
      </HeaderHero>
      <Button name="Hire Me" link="mailto:svv.workmail11@gmail.com" primary isMobile />
    </SectionHero>
  )
}

export default Hero;