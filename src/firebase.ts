// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Agrega SDKs para los productos de Firebase que deseas utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyAt4ylu1DmN-vQ741PIkLQrK4rmI1k5bhA",
  authDomain: "mcga-c0b9f.firebaseapp.com",
  projectId: "mcga-c0b9f",
  storageBucket: "mcga-c0b9f.appspot.com",
  messagingSenderId: "1074965946096",
  appId: "1:1074965946096:web:5d3a986b0e06a7dc14ac35"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
