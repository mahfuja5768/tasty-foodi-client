import React, {  } from 'react';
import Banner from '../Banner/Banner';
import FoodServices from '../FoodServices/FoodServices';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodServices></FoodServices>
            <About></About>
        </div>
    );
};

export default Home;