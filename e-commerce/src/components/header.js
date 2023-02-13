import "../components/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLocationDot,
  faMagnifyingGlass,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderForTablet from "./headerfortablet";
import HeaderForMobile from "./headerformobile";

function Header() {
  return (
    <div className="header">
      <div className="row" id="header1">
        <div className="col-sm-2">
          <img
            id="header1logo"
            src="https://i.postimg.cc/JhbKQH5g/logogif.gif"
            alt="Logo not available"
          ></img>
        </div>
        <div className="col-sm-4">
          <form class="searchbox">
            <input
              class="form-control"
              type="text"
              id="searchbox"
              placeholder="Search"
            ></input>
            <button
              class="btn btn-primary form-control"
              type="submit"
              id="buttonsearch"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
        <div className="col-sm-1">
          {" "}
          <button classNode="form-control" id="cartbutton">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
        <div className="col-sm-1">
          <button className="form-control" id="locationbutton">
            <FontAwesomeIcon icon={faLocationDot} />
          </button>
        </div>
        <div className="col-sm-1">
          <button className="form-control" id="deliverybutton">
            <FontAwesomeIcon icon={faTruckFast} />
          </button>
        </div>
        <div className="col-sm-1">
          <button className="form-control" id="heartbutton">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <div className="col-sm-2">
          <button type="button" className="form-control" id="loginbutton">
            <FontAwesomeIcon icon={faUser} />
            Login/Signup
          </button>
        </div>
      </div>
      <div className="row" id="header2">
        <div className="col-sm-2">
          <button className="form-control" id="homenav">
            {" "}
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              Home
            </h5>
          </button>
        </div>
        <div className="col-sm-2">
          <button className="form-control" id="allproductnav">
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              {" "}
              All Product
            </h5>
          </button>
        </div>
        <div className="col-sm-2">
          <button className="form-control" id="womennav">
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              {" "}
              Women
            </h5>

            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                All Product's
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Dress
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Pant's
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Skirt's
              </h5>
            </button>
          </button>
        </div>
        <div className="col-sm-2">
          <button className="form-control" id="mennav">
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              {" "}
              Men
            </h5>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                All Products
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Shirt's
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Pant's
              </h5>
            </button>
            <button className="form-control" id="womennavdrop">
              <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
                Hoodie's
              </h5>
            </button>
          </button>
        </div>
        <div className="col-sm-2">
          <button className="form-control" id="kidnav">
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              Kids
            </h5>
          </button>
        </div>
        <div className="col-sm-2">
          <button className="form-control" id="contactnav">
            <h5 style={{ fontFamily: "gerogia", textAllign: "centre" }}>
              Contact Us
            </h5>
          </button>
        </div>
      </div>
      <HeaderForTablet />
      <HeaderForMobile />
    </div>
  );
}
export default Header;
