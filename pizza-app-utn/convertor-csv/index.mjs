import { writeFileSync } from "node:fs";

const array = [
  {
    name: "Margarita",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/margarita.png",
    ingredients: "Tomate, mozzarella, albahaca",
    price: 8.99,
    history: "Clásica y sencilla, originaria de Nápoles.",
  },
  {
    name: "Hawaiana",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/hawaiana.png",
    ingredients: "Jamón, piña, mozzarella",
    price: 9.99,
    history: "Controversial, con sabores dulces y salados.",
  },
  {
    name: "Pepperoni",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/pepperoni.png",
    ingredients: "Pepperoni, queso, salsa de tomate",
    price: 10.99,
    history: "Favorita americana con un toque picante.",
  },
  {
    name: "Cuatro Quesos",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/cuatroquesos.png",
    ingredients: "Mozzarella, gorgonzola, parmesano, provolone",
    price: 11.99,
    history: "Deliciosa mezcla de quesos para los amantes del queso.",
  },
  {
    name: "Vegetariana",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/vegetariana.png",
    ingredients: "Vegetales variados, queso, salsa de tomate",
    price: 9.49,
    history: "Sana y deliciosa, una opción para los amantes de las verduras.",
  },
  {
    name: "Marinera",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/marinera.png",
    ingredients: "Mariscos variados, salsa de tomate, queso",
    price: 12.99,
    history: "Inspirada en sabores del mar para los amantes de los mariscos.",
  },
  {
    name: "Napolitana",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/napolitana.png",
    ingredients: "Anchoas, aceitunas, alcaparras, tomate",
    price: 10.49,
    history: "Sabores tradicionales napolitanos en cada bocado.",
  },
  {
    name: "Barbacoa",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/barbacoa.png",
    ingredients: "Carne de res, salsa barbacoa, cebolla, queso",
    price: 11.49,
    history: "Inspirada en el sabor ahumado de la barbacoa tradicional.",
  },
  {
    name: "Mexicana",
    image:
      "https://demo-menu-restaurant-ada-itw.vercel.app/assets/mexicana.png",
    ingredients: "Carne molida, jalapeños, maíz, frijoles",
    price: 10.99,
    history: "Una explosión de sabores picantes y deliciosos de México.",
  },
  {
    name: "Caprese",
    image: "https://demo-menu-restaurant-ada-itw.vercel.app/assets/caprese.png",
    ingredients: "Tomate, mozzarella fresca, albahaca, aceite de oliva",
    price: 9.99,
    history: "Simplicidad italiana con ingredientes frescos y sabrosos.",
  },
];

function convertToCSV(array) {
  const separator = ",";
  const keys = Object.keys(array[0]);
  const csvContent =
    keys.join(separator) +
    "\n" +
    array
      .map((row) => {
        return keys
          .map((key) => {
            let cell =
              row[key] === null || row[key] === undefined ? "" : row[key];
            cell = cell instanceof Date ? cell.toLocaleString() : cell;
            cell = cell.toString().replace(/"/g, '""');
            if (cell.search(/("|,|\n)/g) >= 0) {
              cell = `"${cell}"`;
            }
            return cell;
          })
          .join(separator);
      })
      .join("\n");

  return csvContent;
}

const csv = convertToCSV(array);

writeFileSync("./data/data.csv", csv);
console.log("Converted succesful :)");
