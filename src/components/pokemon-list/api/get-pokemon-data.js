import axios from "axios";

 

export const getPokemonData = async ({ offset, limit }) => {

  try {
    const {data} = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}?offset=${offset}&limit=${limit}`,
    );
    return data;

  } catch (error) {
      return error.message;
  }
  
};
