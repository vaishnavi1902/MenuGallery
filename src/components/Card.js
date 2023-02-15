import React, { useState } from "react";
import "../components/Menu.css";
import Menu from "./menuapi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniquelist = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniquelist);

const Card = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniquelist);

  const filteritem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Card;
