  import React from "react";
  import './page.css';
  import Layout from "../Component/layout";

  const Home = ()=>{
    return (
      <Layout>
        <div className="Home-container" >
          <h1 className="new-a">NEW ARRIVALS</h1>
          <p className="description">Our new arrivals are build to withstand you while you keeping looking for the best</p>
        </div> 
      </Layout>
           
    )
  }    

  export default Home