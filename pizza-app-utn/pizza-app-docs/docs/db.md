---
sidebar_position: 1
---

# PASO 1: Estructura de la Base de Datos

Para la gestión de usuarios, se utilizará una hoja de cálculo como base de datos. Se seguirán los siguientes pasos:

- Crear una hoja de cálculo que funcionará como **base de datos** (db).
- Definir hojas separadas para cada usuario, respetando una estructura de datos uniforme en todas las hojas.

Consolidar todas las hojas de usuarios en una hoja llamada `users`, donde se recopilarán en base a la siguiente estructura:

- En el campo "slug", se especificará el nombre asignado a la hoja del usuario.
- En el campo "url", se colocará el endpoint al que se realizará la llamada fetch desde la aplicación.

La gestión de endpoints para cada archivo de usuario se realizará de la siguiente manera:

Ir a la hoja de cálculos, seleccionar **"Archivo"**, luego **"Compartir"**, y posteriormente **"Compartir en la web"** y **"Compartir como CSV"**.
Los pasos anteriores proporcionarán el endpoint necesario para la gestión de la hoja en cuestión.
