import LogoImg1 from '../../images/webvelsi-logo_dd-1x.png';
import LogoImg2 from '../../images/webvelsi-logo_dd-2x.png';

const Logo = () => {
  return (
    <div>
      <a href="/wbvls-site">
        <img 
          srcset={`${LogoImg1} x1, ${LogoImg2} x2`}
          src={LogoImg1} 
          alt="Logo Webvelsi" 
        />
      </a>
    </div>
  );
};

export default Logo;
