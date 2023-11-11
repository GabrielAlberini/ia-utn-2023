/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const AudioList = ({ audioList }) => {
  return (
    <div>
      <p className="subtitle mt-4">Lista de Audios:</p>
      <ul>
        {audioList.map((audio, index) => (
          <li key={index} className="mb-3">
            <audio controls>
              <source src={audio} type="audio/wav" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};
