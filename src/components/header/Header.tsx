import Nav from '../nav/Nav';
import logoNetFlix from '../../assets/logo.png';
import './header.scss'; 
const Header = () => {

    return(
        <div className="header">
            <img src={logoNetFlix} alt="Logo da NetFlix" className='logo' />
            <Nav />
        </div>
    )
}

export default Header;