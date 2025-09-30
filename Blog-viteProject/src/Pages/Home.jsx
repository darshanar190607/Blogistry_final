import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import BlogList from "../Components/BlogList";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <BlogList />
      <Subscribe />
      <Footer />
    </div>
  );
}
export default Home