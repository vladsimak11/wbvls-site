import { LinkContact } from './Button.styled';


const Button = ({name, link, primary, download, colorText, diploma, isMobile}) => {
  return download ? (
    <LinkContact to={link} target="_blank" rel="noopener noreferrer" download >
      {name}
    </LinkContact>
  ) : (
    <LinkContact to={link} target="_blank" rel="noopener noreferrer" primary = {primary} colorText = {colorText} diploma={diploma} isMobile={isMobile}>
      {name}
    </LinkContact>
  )
};

export default Button;