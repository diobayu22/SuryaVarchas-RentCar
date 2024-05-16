// import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/images/Group 1000004155.png";
// import TestImage from '../assets/images/image_13.png'

const Main = () => {
    return (
        <div className="banner">
            <img className="image-car" src={HeroImage} />
            <div className="text-center moto">
                <span className="text-center ">Perjalanan Anda Dimulai Saat Ini,</span>
                <br />
                <span className="text-center">Dimana Jalan Bertemu Kenyamana</span>
            </div>
        </div>
    );
};

export default Main;