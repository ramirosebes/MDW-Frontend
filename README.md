# Metodologías y Desarrollo Web - Final Frontend
> Aplicación web

Aplicación web desarrollada utilizando principalmente React, además de distintas librerias que facilitaron el desarrollo o las visuales del aplicativo.

## Instalación y uso

Para descargar los paquetes necesarios del aplicativo: 

```sh
npm install
```

Crear archivo .env indicando:

```sh
REACT_APP_FIREBASE_API_KEY (Apikey de Firebase)
REACT_APP_FIREBASE_AUTH_DOMAIN (Dominio de auth de Firebase)
REACT_APP_FIREBASE_PROJECT_ID (ID del proyecto de Firebase)
REACT_APP_FIREBASE_STORAGE_BUCKET (Bucket de almacenamiento de Firebase)
REACT_APP_FIREBASE_MESSAGING_SENDER_ID (ID de remitente de mensaje de Firebase)
REACT_APP_FIREBASE_APP_ID (ID de aplicacion de Firebase)
REACT_APP_FIREBASE_MEASUREMENT_ID (ID de Google Analytics "opcional")
```

Inicialización:

```sh
npm start
```

## Pantallas

* Home
    * Pantalla inicial del aplicativo sin mucha información.
    * No requiere estar logueado.

* Products
    * Pantalla que permite a los usuarios obtener un listado de los productos.
    * Pantalla que permite a los usuarios obtener un producto especifico
    * No requiere estar logueado.

* Login
    * Pantalla que permite a los administradores iniciar sesión dentro del aplicativo y tener acceso a distintas pantallas.
    * No requiere estar logueado.
    * Será redireccionado en caso de estar logueado.

* Manage products
    * Pantalla que permite a los administradores crear, editar o eliminar productos.
    * Requiere estar logueado.
    * Será redireccionado en caso de no estar logueado.
 
  * Page not found
    * Pantalla que indica que el dominio buscado no existe

## Repositorios

#### [Metodologias y Desarrollo Web - Final Frontend](https://github.com/ramirosebes/MCGA-Frontend)
#### [Metodologias y Desarrollo Web - Final Backend](https://github.com/ramirosebes/MCGA-Backend)

## Tecnologias

* HTML
* CSS
* JavaScript
* ES6
* React Js
* React Hook Form
* React Router DOM
* Axios
* Firebase

## Autores

| Nombre | Mail     | Github                | LinkedIn                |
| :-------- | :------- | :------------------------- | :------------------------- |
| Antuna Juan Manuel | altunajuan@gmail.com | [@Venineitor2000](https://github.com/Venineitor2000) | [Antuna Juan Manuel](https://www.linkedin.com/in/juan-manuel-altuna-641782176/) |
| Miñón Lorenzo | nicolasmicheletti@gmail.com | [@LorenzoMinon](lorenzominon01@gmail.com) | [Miñón Lorenzo](https://www.linkedin.com/in/lorenzominon/) |
| Sebes Ramiro Nicolás | ramirosebes@gmail.com | [@ramirosebes](https://github.com/ramirosebes) | [Sebes Ramiro Nicolás](https://www.linkedin.com/in/ramirosebes) |
