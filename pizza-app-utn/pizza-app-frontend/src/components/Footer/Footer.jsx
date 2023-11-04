import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer has-background-dark has-text-white">
      <div className="content has-text-centered">
        <p>Our Pizzeria by Pizza Lovers</p>
        <div>
          <a
            className="icon is-large has-text-white"
            href="https://www.facebook.com/"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            className="icon is-large has-text-white"
            href="https://www.twitter.com/"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            className="icon is-large has-text-white"
            href="https://www.instagram.com/"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
