import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel className=' text-danger p-5 '>
            <Carousel.Item >
                <img
                    height={400}
                    className="d-block w-100"
                    src="/img1.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={400}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    height={400}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;