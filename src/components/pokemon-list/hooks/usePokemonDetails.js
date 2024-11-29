import { useQuery } from "@tanstack/react-query"; 
import { getPokemonDetails } from "../api/get-pokemon-details";

export const usePokemonDetails = ({ url }) => {
  return useQuery({
    queryKey: ["pokemonDetails", url], // URL in queryKey for uniqueness
    queryFn: async () => {
      if (!url) throw new Error("URL is undefined");  
      return getPokemonDetails(url);  
    },
    enabled: !!url, // Only run query if URL is defined
  });
};

