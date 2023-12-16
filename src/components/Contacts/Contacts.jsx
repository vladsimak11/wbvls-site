import { Container, Section, Header } from '../App.styled';
import { ListContacts, ItemContacts, Icon, TextContacts, LinkContacts } from './Contacts.styled';
import icon from '../../images/icons.svg';
import { useScreenDetector } from "../useScreenDetector/useScreenDetector";

const Contacts = () => {
  const { isDesktop } = useScreenDetector();

  return (
  <Container>
    <Section>
      <Header id="contacts">
        Contacts
      </Header>
      <ListContacts>
        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-location`}></use>
            </Icon>
          </div>
          
          <div>
            <TextContacts>
              Kyiv, Ukraine
            </TextContacts>
          </div>
        </ItemContacts>

        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-phone`}></use>
            </Icon>
          </div>
          
          <div>
            <LinkContacts href="tel:+380637283120" target="_blank">
              {isDesktop ? '+380637283120' : 'Phone'}
            </LinkContacts>
          </div>
        </ItemContacts>

        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-telegram`}></use>
            </Icon>
          </div>
          
          <div>
            <LinkContacts href="https://t.me/vladsimak11" target="_blank">
              Telegram
            </LinkContacts>
          </div>
        </ItemContacts>


        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-gmail`}></use>
            </Icon>
          </div>
          
          <div>
            <LinkContacts href="mailto:svv.workmail11@gmail.com" target="_blank">
              {!isDesktop ? 'Email' : 'svv.workmail11@gmail.com'} 
            </LinkContacts>
          </div>
        </ItemContacts>

        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-linkedin`}></use>
            </Icon>
          </div>
          
          <div>
            <LinkContacts href="https://www.linkedin.com/in/vladyslav-simak-front-end/" target="_blank">
              LinkedIn
            </LinkContacts>
          </div>
        </ItemContacts>

        <ItemContacts>
          <div>
            <Icon width={64} >
              <use href={`${icon}#icon-github`}></use>
            </Icon>
          </div>
          
          <div>
            <LinkContacts href="https://github.com/vladsimak11?tab=repositories" target="_blank">
              Github
            </LinkContacts>
          </div>
        </ItemContacts>
      </ListContacts>
    </Section>
  </Container>    
  )
}

export default Contacts;