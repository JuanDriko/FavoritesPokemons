## Descripción

Esta es una aplicación sencilla creada con Vue.js 3 para visualizar y gestionar una lista de Pokémon favoritos. La aplicación obtiene los datos de los Pokémon desde la API pública de [PokeAPI](https://pokeapi.co/). Los usuarios pueden buscar Pokémon, agregar y eliminar de sus favoritos, y ver detalles adicionales sobre cada Pokémon en un modal. También incluye una funcionalidad para compartir los datos de un Pokémon a través del portapapeles.

## Tecnologías Utilizadas

- Vue.js 3 (Composition API): Framework utilizado para crear la interfaz de usuario, gestionar el estado reactivo y organizar los componentes (como el modal de detalles y el loader que simula la carga de datos).
- Vue Router: Para la navegación entre vistas, permitiendo gestionar las diferentes secciones de la aplicación.
- Pinia: Librería utilizada para la gestión del estado de los Pokémon favoritos, de manera reactiva y eficiente.
- Axios: Utilizado para hacer las solicitudes HTTP a la API pública de PokeAPI.
- Bootstrap: Para diseñar y maquetar los elementos de la interfaz de usuario (botones, contenedores, modales, etc.).
- CSS: Para la personalización del diseño y la animación del "loader" que simula la carga de los datos (una Pokébola girando).
- Jest: Para realizar pruebas unitarias, principalmente del componente modal y la función `sharePokemon`, que permite copiar al portapapeles los datos de un Pokémon.

## Instalación

-  git clone https://github.com/JuanDriko/FavoritesPokemons.git
- npm install
- npm run dev

## Pruebas 

- npm run test
# FavoritesPokemons
