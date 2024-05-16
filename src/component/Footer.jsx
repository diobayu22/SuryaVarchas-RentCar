import LogoOne from '../assets/logos/logo-footer.svg';
import LogoTwo from '../assets/footer/Group.svg';
import LogoThree from '../assets/footer/Vector.svg';
import LogoFive from '../assets/footer/Vector (1).svg';
import LogoSix from '../assets/footer/Subtract.svg';
import LogoSeven from '../assets/footer/Subtract5.svg';
import LogoEight from '../assets/footer/Subtract (1).svg';


const Footer = () => {
    return (
        <section className=" footer pb-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={LogoOne} className="footer-logo" />
                        <p>Kepuasan Pelanggan Adalah Tujuan Kami</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Kontak Kami</h4>
                        <p><img src={LogoTwo} /> Jl.Ry Popoh,Tulung Agung</p>
                        <p><img src={LogoThree} /> +62 5677 8764 789</p>
                        <p><img src={LogoFive} /> suryavarchas01@gmail.com
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us on</h4>
                        <div className="footer-logo">
                            <img className='footer-lo' src={LogoSix} />
                            <img className='footer-lo' src={LogoSeven} />
                            <img className='footer-lo' src={LogoEight} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Footer;