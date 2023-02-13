import "../components/headerformobile.css";
import "../components/headerfortablet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBible,
  faHeart,
  faLocationDot,
  faMagnifyingGlass,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function HeaderForMobile() {
  return (
    <div>
      <div className="row" id="mobileheader1">
        <div className="col-sm-12">
          <button className="form-control" id="categorybuttonmobile">
            <FontAwesomeIcon icon={faBars} />
            &nbsp; &nbsp;
            <img
              id="header1logomobile"
              src="https://i.postimg.cc/JhbKQH5g/logogif.gif"
              alt="Logo not available"
            ></img>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                Home
              </h5>
            </button>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                All product
              </h5>
            </button>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                Women
              </h5>
            </button>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                Men
              </h5>
            </button>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                Kids
              </h5>
            </button>
            <button className="form-control" id="categorybuttontmobileoption">
              <h5
                id="categorybuttontmobileoption"
                style={{ fontFamily: "gerogia", textAllign: "centre" }}
              >
                Contact Us
              </h5>
            </button>
          </button>
        </div>
      </div>
      <div className="row" id="fixedheadermobile">
        <div className="col-sm-12">
          <button className="form-control" id="cartbuttontablet">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          &nbsp;
          <button className="form-control" id="locationbuttontablet">
            <FontAwesomeIcon icon={faLocationDot} />
          </button>
          &nbsp;
          <button className="form-control" id="deliverybuttontablet">
            <FontAwesomeIcon icon={faTruckFast} />
          </button>
          &nbsp;
          <button className="form-control" id="heartbuttontablet">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="form-control" id="cartbuttontablet">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderForMobile;
