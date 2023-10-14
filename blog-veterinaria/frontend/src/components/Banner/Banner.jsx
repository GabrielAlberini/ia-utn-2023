import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Huellas: donde cada mascota es parte de nuestra familia</h1>
        <h2>
          Cuidando a tus compañeros peludos con amor y dedicación desde 2005
        </h2>
        <div className="input-container">
          <input type="text" placeholder="Introduce tu correo electrónico" />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  );
};

export { Banner };
