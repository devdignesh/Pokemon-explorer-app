import axios from "axios";

export const getPokemonDetails = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error.message;
  }
};
