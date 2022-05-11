import { Carousel } from "react-bootstrap"

export function Slideshow() {
    return (
        <section className="banner-slides"> 

            <Carousel>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../assets/background/f1.jpeg')}
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../assets/background/f2.jpeg')}
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../assets/background/f3.jpeg')}
                    alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
            
        </section>
    )
}
