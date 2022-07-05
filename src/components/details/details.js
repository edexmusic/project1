import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css";

export default function Details(state) {
    const navigate = useNavigate();
    const params = useParams();
    const datas = state.state.find((product) => product.id == params.id);

    return (
        <div className="details_container">
            <div className="details_linkBar">
        <span onClick={() => navigate(-1)} className="details_backLink">
          ← Back
        </span>
            </div>
            <div className="datails_card">
                <div className="image_box">
                    <img className="card_image" src={datas.image} alt="card_image" />
                </div>
                <div className="main_content_box">
                    <span className="card_category">{datas.category}</span>
                    <div className="card_content">
                        <span className="card_title">{datas.title}</span>
                        <span className="card_price">
              {datas.price.toLocaleString()} UAH
            </span>
                    </div>

                </div>
            </div>
        </div>
    );
}