// Definimos el array de pizzas
let pizzas = [
  {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["salsa de tomate", "mozzarella", "albahaca"],
    precio: 1250,
  },
  {
    id: 2,
    nombre: "Pepperoni",
    ingredientes: ["salsa de tomate", "mozzarella", "pepperoni"],
    precio: 400,
  },
  {
    id: 3,
    nombre: "Hawaiana",
    ingredientes: ["salsa de tomate", "mozzarella", "jamón", "piña"],
    precio: 1750,
  },
  {
    id: 4,
    nombre: "Vegetariana",
    ingredientes: [
      "salsa de tomate",
      "mozzarella",
      "champiñones",
      "pimiento",
      "cebolla",
    ],
    precio: 1200,
  },
];

//Ejercicio a entrega 2.8 Métodos de Array
// Las pizzas que tengan un id impar. (Ejercicio "a")
const pizzasConIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

pizzasConIdImpar.forEach((pizza) => {
  console.log(
    `Pizza con id ${pizza.id} es impar - Nombre: ${
      pizza.nombre
    }, Ingredientes: ${pizza.ingredientes.join(", ")}, Precio: $${pizza.precio}`
  );
});

//Ejercicio b entrega 2.8 Métodos de Array
//Responder: ¿Hay alguna pizza que valga menos de $600? (Ejercicio "b")
let hayPizzaBarata = false;

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    hayPizzaBarata = true;
    break;
  }
}

if (hayPizzaBarata) {
  console.log("Sí, hay al menos una pizza que cuesta menos de $600");
} else {
  console.log("No, todas las pizzas cuestan más de $600");
}
//Ejercicio c entrega 2.8 Métodos de Array
//El nombre de cada pizza con su respectivo precio. (Ejercicio "c")
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}: $${pizza.precio}`);
});

//Ejercicio d entrega 2.8 Métodos de Array
//Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. (Ejercicio "d")
pizzas.forEach(pizza => {
        // Utilizo esta linea de guiones para separar las pizzas y sus ingredientes de la consola
    console.log('------------------------------------'); 
    console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
    pizza.ingredientes.forEach(ingrediente => {
      console.log(ingrediente);
    });

  });
  