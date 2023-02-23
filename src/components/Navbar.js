import "./Navbar.css"

// import NavMenu1 from "./NavMenu1";
export default function Navbar() {
    return (
      <nav className="navigation">
        {/* <a href="/" className="brand-name">
          MediYog
        </a> */}
        &nbsp;  &nbsp;  &nbsp;  
        <img src="images/logo-01.png" width={57} height={54} alt="logo" />
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Home</a>
              
               {/* <NavMenu1 /> */}
            </li>
            <li>
              <a href="/AboutUs">About Us</a>
              
            </li>
            <li>
              <a href="/contactUs">Contact</a>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }