"use client";
import { useSelector, useDispatch } from "react-redux";

import { setOffset } from "@/store/slice/paginationSlice";
import { usePokemonData } from "./hooks/usePokemonData";
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonList = () => {
  const { offset, limit } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = usePokemonData({
    offset,
    limit,
  });

  const handleNext = () => dispatch(setOffset(offset + limit));
  const handlePrevious = () => dispatch(setOffset(Math.max(offset - limit, 0)));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Pokémon Explorer</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={offset === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
