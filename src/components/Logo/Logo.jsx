import LogoImg200 from '../../images/webvelsi-logo-200.png';
import LogoImg250 from '../../images/webvelsi-logo-250.png';
import LogoImg400 from '../../images/webvelsi-logo-400.png';
import LogoImg500 from '../../images/webvelsi-logo-500.png';

const Logo = () => {
  return (
    <div>
      <a href="/wbvls-site">
        <img 
          srcset={`${LogoImg200} 200w, ${LogoImg250} 250w, ${LogoImg400} 400w, ${LogoImg500} 500w`}
          sizes="(min-width: 768px) 250px, (min-width: 320px) 200px, 100vw"  
          src={LogoImg250} 
          alt="Logo Webvelsi" 
        />
      </a>
    </div>
  );
};

export default Logo;
