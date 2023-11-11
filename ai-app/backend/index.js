// Importa los módulos necesarios de Electron
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// Declara una variable global para la ventana principal de la aplicación
let mainWindow;

// Define una función para crear la ventana principal
function createWindow() {
  // Crea una nueva instancia de la ventana del navegador con dimensiones 800x600
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Carga el archivo HTML de la interfaz de usuario en la ventana principal
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../frontend/dist/index.html"), // Ruta del archivo HTML
      protocol: "file:", // Protocolo para cargar un archivo local
      slashes: true,
    })
  );

  // Asocia un evento para cuando la ventana principal se cierre
  mainWindow.on("closed", function () {
    mainWindow = null; // Establece la referencia de la ventana principal a nula cuando se cierra
  });
}

// Evento "ready" se activa cuando Electron ha terminado de inicializar
app.on("ready", createWindow);

// Evento "window-all-closed" se activa cuando todas las ventanas están cerradas
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit(); // Cierra la aplicación si no está en la plataforma MacOS
});

// Evento "activate" se activa cuando la aplicación se activa (por ejemplo, en MacOS cuando se hace clic en el ícono del dock)
app.on("activate", function () {
  if (mainWindow === null) createWindow(); // Crea una nueva ventana si no hay ninguna ventana principal
});
