import { Layout, Button, Row, Col, Carousel } from "antd";
import { BsList } from "react-icons/bs";
const { Footer } = Layout;
import Filter from "./Filter";
import "../Styles/style.less";
import SideWindow from "./SideWindow.js";
import { Component } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

class index extends Component {
  state = { nextShow: true, prevShow: false, count: 0 };
  componentDidMount = () => {
    console.log(this.slider);
  };
  next = () => {
    this.setState({ nextShow: false, prevShow: true });
    this.slider.next();
  };
  prev = () => {
    this.setState({ prevShow: false, nextShow: true });
    this.slider.prev();
  };
  render() {
    return (
      <div>
        <Row style={{ display: "flex", flexFlow: "row", width: "100%" }}>
          <Col
            style={{
              width: "73%",
            }}
          >
            <Col className="page_content">
              {this.state.nextShow ? (
                <div className="fa_wrapper2" onClick={this.next}>
                  <RightOutlined
                    style={{ fontSize: "1.2vw", color: "rgb(189, 186, 186)" }}
                  />
                </div>
              ) : null}

              <Carousel
                dots={false}
                draggable={true}
                ref={(c) => (this.slider = c)}
                className="slider_"
              >
                <div className="fix">
                  <Button className="btn main_btn">Wearables</Button>
                  <Button className="btn">Hoodle</Button>
                  <Button className="btn">Male T-shirt</Button>
                  <Button className="btn">Female T-shirt</Button>
                  <Button className="btn">Kids</Button>
                </div>
                <div>
                  <Button className="btn">Dresses</Button>
                  <Button className="btn">Skrits</Button>
                  <Button className="btn">Male T-shirt</Button>
                  <Button className="btn">Female T-shirt</Button>
                  <Button className="btn">Dresses</Button>
                </div>
              </Carousel>
              {this.state.prevShow ? (
                <div className="fa_wrapper1" onClick={this.prev}>
                  <LeftOutlined
                    style={{ fontSize: "1.2vw", color: "rgb(189, 186, 186)" }}
                  />
                </div>
              ) : null}
            </Col>
            <Filter />
          </Col>
          <Col style={{ width: "24%" }}>
            <SideWindow />
          </Col>
        </Row>
        <div className="footer_container">
          <div>
            <span>
              <BsList className="footer_icon" />
              <span className="footer_i_text">Home</span>
            </span>
          </div>
          <Button className="footer_btn">
            <p style={{ fontSize: "14px" }}> checkout</p>
          </Button>
        </div>
      </div>
    );
  }
}
export default index;
