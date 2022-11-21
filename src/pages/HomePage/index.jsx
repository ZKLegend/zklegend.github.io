import React from "react";

import BigPoster from "../../components/BigPoster";
import CategorySlide from "../../components/CategorySlide";


const HomePage = () => {
    return(
        <div className="home-page">
            <BigPoster />
            <CategorySlide />
        </div>
    )
}

export default HomePage;