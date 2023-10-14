import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Veterinaria Huellas</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Blog</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
