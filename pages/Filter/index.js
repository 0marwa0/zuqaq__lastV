import { Button } from "antd";
import { useState, useEffect } from "react";
import "../../Styles/Filter.less";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { Component } from "react";
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
    title: "Arka Nass",
    color: "Red",
  },
  {
    id: "3",
    src: "../static/images/t3.png",
    size: "XL",
    title: "Ana AlIraq",
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
    title: "Baghdadi",
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

export default class index extends Component {
  // const [width, setWidth] = useState(0);
  // const [num, setNum] = useState(0);

  // const [pos, setpos] = useState(0);
  // const [count, setcount] = useState(0);
  // const [css, setCss] = useState({
  //   transform: "translateX(0px)",
  // });
  // useEffect(() => {
  //   let boxWidth = document.getElementById("btn").clientWidth;
  //   setWidth(boxWidth);
  // });

  // const handleClick = (type) => {
  //   if (process.browser)
  //     var margin = window.getComputedStyle(document.getElementById("btn"))
  //       .marginRight;
  //   let m = margin.slice(0, -2);
  //   margin = parseInt(m);

  //   const cardWidth = width;
  //   const cardMargin = margin;

  //   const cardNumber = 7;
  //   let currentCard = num;
  //   let position = pos;

  //   if (type === "next" && count <= 2) {
  //     currentCard = currentCard + 1;
  //     setNum((num) => num + 1);

  //     setcount((count) => count + 1);
  //     position -= cardWidth + cardMargin;
  //   } else if (type === "prev" && num > 0) {
  //     setNum((num) => num - 1);
  //     setcount((count) => count - 1);
  //     position += cardWidth + cardMargin;
  //   }

  //   setCard(currentCard, position);
  // };

  // const setCard = (currentCard, position) => {
  //   setNum(currentCard);
  //   setpos(position);
  //   setCss({
  //     transform: `translateX(${position}px)`,
  //   });
  // };

  render() {
    return (
      <div className="filter_page">
        <div className="card_wrapper">
          {items.map((item, i) => {
            return (
              <div style={{ height: "100%" }}>
                <div className="img_container">
                  <img src={item.src} />
                </div>
                <div className="item_footer">
                  <p className="itme-title-">{item.title}</p>
                  <div className="item_info">
                    <p style={{ fontSize: "1.2vw" }}>{item.color}</p>

                    <span style={{ color: "#90baff", fontSize: "1.2vw" }}>
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
