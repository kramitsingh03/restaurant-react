import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Restaurant = () => {
    //use state is here for store the data into react which are come from menuapi.js file . -kr.amitsingh
    const [menuData,setMenuData]=useState(Menu);



   
    return (
        <>
           <MenuCard menuData = {menuData}></MenuCard>
        </>
    )
}

export default Restaurant