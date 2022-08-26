import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    let navigate = useNavigate();
    const pathMove = () => {
        navigate(`/${props.oID}`);
    }
    return (
        <div className="s_card mt-5">
            <img onClick={() => pathMove()} className="" src={props.img} alt="Card image" />
            <div className="s_card-body">
                <div className="flex">
                    <h4>Title: </h4>
                    <h4>{props.title}</h4>
                </div>
                <div className="flex1">
                    <h5>Author: </h5>
                    <h5>{props.author}</h5>
                </div>
                <Link to={`/${props.oID}`}>
                    <button className="btn_card w100 white" >
                        Get it
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Card