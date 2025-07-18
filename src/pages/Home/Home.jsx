import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/Navbar/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/Navbar/FoodDisplay/FoodDisplay'
const Home = () => {
  const[category,setCategory]=useState("All");

  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    </div>
  )
}

export default Home