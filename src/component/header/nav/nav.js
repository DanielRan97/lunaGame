import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './nav.module.css';
import WithClass from '../../../hoc/withClass/withClass';

const Nav = () => {

    return (
        <Aux>
            <h2 className={classes.title}>lunaGames</h2>
        </Aux>
    );
  };

  export default WithClass(Nav,classes.Nav);