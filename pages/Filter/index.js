import { Button } from "antd";
import antd from "antd";
import { Layout, Breadcrumb } from "antd";
import Slider from "react-slick";
import { wrap } from "@popmotion/popcorn";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import "../../Styles/Filter.less";
import { Example } from "./FilterBtn.js";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import FilterButtons from "../../components/carousel";
import { AnimatePresence, motion } from "framer-motion";

const { Header, Footer, Sider, Content } = Layout;
const { Card } = antd;
const { Meta } = Card;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const fitlerImtes = [
  { title: "Wearables" },
  { title: "Hoodle" },
  { title: "Male T-shirt" },
  { title: "Female T-shirt" },
  { title: "Kids" },
  { title: "Dresses" },
  { title: "Skrits" },
];

const items = [
  {
    id: "1",
    src: "../static/images/t1.png",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "2",
    src: "../static/images/t2.png",
    size: "L",
    title: "Batman",
    color: "red",
  },
  {
    id: "3",
    src: "../static/images/t3.png",
    size: "XL",
    title: "Baghdad",
    color: "White",
  },
  {
    id: "4",
    src: "../static/images/t4.png",
    size: "S",
    title: "WonderWomen",
    color: "Black",
  },
  {
    id: "5",
    src: "../static/images/t5.png",
    size: "XL",
    title: "Batman",
    color: "red",
  },
  {
    id: "6",
    src: "../static/images/t6.png",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
  {
    id: "7",
    src: "../static/images/t7.png",
    size: "M",
    title: "Baghdad",
    color: "Black",
  },
  {
    id: "8",
    src: "../static/images/t8.png",
    size: "XL",
    title: "Batman",
    color: "rded",
  },
  {
    id: "9",
    src: "../static/images/t9.png",
    size: "M",
    title: "Baghdad",
    color: "Green",
  },
];

export default function Filter() {
  const [width, setWidth] = useState(0);
  const [num, setNum] = useState(0);

  const [pos, setpos] = useState(0);
  const [count, setcount] = useState(0);
  const [css, setCss] = useState({
    transform: "translateX(0px)",
  });
  useEffect(() => {
    let boxWidth = document.getElementById("btn").clientWidth;
    setWidth(boxWidth);
    console.log(boxWidth, "our width");
  });

  const handleClick = (type) => {
    if (process.browser)
      var margin = window.getComputedStyle(document.getElementById("btn"))
        .marginRight;
    let m = margin.slice(0, -2);
    margin = parseInt(m);
    console.log(margin, "fainlly");
    const cardWidth = width;
    const cardMargin = margin;

    const cardNumber = 7;
    let currentCard = num;
    let position = pos;

    if (type === "next" && count <= 2) {
      console.log(currentCard, count, pos, "what");
      currentCard = currentCard + 1;
      setNum((num) => num + 1);

      setcount((count) => count + 1);
      position -= cardWidth + cardMargin;
    } else if (type === "prev" && num > 0) {
      setNum((num) => num - 1);
      setcount((count) => count - 1);
      position += cardWidth + cardMargin;
    }

    setCard(currentCard, position);
  };

  const setCard = (currentCard, position) => {
    setNum(currentCard);
    setpos(position);
    setCss({
      transform: `translateX(${position}px)`,
    });
  };

  return (
    <div className="filter_page">
      <div className="filter_head">
        {count >= 1 ? (
          <div className="fa_wrapper1" onClick={() => handleClick("prev")}>
            <LeftOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        ) : null}

        {fitlerImtes.map((item, i) => {
          return (
            <Button
              id="btn"
              className="btns"
              type={i === 0 ? "primary" : ""}
              style={css}
            >
              {item.title}
            </Button>
          );
        })}

        <div className="fa_wrapper2" onClick={() => handleClick("next")}>
          <RightOutlined
            style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
          />
        </div>
      </div>
      {/* {currentItem === 1 ? null : (
          <div className="fa_wrapper1" onClick={prevItem}>
            <LeftOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        )}
        {fitlerImtes.slice(firstIndex, lastIndex).map((item, i) => {
          return (
            <Button
              key={i}
              size="large"
              style={{
                padding: "0.5% 5%",
                backgroundColor: item.title === "Wearables" ? " #3B86FF" : "",
                fontWeight: "500",
                color:
                  item.title === "Wearables" ? "white" : "rgb(189, 186, 186)",
              }}
            >
              {item.title}
            </Button>
          );
        })}
        {currentItem === totalItem ? null : (
          <div
            className="fa_wrapper2"
            //  onClick={nextItem}
          >
            <RightOutlined
              style={{ fontSize: "20px", color: "rgb(189, 186, 186)" }}
            />
          </div>
        )}
      </div> */}
      <div className="card_wrapper">
        {items.map((item, i) => {
          return (
            <div style={{ height: "100%" }}>
              <div
                style={{
                  height: "160px",
                  maxWidth: "100%",
                  borderRadius: "10px 10px 0 0 ",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "10px 10px 0 0",
                    objectFit: "cover",
                  }}
                  src={item.src}
                />
              </div>
              <div className="item_footer">
                <p className="itme-title-">{item.title}</p>
                <div
                  style={{
                    margin: "0px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ fontWeight: "400" }}> {item.color}</p>

                  <span style={{ color: "#90baff" }}>{item.size}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
