import Carousel from 'react-bootstrap/Carousel';
import mino from "../assets/Slider/mino.jpg"
import Mulliner from "../assets/Slider/Mulliner.jpg"
import Radiant from "../assets/Slider/Radiant.png"
import Wallpaper from "../assets/Slider/Wallpaper.jpg"
import supersport from "../assets/Slider/supersport.jpg"
import bakusa from "../assets/Slider/bakusa.jpg"
import baribasha from "../assets/Slider/baribasha.jpg"
import masa from "../assets/Slider/masa.jpg"
import milano from "../assets/Slider/milano.jpg"




function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={Wallpaper} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={mino} alt="" />
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={supersport} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Radiant} alt="" />
      </Carousel.Item>

     
        <Carousel.Item>
            <img src={Mulliner} alt="" />
        </Carousel.Item>
        <Carousel.Item>
        <img src={mino} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={bakusa} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={baribasha} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={masa} alt="" />
      </Carousel.Item>
        <Carousel.Item>
        <img src={milano} alt="" />
      </Carousel.Item>


    </Carousel>
  );
}

export default Slider