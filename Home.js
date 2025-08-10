import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'


const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

       <HorizontalCardProduct category={"blackforestcake"} heading={"Top's Blackforestcake"}/>
       <HorizontalCardProduct category={"cupcake"} heading={"Popular's Cupcake"}/>
       
       <VerticalCardProduct category={"cake"} heading={"Cakes"}/>
       <VerticalCardProduct category={"cakepops"} heading={"Bloast Cakepops"}/> 
       <VerticalCardProduct category={"fruitcake"} heading={"Friuty"}/>
       <VerticalCardProduct category={"kidecake"} heading={"Kiddocake"}/>
       <VerticalCardProduct category={"lavaa"} heading={"Lavaa Cake"}/>
       <VerticalCardProduct category={"muffioncake"} heading={"MuffionCake"}/>
       <VerticalCardProduct category={"swissrollcakes"} heading={"Swissroll Cake"}/>
       <VerticalCardProduct category={"sugarfreecake"} heading={"Sugar Free Cake"}/>

    </div>
  )
}

export default Home