import React from "react";
import "../CSS/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* id,title,price,rating,image */}
      <div className="home__row">
        <Product
          id="145"
          title="Vivo Y91i (Ocean Blue, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers"
          price={108.11}
          rating={4}
          image="https://m.media-amazon.com/images/I/51FnmxwFHDL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="146"
          title="PROSmart Aluminium Adjustable Portable and Foldable Tripod Stand Mobile Clip"
          price={11.45}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bfd5JuL5L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="147"
          title="Blaq Ash Men's Faux Leather Biker Outerwear Jacket"
          price={135.63}
          rating={3}
          image="https://m.media-amazon.com/images/I/71HhzVPH11L._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="148"
          title="Hero Kyoto 26T Single Speed Mountain Bike (Black, Ideal For : 12+ Years )"
          price={100.45}
          rating={4}
          image="https://m.media-amazon.com/images/I/71CA2d53yML._AC_UY327_FMwebp_QL65_.jpg"
        />

        <Product
          id="148"
          title="MRF 1CT16110 Champ Kashmir-Willow Cricket Bat, Size 6"
          price={81.08}
          rating={3}
          image="https://m.media-amazon.com/images/I/61Qgu1PAE1L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="149"
          title="TCL 138.7 cm (55 inches)  AI 4K Ultra HD Smart Certified Android LED TV 55P8S | Supreme with Farfield Voice Search (Black) (2019 Model)"
          price={559.5}
          rating={5}
          image="https://m.media-amazon.com/images/I/713i9fWy6uL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
