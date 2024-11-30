import React from "react";
import { usePokemonDetails } from "./hooks/usePokemonDetails";
import Link from "next/link";
import Image from "next/image";

const PokemonCard = ({ pokemon }) => {
  const {
    data: details,
    isError,
    isLoading,
  } = usePokemonDetails({ name: pokemon.name });

  console.log("Error=====>", isError);

  if (isLoading)
    return <div className="bg-gray-100 p-4 rounded">Loading...</div>;

  return (
    <>
      <div className="flex flex-col justify-center p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
        <Link
          href={`/pokemon/${details?.name}`}
          className="bg-gray-100 p-4 rounded flex justify-center items-center w-full"
        >
          <Image
            src={details.sprites.other.home.front_default}
            alt={details.name}
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>
        <span className="mt-2 text-sm md:text-base text-zinc-500">
          #{details.id}
        </span>
        <span className="text-md md:text-lg font-bold capitalize">
          {pokemon.name}
        </span>
      </div>
    </>
  );
};

export default PokemonCard;
