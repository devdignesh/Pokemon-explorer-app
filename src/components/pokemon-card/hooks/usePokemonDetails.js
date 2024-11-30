import { useQuery } from "@tanstack/react-query";
import { getPokemonDetails } from "../api/get-pokemon-details";

export const usePokemonDetails = ({ name }) =>
  useQuery({
    queryKey: ["pokemonDetails", name], // name in queryKey for uniqueness
    queryFn: async () => {
      if (!name) throw new Error("Name is undefined");
      return getPokemonDetails(name);
    },
    enabled: Boolean(name), // Only run query if URL or name is defined
  });
