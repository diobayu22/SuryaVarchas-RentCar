import LogoSurya from '../assets/images/logo-1.png';
import { Link } from 'react-router-dom';
// import { Garasi } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark  main-nav">

                <div className="container">

                    <a className="navbar-brand" href="#"> <img src={LogoSurya} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto py-2">
                            <li className="nav-item px-3">
                                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                            </li>

                            <li className="nav-item  px-3">
                                <Link className="nav-link" to="/garasi" >Garasi</Link>
                            </li>
                            <Link type="button" to="/login" className="button1 ">Login</Link>

                        </ul>

                    </div>
                </div>
            </nav >


        </div >
    );
};

export default Header;