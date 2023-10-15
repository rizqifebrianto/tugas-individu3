import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const KomponenFooter = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">VisualCaptureId</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="no">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6289508730553</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">rizqifiesta@gmail.com</p>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <p className="text-center px-md-0 px-3">
                &copy; Copyright {new Date().getFullYear()} by{" "}
                <span className="fw-bold">Rzqifst</span> All Right Reserved
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default KomponenFooter;
