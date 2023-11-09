import { LinkContact } from './Button.styled';


const Button = ({name, link, primary, download, colorText}) => {
  return download ? (
    <LinkContact to={link} target="_blank" rel="noopener noreferrer" download="CV_Vladyslav_Simak_Fullstack.pdf">
      {name}
    </LinkContact>
  ) : (
    <LinkContact to={link} target="_blank" rel="noopener noreferrer" primary = {primary} colorText = {colorText} >
      {name}
    </LinkContact>
  )
};

export default Button;