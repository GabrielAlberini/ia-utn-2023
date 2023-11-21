# Aplicación de efectos de canvas Interactivos con p5.js

Esta aplicación proporciona tres efectos visuales interactivos utilizando la biblioteca p5.js. Cada efecto está encapsulado en una función independiente que puedes integrar fácilmente en tu proyecto web.

## Instalación

```bash
npm i canva-utn
```

## Uso

```js
import {
  createCanvasWithEffect1,
  createCanvasWithEffect2,
  createCanvasWithEffect3,
} from "canva-utn";
```

### Efecto 1: Partículas en Movimiento

```js
createCanvasWithEffect1("idDelContenedor");
```

- Crea un lienzo interactivo con partículas en movimiento.
- Las partículas rebotan dentro del lienzo al alcanzar los límites.

### Efecto 2: Texto Cambiante con Clics

```js
createCanvasWithEffect2("idDelContenedor");
```

- Crea un lienzo interactivo que cambia de color y muestra texto al hacer clic.
- Haz clic para cambiar el color de fondo y mostrar el texto "AAAAAAAAAAAAA". Si no haces clic, muestra el mensaje "Haz clic".

### Efecto 3: Cambio de Fondo y Formas Dinámicas

```js
createCanvasWithEffect3("idDelContenedor");
```

- Crea un lienzo interactivo con un fondo que cambia de color con el movimiento del ratón.
- Dibuja formas dinámicas, como elipses y líneas, que responden a la posición del ratón y al tiempo.

## Ejemplo de uso en HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="app.js"></script>
  </head>
  <body>
    <div id="contenedor1"></div>
    <div id="contenedor2"></div>
    <div id="contenedor3"></div>

    <script>
      createCanvasWithEffect1("contenedor1");
      createCanvasWithEffect2("contenedor2");
      createCanvasWithEffect3("contenedor3");
    </script>
  </body>
</html>
```

Asegúrate de ajustar los nombres de los archivos y los identificadores de contenedor según tu estructura de proyecto.
