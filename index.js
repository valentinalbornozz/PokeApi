const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Obtener referencias a los elementos del DOM
const form = document.getElementById('search-form');
const input = document.getElementById('pizza-id');
const resultContainer = document.getElementById('result-container');

// Escuchar el evento submit del formulario
form.addEventListener('submit', handleSubmit);

// Función para manejar la búsqueda de la pizza
function handleSubmit(event) {
  event.preventDefault();

  // Obtener el ID de la pizza ingresado en el input
  const pizzaId = parseInt(input.value);

  // Verificar si el ID es válido
  if (isNaN(pizzaId) || pizzaId <= 0) {
    renderError('¡Ingresa un número de ID válido!');
    return;
  }

  // Buscar la pizza en el arreglo de pizzas por su ID
  const pizza = pizzas.find(pizza => pizza.id === pizzaId);

  // Verificar si se encontró la pizza
  if (pizza) {
    // Renderizar la pizza encontrada
    renderPizza(pizza);

    // Guardar la pizza en localStorage
    localStorage.setItem('lastPizza', JSON.stringify(pizza));
  } else {
    renderError('¡No se encontró ninguna pizza con ese ID!');
  }

  // Limpiar el valor del input
  input.value = '';
}

// Función para renderizar una pizza en el contenedor
function renderPizza(pizza) {
  // Crear la estructura de la card de la pizza
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = pizza.imagen;
  image.alt = pizza.nombre;

  const content = document.createElement('div');
  content.classList.add('content');

  const name = document.createElement('h2');
  name.textContent = pizza.nombre;

  const price = document.createElement('p');
  price.textContent = `Precio: $${pizza.precio}`;

  // Agregar los elementos a la card
  card.appendChild(image);
  card.appendChild(content);
  content.appendChild(name);
  content.appendChild(price);

  // Limpiar el contenedor antes de agregar la nueva pizza
  resultContainer.innerHTML = '';

  // Agregar la card al contenedor
  resultContainer.appendChild(card);
}

// Función para renderizar un mensaje de error en el contenedor
function renderError(message) {
  // Crear un elemento de párrafo para el mensaje de error
  const error = document.createElement('p');
  error.classList.add('error');
  error.textContent = message;

  // Limpiar el contenedor antes de agregar el mensaje de error
  resultContainer.innerHTML = '';

  // Agregar el mensaje de error al contenedor
  resultContainer.appendChild(error);
}

// Obtener la última pizza buscada de localStorage al cargar la página
window.addEventListener('load', () => {
  const lastPizza = localStorage.getItem('lastPizza');

  if (lastPizza) {
    const pizza = JSON.parse(lastPizza);
    renderPizza(pizza);
  }
});
