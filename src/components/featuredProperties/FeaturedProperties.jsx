import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media.gettyimages.com/id/520443060/photo/the-taj-mahal-palace-hotel-at-dusk.jpg?s=1024x1024&w=gi&k=20&c=Q9xGQkCZpqFd2BcyzDRE8ChckXqmvVC1BboEbjzS1NM="
          alt="Grand Hotel"
          className="fpImg"
        />
        <span className="fpName">Grand Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹1700-5500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.gettyimages.com/id/520443060/photo/the-taj-mahal-palace-hotel-at-dusk.jpg?s=1024x1024&w=gi&k=20&c=Q9xGQkCZpqFd2BcyzDRE8ChckXqmvVC1BboEbjzS1NM="
          alt="Taj Mahal Palace"
          className="fpImg"
        />
        <span className="fpName">Taj Mahal Palace</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹1700-5500</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.gettyimages.com/id/1179154114/photo/sunset-at-rashtrapati-bhavan-india.jpg?s=1024x1024&w=gi&k=20&c=nSjcrOn7H88GbAFBSja-B-3ZVMCjpvFHTUpHHqAd3kc="
          alt="Radisson Blu Delhi"
          className="fpImg"
        />
        <span className="fpName">Radisson Blu Delhi</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from ₹1700-5500</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.gettyimages.com/id/562986739/photo/view-of-the-palace-of-wind.jpg?s=1024x1024&w=gi&k=20&c=211bhVr1q2emE9iZ9ejlagnxpSvAUcUBCWMHT4kuKv8="
          alt="Lalit New Delhi"
          className="fpImg"
        />
        <span className="fpName">Royal Palace</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹1700-5500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://media.gettyimages.com/id/498489079/photo/taj-mahal-reflection.jpg?s=1024x1024&w=gi&k=20&c=nKMhASnGDosbIZ6_iJeHk_SdVMp_NnnAC_r4sOg4wYI="
          alt="The Oberoi Amar"
          className="fpImg"
        />
        <span className="fpName">The Oberoi Amar</span>
        <span className="fpCity">Agra</span>
        <span className="fpPrice">Starting from ₹1700-5500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;