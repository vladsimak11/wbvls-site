import { Container, Section, Header } from '../App.styled';
import { ListProjects, ItemProjects, BlockProjects, OverlayProjects, OverlayTextProjects, WrapperProjects, HeaderProjects, ButtonsProjects } from './Projects.styled';
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
    <Header id="projects">
      Projects
    </Header>
    <ListProjects>
      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${PetImgX1} 400w, ${PetImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={PetImgX1} 
            width="400" 
            alt="Your Pet" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>Application for finding a pet. Role: Developer. Used such technologies as: React, Redux, Axios, Styled Components, Node.js, MongoDB.</OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            Your Pet
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/your-pet" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/your-pet/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>

      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${NewsImgX1} 400w, ${NewsImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={NewsImgX1} 
            width="400" 
            alt="News" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>Website for choosing a news. Role: Developer. Used such technologies as: HTML5, SASS, JavaScript, Rest API, Ajax, Node JS, Parcel.              
            </OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            News
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/news" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/news/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>

      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${BookImgX1} 400w, ${BookImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={BookImgX1} 
            width="400" 
            alt="Phonebook" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>A phonebook connected to Swagger backend API - you can register, log in, add, remove or filter contacts, log out. Used such technologies as:  React (Hooks, Routers, Redux, Redux Toolkit).            
            </OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            Phonebook
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/phonebook" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/phonebook/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>

      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${IceImgX1} 400w, ${IceImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={IceImgX1} 
            width="400" 
            alt="Ice-cream" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>A landing page with responsive layout, burger menu, modal windows and attractive design. Used such technologies as: HTML5, SASS, BEM, JavaScript, Parcel.            
            </OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            Ice-cream
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/ice-cream" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/ice-cream/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>

      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${BarberImgX1} 400w, ${BarberImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={BarberImgX1} 
            width="400" 
            alt="Ice-cream" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>A landing page with a responsive layout, burger menu, modal window, animation. Used such technologies as: HTML5, SASS, BEM.            
            </OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            Barbershop
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/Barbershop" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/Barbershop/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>

      <ItemProjects>
        <BlockProjects>
          <img
            srcset={`${StudioImgX1} 400w, ${StudioImgX2} 800w`}
            sizes="(min-width: 1280px) 370px, 100vw" 
            src={StudioImgX1} 
            width="400" 
            alt="Ice-cream" 
          />
            
          <OverlayProjects>
            <OverlayTextProjects>A website with a responsive layout, burger menu, modal window. Used such technologies as: HTML5, SASS, BEM.           
            </OverlayTextProjects>
          </OverlayProjects>
        </BlockProjects>
        
        <WrapperProjects>
          <HeaderProjects>
            Studio
          </HeaderProjects>
          <ButtonsProjects>
            <Button name="Code" link="https://github.com/vladsimak11/Studio" colorText />
            <Button name="Demo" link="https://vladsimak11.github.io/Studio/" primary />
          </ButtonsProjects>
        </WrapperProjects>
      </ItemProjects>
    </ListProjects>
    </Section>
  </Container>  
  )
}

export default Projects;