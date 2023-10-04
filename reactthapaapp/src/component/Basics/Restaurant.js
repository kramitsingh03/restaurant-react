import React from 'react';
import "./style.css";
import Menu from "./menuApi";


const Restaurant = () => {
    // css 
    const myStyle = {
        color: "blue"
    };
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className='card-number card-circle subtle'>1</span>
                        <span className='card-author subtle' style={myStyle} >Breakfast</span>
                        <h2 className='card-title'>Maggi</h2>
                        <span className='card-description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusantium. Consequuntur doloribus dolor facere earum corporis neque rem beatae culpa!</span>
                        <div className='card-read'>Read</div>
                        {/* <img src="" className='card-media' alt="" /> */}
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant