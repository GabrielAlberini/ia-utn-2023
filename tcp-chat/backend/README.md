# Documentación del Proyecto de Chat con Protocolo TCP

Este proyecto consiste en el desarrollo de un sistema de chat basado en el protocolo TCP, con un backend construido en Node.js y un frontend desarrollado con Vite y React. A continuación, se proporcionan instrucciones detalladas para la configuración, ejecución y funcionalidad del sistema.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- backend/
- frontend/

## Backend

El backend se desarrolló utilizando Node.js y requiere las siguientes dependencias para su funcionamiento:

- **cors@2.8.5**: Para permitir las solicitudes de recursos cruzados.
- **dotenv@16.3.1**: Para cargar variables de entorno desde un archivo .env.
- **express@4.18.2**: Para la creación de la API del servidor.
- **readline-sync@1.4.10**: Para la lectura de entrada del usuario.

Para configurar las variables de entorno necesarias, crea un archivo `.env` en el directorio raíz y asigna valores relevantes a las variables de entorno que se encuentran en el archivo `.env.example`.

## Ejecución del Backend

Para levantar el backend, siga estos pasos desde la terminal en el directorio `./backend`:

Ejecute el servidor TCP con el comando:

`npm run server "nombre del usuario"`

Reemplace "nombre del usuario" con el nombre del usuario correspondiente.

Posteriormente, levante una conexión con el servidor ejecutado anteriormente utilizando el comando:

`npm run client "nombre del usuario"`

De nuevo, sustituya "nombre del usuario" con el nombre del usuario respectivo.

## Base de Datos

Cada mensaje enviado se almacena en una base de datos local con el siguiente formato:

```javascript
{
"id": "2f7363f3-2f57-4146-bce4-8bcff21c7116",
"user": "test user",
"message": "test message",
"date": "21/10/2023, 13:34:55"
}
```

## Servidor HTTP

El backend incluye un servidor HTTP que proporciona al frontend el historial de mensajes. Para ejecutar este servidor, utilice el siguiente comando desde la terminal en el directorio ./backend:

`npm run httpServer`

Es importante mencionar que tanto el servidor TCP, el cliente TCP y el servidor HTTP deben ejecutarse simultáneamente en terminales independientes, ya que cada uno requiere un proceso continuo.

## Frontend

El frontend se construyó con Vite y React. Para configurar y ejecutar el frontend, siga estos pasos desde la terminal en el directorio ./frontend:

## Instale las dependencias utilizando el comando:

`npm install`

Posteriormente, levante el sistema utilizando el comando:

`npm run dev`

## Notas Finales

Asegúrese de seguir estas instrucciones detalladas para configurar, ejecutar y utilizar correctamente el sistema de chat basado en TCP. Si encuentra algún problema o tiene alguna pregunta, consulte la documentación adjunta o póngase en contacto con el equipo de desarrollo.
