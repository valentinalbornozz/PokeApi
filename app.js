// Definimos el array de pizzas
const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
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
    console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
    pizza.ingredientes.forEach(ingrediente => {
      console.log(ingrediente);
    });

  });
  
