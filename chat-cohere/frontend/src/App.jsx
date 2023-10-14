import { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("Respuesta...");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post("http://localhost:3002/api/request", {
      query: input,
    });
    setResponse(response.data);
    setLoading(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chat con API de Cohere</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                placeholder="¿Qué quieres saber?"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
        {loading ? <p>Está en carga...</p> : <p>{response}</p>}
      </div>
    </section>
  );
};

export { App };
