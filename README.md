# Proyecto Películas - Frontend en React

Este proyecto es el **frontend en React** de una aplicación de consulta de películas. Se conecta a una **API REST en Node.js** que utiliza **MySQL** y **Stored Procedures (SP)** para obtener los datos. Todo el backend fue construido por mi y tiene su propio repositorio.  

La app soporta:

- Filtrado por **Título, País, Idioma y Género**.
- **Búsqueda por input** de texto.
- Manejo de **errores** y **loading**.
- Interfaz construida con **Chakra UI**.
- Patrón **DAO** para consumo de datos y enfoque **DRY** en el código.

---

## Tecnologías utilizadas

- React 18+
- Chakra UI
- Node.js (API backend)
- MySQL con Stored Procedures
- Fetch API
- JavaScript (ES6+)


---

## Características

1. **Consulta de películas**: 
   - Obtiene todas las películas desde la API en Node.js.
   - Los datos incluyen título, sinopsis, país, idioma, género, imagen y video.

2. **Filtros avanzados**:
   - Filtrado por 4 campos: `Título`, `País`, `Idioma`, `Género`.
   - Los filtros se combinan para refinar la búsqueda.

3. **Búsqueda por input**:
   - Permite buscar películas por texto en el título.
   - Compatible con los filtros aplicados.

4. **Manejo de errores**:
   - Si la API no responde o no hay resultados, muestra mensajes amigables.
   - Evita que la app rompa al usar `.map()`.

5. **Loading**:
   - Mientras se cargan los datos, se muestra un mensaje o spinner de “Cargando…”.

6. **Buenas prácticas**:
   - Clase `API_Peliculas` que centraliza los fetch requests → DRY.
   - Uso de **DAO** en backend para manejar los datos de MySQL.
   - Interfaz elegante y accesible con Chakra UI.

---

## Link del proyecto 

* https://react-peliculas-tau.vercel.app/

## Link del portafolio

* https://daxdev.helioho.st/

## Instalación

Clona el repositorio y ejecuta los siguientes comandos:

```bash
git clone https://github.com/tu-usuario/tu-repo-react.git
cd tu-repo-react
npm install
npm start