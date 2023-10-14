import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li className="contact-item">
          <img src="./email.svg" alt="Email Icon" />
          <p>example@example.com</p>
        </li>
        <li className="contact-item">
          <img src="./phone.svg" alt="Phone Icon" />
          <p>123-456-7890</p>
        </li>
        <li className="contact-item">
          <img src="./map-pin.svg" alt="Location Icon" />
          <p>123 Street, City, Country</p>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
