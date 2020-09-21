import { Layout, Button, Row, Col } from "antd";
import { BsList } from "react-icons/bs";
const { Footer } = Layout;
import Filter from "../pages/Filter";
import "../Styles/style.less";
import SideWindow from "../pages/SideWindow.js";

const index = () => {
  return (
    <div>
      <Row style={{ display: "flex", flexFlow: "row", width: "100%" }}>
        <Col
          style={{
            flex: "1 1 73%",
            width: "50%",
          }}
        >
          <Filter />
        </Col>
        <Col
          style={{
            flex: "1 0 27%",
          }}
        >
          <SideWindow />
        </Col>
      </Row>

      <Layout>
        <Footer
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
            padding: "0 45px",
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
                  height: "2.5%",
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
        </Footer>
      </Layout>
    </div>
  );
};
export default index;
