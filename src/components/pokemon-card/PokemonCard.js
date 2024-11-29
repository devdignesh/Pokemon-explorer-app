import React from "react";
import { usePokemonDetails } from "../pokemon-list/hooks/usePokemonDetails";
import Link from "next/link";

const PokemonCard = ({ pokemon }) => {
  const url = pokemon.url;

  const { data: details, isError, isLoading } = usePokemonDetails({ url });

  if (isLoading)
    return <div className="bg-gray-100 p-4 rounded">Loading...</div>;

  return (
    <Link
      href={`/pokemon/${details?.name}`}
      className="bg-gray-100 p-4 rounded text-center">
      <img
        src={details.sprites.front_default}
        alt={details.name}
        className="mx-auto w-24 h-24"
      />
      <h2 className="mt-2 text-lg font-bold">{details.name}</h2>
    </Link>
  );
};

export default PokemonCard;
