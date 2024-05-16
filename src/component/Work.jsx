import LogoOne from '../assets/logos/Frame 2.svg';

import LogoThree from '../assets/logos/frame 4.svg';
import LogoFourth from '../assets/logos/frame 5.svg';
import LogoFive from '../assets/logos/frame 6.svg';


const Work = () => {
    return (
        <div>

            <div className="text-center pt-5 pb-5">
                <h1>Cara Kerja</h1>
                <span className="cara-kerja-1"> Berikut Adalah Cara Kerja Kami</span>
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col ">
                        <div className="orange-box">
                            <img className="logo-note pb-3" src={LogoOne} />
                            <h5>Pilih Lokasi</h5>
                            <span>tentukan lokasi penjemputan anda dan drop terlebih dahulu ya
                            </span>
                        </div>
                    </div>
                    <div className=" col">
                        <div className="orange-box">
                            <img className="logo-note  pb-3" src={LogoThree} />
                            <h5>Pilih Mobil</h5>
                            <span>Tentukan Mobil Yang Anda Sukai</span>
                        </div>
                    </div>
                    <div className=" col">
                        <div className="orange-box">
                            <img className="logo-note  pb-3" src={LogoFourth} />
                            <h5>Tanggal Dan Waktu</h5>
                            <span>Tentukan Tanggal Dan Waktu</span>

                        </div>
                    </div>
                    <div className=" col">
                        <div className="orange-box">
                            <img className="logo-note  pb-3" src={LogoFive} />
                            <h5>Pembayaran</h5>
                            <span>Lakukan Pembayaran Pilih Dengan Sistem Cash Atau DP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Work;