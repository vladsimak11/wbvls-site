import { Container, Section, Header } from '../App.styled';
import {
  ListProjects,
  ItemProjects,
  DateProjects,
  HeaderProjects,
  TextProjects,
  ImgProjects,
  ButtonsProjects,
} from './Projects.styled';
import Button from '../Button/Button';

import PetImgX1 from '../../images/projects/project-pet_dd-1x.jpg';
import PetImgX2 from '../../images/projects/project-pet_dd-2x.jpg';
import NewsImgX1 from '../../images/projects/project-news_dd-1x.jpg';
import NewsImgX2 from '../../images/projects/project-news_dd-2x.jpg';
import BookImgX1 from '../../images/projects/project-book_dd-1x.jpg';
import BookImgX2 from '../../images/projects/project-book_dd-2x.jpg';
import IceImgX1 from '../../images/projects/project-ice_dd-1x.jpg';
import IceImgX2 from '../../images/projects/project-ice_dd-2x.jpg';
import BarberImgX1 from '../../images/projects/project-barber_dd-1x.jpg';
import BarberImgX2 from '../../images/projects/project-barber_dd-2x.jpg';
import StudioImgX1 from '../../images/projects/project-studio_dd-1x.jpg';
import StudioImgX2 from '../../images/projects/project-studio_dd-2x.jpg';

const Projects = () => {
  return (
    <Container>
      <Section>
        <Header id="projects">Projects</Header>
        <ListProjects>
          <ItemProjects>
            <DateProjects>Aug | 2023</DateProjects>

            <HeaderProjects>Your Pet</HeaderProjects>

            <TextProjects>
              Application for finding a pet. Used such technologies as: React,
              Redux, Axios, Styled Components, Node.js, MongoDB.
            </TextProjects>

            <ImgProjects
              srcset={`${PetImgX1} 350w, ${PetImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={PetImgX1}
              width="350"
              alt="Your Pet"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/your-pet"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/your-pet/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>

          <ItemProjects>
            <DateProjects>Mar | 2023</DateProjects>

            <HeaderProjects>News</HeaderProjects>

            <TextProjects>
              Website for choosing a news. Used such technologies as: HTML5,
              SASS, JavaScript, Rest API, Ajax, Node JS, Parcel.
            </TextProjects>

            <ImgProjects
              srcset={`${NewsImgX1} 350w, ${NewsImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={NewsImgX1}
              width="News"
              alt="Your Pet"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/news"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/news/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>

          <ItemProjects>
            <DateProjects>Jul | 2023</DateProjects>

            <HeaderProjects>Phonebook</HeaderProjects>

            <TextProjects>
              A phonebook connected to Swagger backend API. Used such
              technologies as: React (Hooks, Routers, Redux, Redux Toolkit).
            </TextProjects>

            <ImgProjects
              srcset={`${BookImgX1} 350w, ${BookImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={BookImgX1}
              width="350"
              alt="Phonebook"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/phonebook"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/phonebook/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>

          <ItemProjects>
            <DateProjects>Jun | 2023</DateProjects>

            <HeaderProjects>Ice-cream</HeaderProjects>

            <TextProjects>
              A landing page with responsive layout, burger menu, modal windows.
              Technologies: HTML5, SASS, BEM, JavaScript, Parcel.
            </TextProjects>

            <ImgProjects
              srcset={`${IceImgX1} 350w, ${IceImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={IceImgX1}
              width="350"
              alt="Ice-cream"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/ice-cream"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/ice-cream/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>

          <ItemProjects>
            <DateProjects>Dec | 2022</DateProjects>

            <HeaderProjects>Barbershop</HeaderProjects>

            <TextProjects>
              A landing page with a responsive layout, burger menu, modal
              window, animation. Technologies: HTML5, SASS, BEM.
            </TextProjects>

            <ImgProjects
              srcset={`${BarberImgX1} 350w, ${BarberImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={BarberImgX1}
              width="350"
              alt="Barbershop"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/Barbershop"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/Barbershop/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>

          <ItemProjects>
            <DateProjects>Nov | 2022</DateProjects>

            <HeaderProjects>Studio</HeaderProjects>

            <TextProjects>
              A website with a responsive layout, burger menu, modal window.
              Used such technologies as: HTML5, SASS, BEM.
            </TextProjects>

            <ImgProjects
              srcset={`${StudioImgX1} 350w, ${StudioImgX2} 700w`}
              sizes="(min-width: 1280px) 350px, 100vw"
              src={StudioImgX1}
              width="350"
              alt="Studio"
            />

            <ButtonsProjects>
              <Button
                name="Code"
                link="https://github.com/vladsimak11/Studio"
                colorText
                isMobile
              />
              <Button
                name="Demo"
                link="https://vladsimak11.github.io/Studio/"
                primary
                isMobile
              />
            </ButtonsProjects>
          </ItemProjects>
        </ListProjects>
      </Section>
    </Container>
  );
};

export default Projects;
