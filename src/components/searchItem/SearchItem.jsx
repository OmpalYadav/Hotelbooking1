import React from 'react';
import { Link } from 'react-router-dom';
import "./searchItem.css";

const hotels = [
  { id: 1, name: "Grand Hotel", city: "Mumbai", description: "A wonderful hotel with excellent services", distance: "500m from center", taxiOffer: "Free taxi Service", roomDetails: "2 Deluxe Room • 1 bathroom ", cancellation: "Book now", rating: 9.9, price: "₹1700/night", taxes: "Book today and enjoy" },
  { id: 2, name: "Royal Palace", city: "Jaipur", description: "A wonderful hotel with excellent services", distance: "1km from center", taxiOffer: "Free taxi Service", roomDetails: "2 Deluxe Room• 1 bathroom ", cancellation: "Book now", rating: 9.9, price: "₹1700/night", taxes: "Book today and enjoy" },
  { id: 3, name: "Taj Mahal Palace", city: "Mumbai", description: "A wonderful hotel with excellent services", distance: "1.5km from center", taxiOffer: "Free taxi Service", roomDetails: "3 Deluxe Room • 1 bathrooms", cancellation: "Book now", rating: 9.9, price: "₹1700/night", taxes: "Book today and enjoy" }
];

const SearchItem = ({ hotel }) => {
  return (
    <div className="searchItem">
      <Link to={`/hotel/${encodeURIComponent(hotel.name)}`}> {/* Use encodeURIComponent for URL encoding */}
        <img
          src="https://media.gettyimages.com/id/520443060/photo/the-taj-mahal-palace-hotel-at-dusk.jpg?s=1024x1024&w=gi&k=20&c=Q9xGQkCZpqFd2BcyzDRE8ChckXqmvVC1BboEbjzS1NM="
          alt=""
          className="siImg"
        />
      </Link>
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siLocation">{hotel.city}</span>
        <span className="siDistance">{hotel.distance}</span>
        <span className="siTaxiOp">{hotel.taxiOffer}</span>
        <span className="siSubtitle">{hotel.description}</span>
        <span className="siFeatures">{hotel.roomDetails}</span>
        <span className="siCancelOp">{hotel.cancellation}</span>
        <span className="siCancelOpSubtitle">
        </span>
        Book today and enjoy with family!
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Guest Rating</span>
          <button>{hotel.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{hotel.price}</span>
          <span className="siTaxOp">{hotel.taxes}</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

const SearchItemsList = () => {
  return (
    <div>
      {hotels.map((hotel) => (
        <SearchItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default SearchItemsList;