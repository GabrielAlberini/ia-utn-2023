// eslint-disable-next-line react/prop-types
export const AudioPlayer = ({ audioUrl }) => {
  return (
    <div>
      <p className="subtitle pt-3">Respuesta:</p>
      <audio key={audioUrl} controls className="mb-3">
        <source src={audioUrl} type="audio/wav" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};
