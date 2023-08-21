import style from "./Forecast.module.css";
import { Row, Col, Container } from "react-bootstrap";

import Forecast1 from "../images/Forecast.png";
import Forecast2 from "../images/Forecast 2.png";
import Forecast3 from "../images/Forecast 3.png";
import Forecast4 from "../images/Forecast 4.png";

export default function Forecast() {
  return (
    <div className={style.main}>
      <div>
        <h5 className={style.tracking}>
          We are tracking excessive heat forecasts
        </h5>
      </div>
      <div>
        <div className={style.tempo}>
          <a
            className={style.link}
            href="https://www.nytimes.com/interactive/2022/us/heat-wave-map-tracker.html"
          >
            <div>
              <h5 className={style.trackingUS}>Dangerous heat in the U.S.</h5>
            </div>
            <div className={style.forecast}>
              <div className={style.colorAll}>
                <div className={style.legend}>
                  <div className={style.danger}></div>
                  <p className={style.level}>Danger</p>
                </div>
                <div className={style.legend}>
                  <div className={style.extreme}></div>
                  <p className={style.level}>Extreme</p>
                </div>
                <div className={style.legend}>
                  <div className={style.caution}></div>
                  <p className={style.level}>Caution</p>
                </div>
              </div>

              <div className={style.days}>
                <Container>
                  <Row>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div className={style.singleDay}>
                        <img className={style.imageForecast} src={Forecast1} />
                        <p className={style.nameDay}>Tuesday</p>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div className={style.singleDay}>
                        <img className={style.imageForecast} src={Forecast2} />
                        <p className={style.nameDay}>Wednesday</p>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div className={style.singleDay}>
                        <img className={style.imageForecast} src={Forecast3} />
                        <p className={style.nameDay}>Thursday</p>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                      <div className={style.singleDay}>
                        <img className={style.imageForecast} src={Forecast4} />
                        <p className={style.nameDay}>Friday</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </a>

          <div className={style.line}></div>
        </div>
      </div>
    </div>
  );
}
