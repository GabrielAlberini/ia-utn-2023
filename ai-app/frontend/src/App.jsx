import { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer";
import { AudioList } from "./components/AudioList/AudioList";
import { Form } from "./components/Form/Form";
import { Loader } from "./components/Loader/Loader";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [audioList, setAudioList] = useState([]);

  // Realiza la solicitud GET al endpoint http://localhost:3002/api/recuperate al cargar el componente
  const fetchAudioList = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/recuperate");
      setAudioList(response.data.audioFilesWithPrefix);
    } catch (error) {
      console.error("Error al recuperar la lista de audios:", error);
    }
  };

  useEffect(() => {
    // Llama a la función para recuperar la lista de audios al cargar el componente
    fetchAudioList();
  }, []); // La dependencia vacía asegura que la solicitud se realice solo una vez al montar el componente

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await axios.post("http://localhost:3002/api/generate", {
        phrase: inputText,
      });

      setAudioUrl(result.data.url);
      playAudio(result.data.url);
      setInputText("");
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    } finally {
      setLoading(false);
    }
  };

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="container p-3">
      <h1 className="title">Generador de Frases</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Loader loading={loading} />
      {audioUrl && <AudioPlayer audioUrl={audioUrl} />}
      {audioList?.length > 0 && <AudioList audioList={audioList} />}
    </div>
  );
};

export { App };
