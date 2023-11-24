import { ListTech, ItemTech } from './Technologies.styled';
import { Container, Section, Header } from '../App.styled';

import HTMLImgX1 from '../../images/technologies/html5_dd-1x.png';
import HTMLImgX2 from '../../images/technologies/html5_dd-2x.png';
import CSSImgX1 from '../../images/technologies/css3_dd-1x.png';
import CSSImgX2 from '../../images/technologies/css3_dd-2x.png';
import SASSImgX1 from '../../images/technologies/sass_dd-1x.png';
import SASSImgX2 from '../../images/technologies/sass_dd-2x.png';
import GITImgX1 from '../../images/technologies/git_dd-1x.png';
import GITImgX2 from '../../images/technologies/git_dd-2x.png';
import JSImgX1 from '../../images/technologies/js_dd-1x.png';
import JSImgX2 from '../../images/technologies/js_dd-2x.png';
import REACTImgX1 from '../../images/technologies/react_dd-1x.png';
import REACTImgX2 from '../../images/technologies/react_dd-2x.png';
import REDUXImgX1 from '../../images/technologies/redux_dd-1x.png';
import REDUXImgX2 from '../../images/technologies/redux_dd-2x.png';
import RESTImgX1 from '../../images/technologies/rest_dd-1x.png';
import RESTImgX2 from '../../images/technologies/rest_dd-2x.png';
import NODEImgX1 from '../../images/technologies/node_dd-1x.png';
import NODEImgX2 from '../../images/technologies/node_dd-2x.png';
import MONGODBImgX1 from '../../images/technologies/mongodb_dd-1x.png';
import MONGODBImgX2 from '../../images/technologies/mongodb_dd-2x.png';
import MYSQLImgX1 from '../../images/technologies/mysql_dd-1x.png';
import MYSQLImgX2 from '../../images/technologies/mysql_dd-2x.png';
import WEBPACKImgX1 from '../../images/technologies/webpack_dd-1x.png';
import WEBPACKImgX2 from '../../images/technologies/webpack_dd-2x.png';

const Technologies = () => {
  return (
  <Container>
    <Section>
      <Header id="technologies">
        Technologies
      </Header>
      <ListTech>
        <ItemTech>
          <img 
            srcset={`${HTMLImgX1} x1, ${HTMLImgX2} x2`}
            src={HTMLImgX1} 
            alt="HMTL5" 
            width="280"
          /> 
        </ItemTech>

        <ItemTech>
        <img 
            srcset={`${CSSImgX1} x1, ${CSSImgX2} x2`}
            src={CSSImgX1} 
            alt="CSS3" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${SASSImgX1} x1, ${SASSImgX2} x2`}
            src={SASSImgX1} 
            alt="SASS" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${GITImgX1} x1, ${GITImgX2} x2`}
            src={GITImgX1} 
            alt="GIT" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${JSImgX1} x1, ${JSImgX2} x2`}
            src={JSImgX1} 
            alt="JavaScript" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${REACTImgX1} x1, ${REACTImgX2} x2`}
            src={REACTImgX1} 
            alt="REACT" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${REDUXImgX1} x1, ${REDUXImgX2} x2`}
            src={REDUXImgX1} 
            alt="REDUX" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${RESTImgX1} x1, ${RESTImgX2} x2`}
            src={RESTImgX1} 
            alt="REST API" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${NODEImgX1} x1, ${NODEImgX2} x2`}
            src={NODEImgX1} 
            alt="NODE JS" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${MONGODBImgX1} x1, ${MONGODBImgX2} x2`}
            src={MONGODBImgX1} 
            alt="MONGODB" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${MYSQLImgX1} x1, ${MYSQLImgX2} x2`}
            src={MYSQLImgX1} 
            alt="MYSQL" 
            width="280" 
          /> 
        </ItemTech>
        <ItemTech>
        <img 
            srcset={`${WEBPACKImgX1} x1, ${WEBPACKImgX2} x2`}
            src={WEBPACKImgX1} 
            alt="WEBPACK" 
            width="280" 
          /> 
        </ItemTech>
      </ListTech>
    </Section>
  </Container>  
  )
}

export default Technologies;