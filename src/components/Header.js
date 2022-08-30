import "./Header.css";
import pic from "./logo.jpg";

function Header() {
  return (
    <>
      <header className="background_header">
        <div className="container">
          <div className="main">
            <div classname="logo">
              <img src={pic} />
            </div>
            <div className="header">
              <ul className="style">
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <button className="btn" onClick={sayLogin}>
                  Login
                </button>
                <button className="btn" onClick={saySignup}>
                  Signup
                </button>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function sayLogin() {
  alert("Login not enable!");
}
function saySignup() {
  alert("Signup not enable! You cannot SIGNUP!");
}
export default Header;
