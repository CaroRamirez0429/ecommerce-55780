import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
  {
    id: "Adff21",
    nombre: "Purina Excellent Maintenance",
    descripcion:
      "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud. Con esta opción de Excellent podrás cubrir las necesidades nutricionales y energéticas de tu perro. Se recomienda visitar a tu veterinario en caso de intoxicación o alergía",
    stock: 5,
    categoria: "mascotas",
    imagen: "/img/purina.webp",
    precio: 430,
  },
  {
    id: "Gjmn222",
    nombre: "Soga Juguete Para Perros",
    descripcion:
      "SOGA JUGUETE PARA PERROS 2 NUDOS PURO ALGODÓN 20 CM. Puro algodón, muy resistente y no daña a su perro. Favorece la limpieza e higiene de la dentadura de su mascota. Es caso de ingesta por accidente consulta a tu veterinario.",
    stock: 10,
    categoria: "mascotas",
    imagen: "/img/soga.webp",
    precio: 150,
  },
  {
    id: "Lom222",
    nombre: "Juguete Pelota Para Perros",
    descripcion:
      "GIGWI BALL SQUEAKER en tonalidades rojo y púrpura en su versión mediana. Este juguete combina funcionalidad y estilo, siendo un elemento de entretenimiento para tu compañero canino y una muestra de calidad y diseño refinado.",
    stock: 2,
    categoria: "mascotas",
    imagen: "/img/pelota.webp",
    precio: 300,
  },
  {
    id: "Htm123",
    nombre: "Pedigree Rodeo Snacks",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 3,
    categoria: "mascotas",
    imagen: "/img/snack.webp",
    precio: 100,
  },
  {
    id: "Jfw222",
    nombre: "Agua Mineralizada sin Gas",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 1,
    categoria: "bebidas",
    imagen: "/img/agua.webp",
    precio: 120,
  },
  {
    id: "Gtm222",
    nombre: "Gaseosa Pepsi Black",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 3,
    categoria: "bebidas",
    imagen: "/img/pepsi.webp",
    precio: 140,
  },
  {
    id: "Gtm221",
    nombre: "Energizante Monster Energy",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 3,
    categoria: "bebidas",
    imagen: "/img/monster.webp",
    precio: 160,
  },
  {
    id: "Gtm566",
    nombre: "Jugo Cepita Naranja",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 5,
    categoria: "bebidas",
    imagen: "/img/cepita.jpeg",
    precio: 110,
  },
  {
    id: "Tmy543",
    nombre: "Alfajor Triple Milka Mousse",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 6,
    categoria: "kiosco",
    imagen: "/img/milka.webp",
    precio: 70,
  },
  {
    id: "Tmy545",
    nombre: "Alfajor Block Cofler",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 7,
    categoria: "kiosco",
    imagen: "/img/cofler.jpeg",
    precio: 75,
  },
  {
    id: "Tmy546",
    nombre: "Gomitas Arcor Mogul Rollo",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 30,
    categoria: "kiosco",
    imagen: "/img/mogul.webp",
    precio: 20,
  },
  {
    id: "Tmy547",
    nombre: "Gomitas Mogul Ladrillos",
    descripcion:
      "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
    stock: 15,
    categoria: "kiosco",
    imagen: "/img/mogul-ladrillos.webp",
    precio: 25,
  },
];

const seedProducts = () => {
  productos.map(({ id, ...rest }) => {
    const productosRef = collection(db, "productos");
    addDoc(productosRef, rest);
  });
  return;
};

seedProducts();
