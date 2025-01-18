import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">

        <div className="logo">
          <img src="https://raw.githubusercontent.com/gocomet-india/frontend-hotel-assignment/286ebfc6c07d6a38969da05b673b21be6e89eab3/book-my-hotel-logo.svg" alt="Logo" className="logoImage" />
        </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
