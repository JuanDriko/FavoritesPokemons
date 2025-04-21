import axios from 'axios';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = async () => {
    const response = await axios.get(`${urlPokemon}?limit=100000&offset=0`);
    return response.data.results;
};

export const getDetail = async (name) => {
    const res = await axios.get(`${urlPokemon}/${name}`);
    return res.data;
  };