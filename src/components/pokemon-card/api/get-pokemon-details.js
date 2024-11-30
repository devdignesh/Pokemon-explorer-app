import axios from "axios";

export const getPokemonDetails = async (name) => {
  try {

    const endpoint =  `${process.env.NEXT_PUBLIC_API_BASE_URL}/${name}`;
    const { data } = await axios.get(endpoint);
    return data;

  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Pokémon details");
  }
};
