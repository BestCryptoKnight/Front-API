import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="wel">Welcome</div>
            <div className="subwel">Get your search API lists</div>
            <Link to='/school' className="a_btn" > BIGIN < AiOutlineArrowRight /></Link>
            {/* <a className="a_btn" href="/school">BIGIN < AiOutlineArrowRight /></a> */}
        </div>
    )
}

export default Home