// Obtener referencia a los elementos del DOM
const pokemonInput = document.getElementById('pokemonInput');
const pokemonContainer = document.getElementById('pokemonContainer');

// Ocultar el contenedor de Pokémon inicialmente
pokemonContainer.style.display = 'none';

// Función para obtener un Pokémon
async function getPokemon() {
  const pokemonId = pokemonInput.value.trim();

  if (pokemonId === '0') {
    showError('Por favor, ingrese un ID de Pokémon válido.');
    return;
  }

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('No se encontró ningún Pokémon con ese ID.');
    }

    const pokemon = await response.json();
    renderPokemonCard(pokemon);
  } catch (error) {
    showError('Error al cargar los datos del Pokémon: ' + error.message);
  }
}

// Función para renderizar la tarjeta de Pokémon
function renderPokemonCard(pokemon) {
  // Mostrar el contenedor de Pokémon
  pokemonContainer.style.display = 'block';

  pokemonContainer.innerHTML = '';

  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h3');
  name.textContent = pokemon.name;

  const types = document.createElement('p');
  types.innerHTML = '<strong>Tipo(s):</strong> ' + getTypes(pokemon);

  const height = document.createElement('p');
  height.innerHTML = '<strong>Altura:</strong> ' + (pokemon.height / 10) + ' m';

  const weight = document.createElement('p');
  weight.innerHTML = '<strong>Peso:</strong> ' + (pokemon.weight / 10) + ' kg';

  const image = document.createElement('img');
  image.src = pokemon.sprites.front_default;
  image.alt = 'Imagen de ' + pokemon.name;

  card.appendChild(name);
  card.appendChild(types);
  card.appendChild(height);
  card.appendChild(weight);
  card.appendChild(image);

  pokemonContainer.appendChild(card);
}

// Función para obtener los tipos de Pokémon
function getTypes(pokemon) {
  const types = pokemon.types.map(type => type.type.name);
  return types.join(', ');
}

// Función para mostrar errores
function showError(errorMessage) {
  pokemonContainer.style.display = showError; // Ocultar el contenedor de Pokémon en caso de error

  pokemonContainer.innerHTML = '';

  const error = document.createElement('p');
  error.classList.add('error');
  error.textContent = errorMessage;

  pokemonContainer.appendChild(error);

  // Centrar el mensaje de error en el medio del contenedor de Pokémon
  pokemonContainer.style.display = 'flex';
  pokemonContainer.style.justifyContent = 'center';
  pokemonContainer.style.alignItems = 'center';
  pokemonContainer.style.textAlign = 'center';
}


