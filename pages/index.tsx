import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { axiosInstance } from "../utilities/axiosConfig";
import ReactMarkdown from "react-markdown";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = ({
  welcomeSection,
  aboutSection,
  homeCuisine,
  diningSection,
  quoteSection,
  gallerySection,
}: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon icon={faEnvelope} />,
    nextArrow: <FontAwesomeIcon icon={faEnvelope} />,
  };
  return (
    <>
      <section className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg navbar-light px-md-4 px-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={
                  process.env.PUBLIC_BASE_URL +
                  `${welcomeSection?.welcomeImage?.data.attributes.formats.large.url}`
                }
                alt=""
                width="40px"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Order Online
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Offers & Events
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="row position-relative mb-md-5 mb-0 bg-hero">
          <img
            src={
              process.env.PUBLIC_BASE_URL +
              `${welcomeSection?.welcomeImage?.data.attributes.formats.large.url}`
            }
            alt=""
            className="hero-bg"
          />
          <section className="col-md-12 hero-absolute">
            <h1 className="text-white text-center">
              {welcomeSection?.welcomeText}
            </h1>
            <p className="text-white text-center f-17 py-3">
              {welcomeSection?.quoteText}
            </p>
            <button className="btn btn-primary-custom d-flex mx-auto hover-border-5">
              Order Online
            </button>
          </section>
        </section>
        <section className="row px-md-5 px-3">
          <section className="col-md-4 mt-md-5 mt-4 position-relative">
            <h2 className="pb-3">{aboutSection?.aboutTitle}</h2>
            <p className="pb-2">{aboutSection?.aboutDetail}</p>

            <button className="btn btn-primary-custom">
              Order Online<span className="arrow__line"></span>
            </button>
            <div className="position-absolute platter-menu">
              <p>{aboutSection?.aboutImageText[0]?.shortTitleText}</p>
              <h4>{aboutSection?.aboutImageText[0]?.longTitleText}</h4>
              <img src="assets/img/avatars/platter-svg.svg" alt="" />
            </div>
          </section>
          <section className="col-md-4 mt-md-5 mt-4 mb-3 mb-md-0">
            <img
              src={
                process.env.PUBLIC_BASE_URL +
                aboutSection?.aboutImageText[0]?.aboutTitleImage?.data
                  ?.attributes?.formats?.medium?.url
              }
              alt=""
              className="img-fluid"
            />
          </section>
          <section className="col-md-4 mt-auto position-relative">
            <div className="position-absolute dinning-area">
              <p>{aboutSection?.aboutImageText[1]?.shortTitleText}</p>
              <h4>{aboutSection?.aboutImageText[1]?.longTitleText}</h4>
              <img src="assets/img/avatars/arrow-down.svg" alt="" />
            </div>
            <img
              src={
                process.env.PUBLIC_BASE_URL +
                aboutSection?.aboutImageText[1]?.aboutTitleImage?.data
                  ?.attributes?.formats?.small?.url
              }
              alt=""
              className="img-fluid"
            />
          </section>
        </section>
        <section className="row my-5 px-md-5 px-3">
          <h3 className="text-center pb-3 pt-5">What we Serve</h3>
          {homeCuisine?.map((cuisine: any) => {
            return (
              <section key={cuisine.id} className="col-md-4 mb-4 mb-md-0">
                <section className="position-relative">
                  <img
                    src={
                      process.env.PUBLIC_BASE_URL +
                      `${cuisine.cuisineImage.data.attributes.formats.small.url}`
                    }
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blurry-bg position-absolute">
                    <div className="p-3">
                      <h4 className="arrow white-text">
                        {cuisine.cousineType}
                      </h4>
                    </div>
                  </div>
                </section>
              </section>
            );
          })}
        </section>
        <section className="row px-md-5 my-5 px-3">
          <section className="col-md-7 my-5 ">
            <div className="dine-experience">
              {diningSection?.allImages?.data.map((dining: any) => {
                return (
                  <div key={dining.id} className="image">
                    <img
                      src={
                        process.env.PUBLIC_BASE_URL + dining?.attributes?.url
                      }
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="col-md-5 d-flex my-md-5 my-0">
            <section className="alt-bg m-auto p-5">
              <h2 className="pb-3">{diningSection?.mainTitle}</h2>
              <p className="pb-4">{diningSection?.mainDescription}</p>
              <button className="btn btn-primary-custom">
                Make Reservation
              </button>
            </section>
          </section>
        </section>
        <section className="row mx-md-5 my-5 d-flex justify-content-center mx-3">
          <section className="col-md-7 alt-bg p-5 mb-5">
            <h3>{quoteSection}</h3>
            <button className="btn btn-primary-custom mt-4">
              Discover Menu
            </button>
          </section>
        </section>
        <section className="row position-relative">
          <img
            src="assets/img/avatars/explore-galary-bg.png"
            alt=""
            className="explore-gallery bg-image"
          />
          <section className="col-md-12 gallery">
            <h2 className="text-center white pb-2">
              {gallerySection?.mainTitle}
            </h2>
            <p className="text-center white mb-4">
              {gallerySection?.mainDescription}
            </p>
            <div className="mb-4">
              <div className="inner">
                <Slider {...settings}>
                  {gallerySection?.allImages?.data?.map((image: any) => {
                    return (
                      <div key={image.id} className="slider-image px-2">
                        <img
                          src={
                            process.env.PUBLIC_BASE_URL + image?.attributes?.url
                          }
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <button className="btn btn-primary-custom d-flex mx-auto">
              Explore Gallery
            </button>
          </section>
        </section>
      </section>
      <footer className="d-md-flex justify-content-between px-md-5 py-5 px-3">
        <section>
          <img src="assets/img/avatars/logo.png" alt="" width="70px" />
          <p className="f-13 pt-2">
            GORKHA ROYALE - ORIENTAL FOOD <br />
            WITH A MODERN TWIST
          </p>
        </section>
        <section className="my-4 my-md-0">
          <ul className="p-0">Quick Links</ul>
          <li className="pb-2">
            <a href="" className="f-14">
              About Us
            </a>
          </li>
          <li className="pb-2">
            <a href="" className="f-14">
              Reservation
            </a>
          </li>

          <li>
            <a href="" className="f-14">
              Menu
            </a>
          </li>
        </section>
        <section>
          <ul className="p-0">Social Media</ul>
          <li className="pb-2">
            <a href="" className="f-14">
              <i className="fa-brands fa-facebook f-12"></i> Facebook
            </a>
          </li>
          <li className="pb-2">
            <a href="" className="f-14">
              <i className="fa-brands fa-square-instagram f-12"></i> Instagram
            </a>
          </li>
          <li>
            <a href="" className="f-14">
              <i className="fa-brands fa-twitter f-12"></i> Twitter
            </a>
          </li>
        </section>
        <section className="my-4 my-md-0">
          <ul className="p-0">Contact</ul>
          <li className="pb-2">
            <a href="" className="f-14">
              <i className="fa-solid fa-location-dot f-12"></i> 85 Clewer Hill
              Road Windsor SL4 4DE
            </a>
          </li>
          <li className="pb-2">
            <a href="" className="f-14">
              <i className="fa-solid fa-phone f-12"></i> 01753 830003 / 01753
              865059
            </a>
          </li>
          <li className="pb-2">
            <a href="" className="f-14">
              <i className="fa-solid fa-envelope f-12"></i>
              durbarhospitality@gmail.com
            </a>
          </li>
        </section>
        <section>
          <ul className="p-0">Find Us</ul>
          <a href="">
            <img src="assets/img/avatars/google-maps.png" alt="" width="75px" />
          </a>
        </section>
        <section className="mt-4 mt-md-0">
          <ul className="p-0">Review Us</ul>
          <a href="">
            <img src="assets/img/avatars/trip.png" alt="" width="135px" />
          </a>
        </section>
      </footer>
    </>
  );
};

Home.getInitialProps = async () => {
  try {
    let data = await axiosInstance.get("/home-page", {
      params: {
        populate: `welcomeSection.welcomeImage,
        aboutSection.aboutImageText.aboutTitleImage,
        homeCuisine.cuisineImage,
        diningSection.allImages,
        gallerySection.allImages
        `,
      },
    });
    return data.data.data.attributes;
  } catch (error) {
    return error;
  }
};

export default Home;
