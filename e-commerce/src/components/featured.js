import "./featured.css";
import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import Featuredmobile from "../components/featuredmobile";
function Featured() {
  return (
    <div>
      <Featuredmobile />

      <div id="featured">
        <div className="row">
          <div className="col-sm-12">
            <p style={{ fontFamily: "georgia", zIndex: "-5" }}>
              <h5>.. Featured Products ..</h5>
            </p>
          </div>
        </div>
        <CCarousel controls>
          <CCarouselItem>
            <div
              className="row"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(10, 10, 10, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPRAIN-AND-RAIGULS65146B08CF066/1570613720898_1..jpg?imwidth=320&impolicy=hq"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18289478/zoom_0-1648621739.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18387667/zoom_0-1653896305.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18341938/zoom_0-1650864407.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18387663/pri_175_p-1653896305.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CCarouselItem>
          <CCarouselItem>
            <div
              className="row"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(10, 10, 10, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18876169/zoom_0-1671118745.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18754727/zoom_0-1670138032.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18524435/zoom_0-1663386866.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18474105/zoom_0-1661592672.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18344832/zoom_0-1650892370.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CCarouselItem>
          <CCarouselItem>
            <div
              className="row"
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(10, 10, 10, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div className="col-sm-1"></div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18445072/zoom_0-1658736348.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18649460/zoom_1-1668003469.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18526052/zoom_0-1663846469.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18473271/zoom_0-1661148364.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="card" id="cardbox" style={{ margin: "10px" }}>
                  <img
                    class="card-img-top"
                    id="cardboximg"
                    src="https://img3.junaroad.com/uiproducts/18595209/zoom_0-1666008062.jpg"
                    alt="image not available"
                  ></img>
                  <div class="card-body">
                    <p
                      class="card-title"
                      id="carttitle"
                      style={{ textAlign: "center" }}
                    >
                      <b>Luckhnovi Kurta</b>
                    </p>
                    <p class="card-text" style={{ textAlign: "center" }}>
                      Flat 50% off
                    </p>
                    <button className="btn btn-primary" id="cardbutton">
                      <b style={{ fontWeight: "400" }}>order now</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
}
export default Featured;
