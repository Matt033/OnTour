import React from "react";
import '../index.css';
import { RiStarFill } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"
import { useState } from 'react';
import { HelpfulButton } from "./Buttons";

export default function Review(props) {
    const [isActive, setIsActive] = useState(true);
    // console.log(props.text)
    // console.log(decodeURIComponent(props.text));

    const handleHelpful = event => {
        event.currentTarget.classList.toggle('fw-bold');
        event.currentTarget.classList.toggle('btn-outline-light');
        setIsActive(current => !current);
    };

    return (
        <div class="list-group-item flex-column align-items-start">
            <div class="d-flex bd-highlight">
                <div class="p-1 bd-highlight"><AiOutlineUser size={23} /> </div>
                <div class="p-1 bd-highlight"><h6 class="review-user">{props.user}</h6></div>
                <br></br>
            </div>
            <div>
                <div class="d-flex bd-highlight mb-2">
                    {[...Array(props.rating)].map(star => {
                        return (
                            <RiStarFill
                                className="star"
                                color={"#faaf00"}
                                size={20}
                            />
                        );
                    })}
                    {[...Array(5 - props.rating)].map(star => {
                        return (
                            <RiStarFill
                                className="star"
                                color={"#bdbdbd"}
                                size={20}
                            />
                        );
                    })}
                </div>
                <div align="left" class="d-flex bd-highlight mb-2">
                    <small>{props.date} • {props.venue}</small>
                </div>
            </div>
            <div class="d-flex w-100 justify-content-start">
                <p id="rating-text" style={{ whiteSpace: "pre-wrap" }} class="mb-2" align="left">{props.text}</p>
            </div>
            <HelpfulButton onPress={handleHelpful} isActive={isActive} />

        </div>
    )
}