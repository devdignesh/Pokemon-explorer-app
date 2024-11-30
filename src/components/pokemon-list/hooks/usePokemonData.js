import { useQuery } from "@tanstack/react-query";
import { getPokemonData } from "../api/get-pokemon-data";

export const usePokemonData = ({ offset, limit }) => {
  return useQuery({
    queryKey: ["pokemonList", offset,limit],
    queryFn: async () => {
      return getPokemonData({ offset, limit });
    },
  });
};
