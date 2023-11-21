import { useEffect } from "react";
import { createCanvasWithEffect2 } from "canva-utn";
import "./App.css";

const App = () => {
  useEffect(() => {
    createCanvasWithEffect2("containerId");
  }, []);

  return (
    <div>
      <div id="containerId"></div>
    </div>
  );
};

export { App };
