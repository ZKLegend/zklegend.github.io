import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import './style.css';

const CategorySlideItem = (image) => {
    return (
        <div className="category-slide-item">
            Category Slide Image
        </div>
    )
}

const CategorySlide = () => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        axios.get("https://637c33cc72f3ce38ea9ce6a2.mockapi.io/AnimeList")
        .then((res) => {
            setItemList([...res.data]); 
            console.log(res.data);  
        })
        console.log(itemList);
    }, []);

    return (
        <div className="category-slide">
            <h2 className="category-name">Category 1</h2>
            <div className="category-slide-container">
                <CategorySlideItem />
                {/* <div className="category-slide-item">
                    Category Slide Image 
                </div> */}
            </div>
        </div>
    )
}

export default CategorySlide;