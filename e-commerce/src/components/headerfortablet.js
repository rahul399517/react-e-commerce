import "../components/headerfortablet.css";
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

function HeaderForTablet() {
  return (
    <div>
      <div id="tabletheader1">
        <div className="row" id="tabletheader1">
          <div className="col-sm-5">
            <img
              id="header1logotablet"
              src="https://i.postimg.cc/JhbKQH5g/logogif.gif"
              alt="Logo not available"
            ></img>
          </div>
          <div className="col-sm-1" id="tabletheader1">
            <button className="form-control" id="searchbuttontablet">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="col-sm-1">
            <button className="form-control" id="cartbuttontablet">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
          <div className="col-sm-1">
            <button className="form-control" id="locationbuttontablet">
              <FontAwesomeIcon icon={faLocationDot} />
            </button>
          </div>
          <div className="col-sm-1">
            <button className="form-control" id="deliverybuttontablet">
              <FontAwesomeIcon icon={faTruckFast} />
            </button>
          </div>
          <div className="col-sm-1">
            <button className="form-control" id="heartbuttontablet">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>

          <div className="col-sm-1">
            <button className="form-control" id="loginbuttontablet">
              <FontAwesomeIcon icon={faUser} />
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="row" id="tabletheader2">
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
    </div>
  );
}
export default HeaderForTablet;
