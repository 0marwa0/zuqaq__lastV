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
    console.log(this.flkty);
  };
  next = () => {
    console.log(this.flkty, "index");

    this.setState({ nextShow: false, prevShow: true });
    this.flkty.next();
  };
  prev = () => {
    // if (this.flkty.innerSlider.state.currentSlide === 0) {
    this.setState({ prevShow: false, nextShow: true });
    console.log("it true");
    this.flkty.prev();
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
            <Col
              style={{
                width: "90%",

                height: "5%",
                alignItems: "center",

                marginTop: "2%",
                marginBottom: "1%",
                marginLeft: "5%",

                position: "relative",
              }}
            >
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
                ref={(c) => (this.flkty = c)}
                className="slider_"
              >
                <div className="fix">
                  <Button
                    className="btn"
                    style={{
                      backgroundColor: "#3B86FF",
                      border: "none",

                      color: "white",
                    }}
                  >
                    Wearables
                  </Button>
                  <Button className="btn">Hoodle</Button>
                  <Button className="btn">Male T-shirt</Button>
                  <Button className="btn">Female T-shirt</Button>
                  <Button className="btn">Kids</Button>
                </div>
                <div>
                  {" "}
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
        <div
          style={{
            width: "100%",
            height: "10%",
            position: "fixed",
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#24292e",
            // #24292e
            zIndex: "9999",

            padding: "0 2.4%",
          }}
        >
          <div className="footer">
            <span>
              <BsList
                color="white"
                style={{
                  marginBottom: "5px",
                  marginTop: "5px",
                  marginRight: "22px",
                  fontSize: "30px",
                }}
              />
              <span
                style={{
                  fontSize: "16px",
                  height: "2.3%",
                  lineHeight: "2",
                  paddingLeft: "3px",
                }}
              >
                Home
              </span>
            </span>
            <Button
              style={{
                backgroundColor: "#3b86ff",
                color: "white",
                border: "none",
                height: "24px",
                fontSize: "14px",
                padding: " 2 25px",
              }}
            >
              <p style={{ fontSize: "14px" }}> checkout</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
