import React from "react";
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';


const Work=()=>{

    const workInfoDate = [
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        },
        {
            image:ChooseMeals,
            title:"Choose Meals",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        },
        {
            image:DeliveryMeals,
            title:"Delivery Meals",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        }
    ]
    return <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoDate.map((data)=> (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt=""></img>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>

}

export default Work;