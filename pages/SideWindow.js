import "../Styles/Filter.less";
import { Layout, Breadcrumb, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { GiDividedSpiral } from "react-icons/gi";
import antd from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const { Menu, Dropdown, Button } = antd;

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
function index() {
  return (
    <div className="window_page">
      <div className="window_title">
        {" "}
        <p>Items List </p>{" "}
        <BsThreeDots
          style={{ marginTop: "-10px", color: "rgb(201, 194, 194)" }}
        />
      </div>
      <div className="item_container">
        <div
          style={{
            width: "100%",
            borderBottom: " 1px solid #e8ebed",
            // display: "flex",
            // height: "8%px",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "auto 1fr 0.3fr auto",
            padding: "10px 5%",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            <img width="50px" height="50px" src="../static/images/t5.png" />
          </div>
          <div>
            <div
              style={{
                fontSize: "1vw",

                padding: "5px 0",
              }}
            >
              <span style={{ fontWeight: 400 }}>
                Araq nas , white <span style={{ color: "#c5c7c9" }}>-FS </span>
              </span>
              <div style={{ fontWeight: 400 }}>45,000 IQD</div>
            </div>
          </div>{" "}
          <div>
            <div className="window_ctrl">
              <span className="ai_window">
                <AiOutlineMinus />
              </span>
              <div className="item_num">10</div>
              <span className="ai_window">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // paddingLeft: "10px",
            }}
          >
            {" "}
            <GiDividedSpiral
              size="20"
              color="#4d91ff"
              // style={{ marginLeft: "" }}
              // color="rgb(201, 194, 194)"
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            borderBottom: " 1px solid #e8ebed",
            // display: "flex",
            // height: "75px",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "auto 1fr 0.3fr auto",
            padding: "10px 5%",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            <img width="50px" height="50px" src="../static/images/t1.png" />
          </div>
          <div>
            <div style={{ fontSize: "1vw", padding: "5px 0" }}>
              <span style={{ fontWeight: 400 }}>
                Araq nas , white <span style={{ color: "#c5c7c9" }}>-FS </span>
              </span>
              <div style={{ fontWeight: 400 }}>45,000 IQD</div>
            </div>
          </div>{" "}
          <div>
            <div className="window_ctrl">
              <span className="ai_window">
                <AiOutlineMinus />
              </span>
              <div className="item_num">20</div>
              <span className="ai_window">
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // paddingLeft: "10px",
            }}
          >
            {" "}
            <GiDividedSpiral
              size="20"
              //color="#4d91ff"
              // style={{ marginLeft: "" }}
              color="rgb(201, 194, 194)"
            />
          </div>
        </div>
      </div>
      <div className="window_footer">
        <div className="discount">
          <Dropdown overlay={menu}>
            <Button style={{ textAlign: "left", width: "100%" }}>
              Discount <DownOutlined style={{ float: "right" }} />
            </Button>
          </Dropdown>
        </div>

        <div className="check">
          <ul>
            <li>Sub-total:</li>
            <li>Disocunt:</li>
            <li>Tax</li>
          </ul>
          <ul style={{ textAlign: "right" }}>
            <li>1.350,000 IQD</li>
            <li>000 IQD</li>
            <li>000 IQD</li>
          </ul>
        </div>
        <div className="window_title" style={{ marginTop: "1em" }}>
          {" "}
          <p>Total:</p>
          <p className="price">1,350,000 IQD</p>
        </div>
      </div>
    </div>
  );
}

export default index;
