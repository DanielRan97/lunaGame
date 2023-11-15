import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './homePage.module.css';
import WithClass from '../../../hoc/withClass/withClass';
import Carousela from './carousel/carousel';


const HomePage = () => {

    return (
        <Aux>
            <Carousela />
        </Aux>
    );
  };

  export default WithClass(HomePage,classes.HomePage);