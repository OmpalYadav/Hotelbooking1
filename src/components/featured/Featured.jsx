import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.gettyimages.com/id/520443060/photo/the-taj-mahal-palace-hotel-at-dusk.jpg?s=1024x1024&w=gi&k=20&c=Q9xGQkCZpqFd2BcyzDRE8ChckXqmvVC1BboEbjzS1NM="
          alt="The Taj Mahal Palace Hotel at dusk"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>Luxury Hotel</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.gettyimages.com/id/562986739/photo/view-of-the-palace-of-wind.jpg?s=1024x1024&w=gi&k=20&c=211bhVr1q2emE9iZ9ejlagnxpSvAUcUBCWMHT4kuKv8="
          alt="View of the Palace of Wind (Hawa Mahal)"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rajsthan</h1>
          <h2>Hawa Mahal</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://media.gettyimages.com/id/1179154114/photo/sunset-at-rashtrapati-bhavan-india.jpg?s=1024x1024&w=gi&k=20&c=nSjcrOn7H88GbAFBSja-B-3ZVMCjpvFHTUpHHqAd3kc="
          alt="Sunset at Rashtrapati Bhavan"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>Rashtrapati Bhavan</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://media.gettyimages.com/id/498489079/photo/taj-mahal-reflection.jpg?s=1024x1024&w=gi&k=20&c=nKMhASnGDosbIZ6_iJeHk_SdVMp_NnnAC_r4sOg4wYI="
          alt="Taj Mahal Reflection"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Agra</h1>
          <h2>Taj Mahal Reflection</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;