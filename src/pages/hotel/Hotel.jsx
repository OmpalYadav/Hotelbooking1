import React, { useState } from 'react';
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';

// Sample hotel data
const hotels = [
  { id: 1, name: "Grand Hotel", city: "Mumbai", description: "Luxury hotel with great amenities", distance: "500m from center", taxiOffer: "Free airport taxi", roomDetails: "Deluxe Room • 1 bathroom • 30m²", cancellation: "Free cancellation", rating: 8.9, price: "$112", taxes: "Includes taxes and fees" },
  { id: 2, name: "Royal Palace", city: "Jaipur", description: "Elegant hotel with royal ambiance", distance: "1km from center", taxiOffer: "Free airport taxi", roomDetails: "Suite • 1 bathroom • 40m²", cancellation: "Free cancellation", rating: 9.2, price: "$150", taxes: "Includes taxes and fees" },
  { id: 3, name: "Taj Mahal Palace", city: "Mumbai", description: "Iconic hotel with historical charm", distance: "1.5km from center", taxiOffer: "Free airport taxi", roomDetails: "Executive Suite • 2 bathrooms • 50m²", cancellation: "Free cancellation", rating: 9.5, price: "$200", taxes: "Includes taxes and fees" }
];

const Hotel = () => {
  const { name } = useParams(); // Get the hotel name from the URL
  const hotel = hotels.find(h => h.name === decodeURIComponent(name)); // Find the hotel data based on the name

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve your getaway now!</button>
          <h1 className="hotelTitle">{hotel.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Apollo Bunder, Colaba, Mumbai, Maharashtra, India</span>
          </div>
          <span className="hotelDistance">
            Just 300 meters from the city's buzzing heart
          </span>
          <span className="hotelPriceHighlight">
            Book your stay for ₹17,00 or more at this legendary property and enjoy an added touch of convenience with exclusive benefits.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the Heart of Mumbai</h1>
              <p className="hotelDesc">
                A Royal Stay in Mumbai's Iconic Landmark
                Nestled by the serene Arabian Sea and only a short walk from the majestic Gateway of India,
                Taj Mahal Palace offers a blend of luxury and comfort. The property features beautifully appointed rooms with air conditioning, free WiFi, and chic, contemporary décor. Each room includes a well-equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with modern amenities. You’ll also find a fridge, electric kettle, and coffee machine for your convenience. Explore the nearby Colaba Causeway for shopping or stroll along Marine Drive. The property is 26
                km from Chhatrapati Shivaji International Airport, with an airport shuttle service available for an additional charge.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Ideal for a 1-Night Stay!</h1>
              <span>
                Enjoy the bustling charm of Mumbai with this centrally located gem, boasting an impressive location!
              </span>
              <h2>
                <b>1700</b> (1 night)
              </h2>
              <button>Reserve your getaway now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;