import React from "react";

const ServicesFirstCard = (props) => {
    const { imgUrl, title, clients, rating } = props.item;

    return (
        <div className="single__services">
            <div className="services__img mb-5">
                <img src={imgUrl} alt="" className="w-100" />
                <button className="btn check__btn">Check</button>
            </div>

            <div className="services__details">
                <h6>{title}</h6>

                <div className=" d-flex align-items-center gap-5">
                    <span className=" d-flex align-items-center gap-2">
                        <i class="ri-user-line"></i> {clients}k
                    </span>

                    <span className=" d-flex align-items-center gap-2">
                        <i class="ri-star-fill"></i> {rating}k
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServicesFirstCard;