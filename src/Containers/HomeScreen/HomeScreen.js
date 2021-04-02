import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />
             <Banner />
           {/* <Row /> */}
        </div>
    )
}

export default HomeScreen
