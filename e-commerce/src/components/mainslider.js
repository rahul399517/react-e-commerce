import "../components/mainslider.css";
import { CCarouselCaption } from "@coreui/react";

import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import slider1 from "../image/slider1.gif";
import slider2 from "../image/slider2.gif";
import slider3 from "../image/slider3.gif";

function MainSlider() {
  return (
    <div id="slider" style={{ zIndex: "-5" }}>
      <CCarousel controls indicators style={{ zIndex: "-5" }}>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slider1} alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block">
            <h1>DEBACLE NORTH</h1>
            <p>Fashion start with us.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slider2} alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block">
            <h5></h5>
            <p>.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slider3} alt="Not available" />
          <CCarouselCaption className="d-none d-md-block">
            <h1>Order Now</h1>
            <p>Sale 50%</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
export default MainSlider;
