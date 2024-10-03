# PlaylistChallenge

Se solicita desarrollar una aplicación que permita reproducir un listado de temas de un álbum determinado y la adición de nuevos temas.

## Listado de álbumes
Mostrar los álbumes disponibles en base al diseño solicitado con los datos de la API provista. Esta pantalla se debe mostrar inicialmente.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums](https://62ec30ee818ab252b6f9352d.mockapi.io/albums) (GET)

**MOCKUPS**

### #1
![album-list-1](https://github.com/user-attachments/assets/87bab7ea-35a4-4992-b02e-03919f3797a8)

### #2

![album-list-2](https://github.com/user-attachments/assets/fe011538-9aee-4ecb-8434-e50f9ee53703)

## Nueva canción
Crear un formulario que permita cargar una nueva canción de un álbum determinado con las siguientes validaciones:

- **Nombre**: requerido y máximo de 20 caracteres.
- **Duración**: requerido, control de tipo rango que permita valores entre 1 y 300. Mostrar el valor actual en una etiqueta aparte.
- **Orden**: requerido, numérico. Se usará luego en el reproductor.
- **Fecha**: requerido.
- **Usuario**: usuario por el cual se debe filtrar para evitar problemas de concurrencia.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs](https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs) (POST)

**MOCKUPS**

### #1
![song-form-1](https://github.com/user-attachments/assets/4d052943-36ed-4ae1-b5c9-be8323b5bd61)

### #2
![song-form-2](https://github.com/user-attachments/assets/1b7d0be3-66ea-4957-aa17-c76b1d65e785)

## Reproductor
Desarrollar una página que simule un reproductor. El reproductor debe:

- Iniciar la reproducción mostrando la duración y cuánto tiempo lleva reproduciendo.
- Permitir pausar (botón **Stop**) y reanudar la reproducción (botón **Play**).
- Al abrir el reproductor, debe reproducirse la primera canción según el orden.
- Incluir una opción para avanzar a la siguiente canción (según el orden).
  - Si no hay ninguna canción luego de la actual, no se debe mostrar la opción de avanzar.
- Incluir una opción para cerrar el reproductor y volver al listado de álbumes.

Para filtrar la API por campos, se deben proveer parámetros por query string al final de la URL. Tener en cuenta que la respuesta siempre será un listado de datos, incluso si solo se encuentra un elemento.

**API**: [https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs](https://62ec30ee818ab252b6f9352d.mockapi.io/albums/ID_ALBUM/songs) (GET)

**MOCKUPS**

### #1
![music-player-1](https://github.com/user-attachments/assets/4aa51148-e3f0-4e8b-b6fe-2dfb5d713ee7)

### #2
![music-player-2](https://github.com/user-attachments/assets/9aa5781c-637a-49d8-9a1d-5ebef31166eb)

### #3
![music-player-3](https://github.com/user-attachments/assets/2881d625-d7ca-40b1-b7e2-2aa36127fe5a)

### #4
![music-player-4](https://github.com/user-attachments/assets/05f97482-afa1-4570-8232-348b6d3f8494)


## Consideraciones
- Utilizar **routing** o servicios con **Observables** para resolver la visualización de los distintos componentes.
- Implementar la comunicación con la API proporcionada. También pueden replicar la misma API con una cuenta personal de **Mock API**.
