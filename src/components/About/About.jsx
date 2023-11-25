import { AboutBlock, AboutPicture, AboutInfo, AboutText, AboutSpan } from './About.styled';
import { Container, Section, Header } from '../App.styled';
import Button from '../Button/Button';
import AboutImgX1 from '../../images/about/about_dd-1x.jpg';
import AboutImgX2 from '../../images/about/about_dd-2x.jpg';

const About = () => {
  return (
    <Container>
      <Section>
        <Header id="about">
          About Me
        </Header>
        <AboutBlock>
          <AboutPicture>
            <picture>
            <source  
              media="(min-width: 1280px)" 
              srcset={`${AboutImgX1} 1x, ${AboutImgX2} 2x`}
            />
            <img src={AboutImgX1} alt="Simak Vladyslav" width="500" />
            </picture>
          </AboutPicture>
          <AboutInfo>
            <AboutText>
              Hello! <AboutSpan>My name is Vladyslav</AboutSpan>. I am a <AboutSpan>Junior Full Stack Developer</AboutSpan>. And I am actively developing in this direction. In addition to this, I have experience with implementing both individual and team projects.
            </AboutText>

            <AboutText>
              I want to grow as a Front/Back/Full Stack Developer and put into practice my knowledge and experience. 
            </AboutText>

            <AboutText>
              My keen attention to detail and dedication to solving any problem at hand will help me to be part of your company's growth. 
            </AboutText>

            <AboutText>
              If you agree that I would be a good fit for your company or project. I'm ready to chatting with you. 
            </AboutText>

            <AboutText>
              <AboutSpan>Thank you for your time and attention!</AboutSpan>
            </AboutText>

            <Button name="My developer certificate" link="https://drive.google.com/file/d/1VPS_BAn2dMrqSxBjQZ74p5z83aDMUug0/view?usp=drive_link" primary diploma isMobile />
          </AboutInfo>
        </AboutBlock>
      </Section>
    </Container>
  )
}

export default About;