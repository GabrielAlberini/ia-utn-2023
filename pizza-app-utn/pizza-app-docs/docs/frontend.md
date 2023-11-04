---
sidebar_position: 2
---

# PASO 2: Desarrollo del Frontend

El desarrollo del frontend del proyecto se llevará a cabo siguiendo los pasos que se detallan a continuación:

- Clonar el repositorio utilizando el siguiente comando:

```bash
git clone https://github.com/GabrielAlberini/bar-app-utn
```

- Instalar las dependencias requeridas para el desarrollo/producción utilizando el comando:

```bash
npm install
```

Las dependencias necesarias incluyen:

- bulma
- papaparse
- react-router-dom
- @fortawesome/fontawesome-free

Para incorporar endpoints personalizados, sigue las instrucciones proporcionadas en el archivo `.env.example`, donde se encuentran las declaraciones de las variables de entorno necesarias. Crea un archivo `.env` y actualízalo con las credenciales correspondientes.

Una vez configurado, para levantar el servicio, ejecuta el siguiente comando:

```bash
npm run dev
```

Con estos pasos, podrás iniciar el desarrollo del frontend de la aplicación y utilizar la base de datos definida para gestionar los usuarios de manera eficiente.
