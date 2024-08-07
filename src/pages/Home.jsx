import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Display from "../components/Display";
import FeaturedCollections from "../components/FeaturedCollections";
import LatestBlogPosts from "../components/LatestBlogPosts";
import Faq from "../components/Faq";

function Home (){
   return <div>
                <Header/>
                <Navbar/>
                <Display/>
                <FeaturedCollections/>
                <LatestBlogPosts/>
                <Faq/>
                <Footer/>
    </div>
}

export default Home;