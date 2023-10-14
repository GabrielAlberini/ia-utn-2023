import "./TestimonialSlider.css";
const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider">
      <div className="testimonial">
        <img src="url_de_la_imagen_1" alt="Testimonial 1" />
        <p className="comment">Comentario del primer testimonio</p>
        <p className="name">Nombre del primer testimonio</p>
      </div>
      <div className="testimonial">
        <img src="url_de_la_imagen_2" alt="Testimonial 2" />
        <p className="comment">Comentario del segundo testimonio</p>
        <p className="name">Nombre del segundo testimonio</p>
      </div>
      <div className="testimonial">
        <img src="url_de_la_imagen_2" alt="Testimonial 2" />
        <p className="comment">Comentario del segundo testimonio</p>
        <p className="name">Nombre del segundo testimonio</p>
      </div>
      <div className="testimonial">
        <img src="url_de_la_imagen_2" alt="Testimonial 2" />
        <p className="comment">Comentario del segundo testimonio</p>
        <p className="name">Nombre del segundo testimonio</p>
      </div>
    </div>
  );
};

export { TestimonialSlider };
