import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard"
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
    Menu.map((curElem) => {
    return curElem.category;
  })
 ),
 "All"
];

console.log(uniqueList);

const Resturant = () => {
    const [menudate, setmenudate] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterItem = (category) => {
         if(category === "All"){
            setmenudate(Menu);
            return;
         }

        const UpdatedList = Menu.filter((curElem) => {
            return curElem.category === category;         
        });
        setmenudate(UpdatedList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menudate = {menudate}/>
        </>
    )
};

export default Resturant;
