import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HalamanHome = () => {
  let navigate = useNavigate();
  return (
    <div className="halamanhome">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Selamat Datang <br /> Di Website Visual Capture Id{" "}
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                laudantium recusandae eos sunt asperiores iusto sint odio
                perferendis. Omnis consequuntur ad id quia perspiciatis non
                beatae fugit perferendis repellat quod.
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"
                id="aboutbutton"
                onClick={() => navigate("/about")}
              >
                Tentang Saya
              </button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HalamanHome;
