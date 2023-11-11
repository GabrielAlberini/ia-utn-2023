/* eslint-disable react/prop-types */
export const Form = ({ inputText, setInputText, handleSubmit, loading }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">
          Ingresa tu mensaje:
          <input
            className="input mt-3"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </div>
      <button className="button is-primary" type="submit" disabled={loading}>
        Generar Frase
      </button>
    </form>
  );
};
