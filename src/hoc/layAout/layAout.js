import Aux from '../Auxiliary/Auxiliary';
import Nav from '../../component/header/nav/nav';
import NavBar from '../../component/header/navBar/navBar';
import MainRouter from '../../router/mainRouter';
const layAout = () => {

    return (
        <Aux>
            <header>
                <Nav />
                <NavBar />
            </header>

            <main>
                <MainRouter />
            </main>
        </Aux>
    );
  };

  export default layAout;