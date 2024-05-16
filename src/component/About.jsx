import ImageCard from '../assets/images/Kiri.png';
import LogoOne from '../assets/logos/fr-1.svg';
import LogoTwo from '../assets/logos/fr-2.svg';
import LogoThree from '../assets/logos/fr-3.svg';


const About = () => {
    return (
        <div >
            <section id="about-me">
                <div className="container">
                    <div className="row">
                        <div className="hehe">
                            <h1>Tentang Kami</h1>
                        </div>
                        <div className="col-md-6 wow fadeInLeft">
                            <img src={ImageCard} className="img-fluid" />
                        </div>
                        <div className="col-md-6 wow fadeInDown">

                            <div className="about-box">
                                <div className="about-left">
                                    <img src={LogoOne} />
                                </div>
                                <div className="about-right">
                                    <h4>Certified Trainers</h4>
                                    <p>Like This Video and Subcribe Easy Tutorails Channel to watch more videos for developing
                                        Website</p>
                                </div>
                            </div>

                            <div className="about-box">
                                <div className="about-left">
                                    <img src={LogoTwo} />
                                </div>
                                <div className="about-right">
                                    <h4>Free Consultation</h4>
                                    <p>Like This Video and Subcribe Easy Tutorails Channel to watch more videos for developing
                                        Website</p>
                                </div>
                            </div>

                            <div className="about-box">
                                <div className="about-left">
                                    <img src={LogoThree} />
                                </div>
                                <div className="about-right">
                                    <h4>Flexible Time</h4>
                                    <p>Like This Video and Subcribe Easy Tutorails Channel to watch more videos for developing
                                        Website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>


    );
};

export default About;