import "../Styles/Filter.less";
import { GiDividedSpiral } from "react-icons/gi";
import antd from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const { Menu, Dropdown, Button } = antd;

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
  </Menu>
);

const items = [
  {
    image: "../static/images/t1.png",
    name: " Araq nas , white ",
    price: "45,000 IQD",
    num: "10",
  },
  {
    image: "../static/images/t5.png",
    name: " Araq nas , white ",
    price: "45,000 IQD",
    num: "20",
  },
];
function index() {
  return (
    <div className="window_page">
      <div className="window_title">
        <p>Items List </p>
        <BsThreeDots
          style={{ marginTop: "-10px", color: "rgb(201, 194, 194)" }}
        />
      </div>
      <div className="item_container">
        {items.map((item, index) => {
          return (
            <div className="window_item" key={index}>
              <div>
                <img src={item.image} />
              </div>
              <div>
                <div className="window_text">
                  <span>
                    {item.name}
                    <span style={{ color: "#c5c7c9" }}>-FS </span>
                  </span>
                  <div>{item.price}</div>
                </div>
              </div>
              <div>
                <div className="window_ctrl">
                  <span className="ai_window">
                    <AiOutlineMinus />
                  </span>
                  <div className="item_num">{item.num}</div>
                  <span className="ai_window">
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>
              <div>
                <GiDividedSpiral size="20" color="#4d91ff" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="window_footer">
        <div className="discount">
          <Dropdown overlay={menu}>
            <Button style={{ textAlign: "left", width: "100%" }}>
              Discount
              <DownOutlined
                style={{
                  float: "right",
                  marginTop: "2%",
                }}
              />
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
          <p>Total:</p>
          <p className="price">1,350,000 IQD</p>
        </div>
      </div>
    </div>
  );
}

export default index;
