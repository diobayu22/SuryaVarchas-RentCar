
import LogoCar from '../assets/images/mobil.jpg';
import LogoOur from '../assets/images/logo.png';

const Login = () => {
    return (
        <div className="container">
            <div className="kiri">
                <form action="login" method="post">
                    <div className="textbox">
                        <label>Username</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="textbox">
                        <label>Password</label>
                        <input type="password" name="password" id="password" required />
                        <span className="password-toggle-icon"><i className="fas fa-eye"></i></span>
                    </div>
                    <a className="lupa" href="">Lupa password ?</a>
                    <div className="form-login-remember">
                        <div className="remember">
                            <input type="checkbox" value="true" name="checkbox" id="remember" />
                            <label>Remember me</label >
                        </div>
                        <button type="submit">Log in</button>
                    </div>
                    <div className="belum">
                        <label>Belum punya akun? <a href="">Daftar Disini</a></label>
                    </div>
                </form>
            </div>
            <div className="kanan">
                <div className="blur">
                    <div className="orange"></div>
                    <img className="mobil" src={LogoCar} />
                    <img className="logo" src={LogoOur} />
                </div>
            </div>
        </div>
    );
};

export default Login;