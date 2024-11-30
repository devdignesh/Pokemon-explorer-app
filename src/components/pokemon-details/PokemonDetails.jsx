'use client'

import React from "react";
import Image from "next/image";
import { usePokemonDetails } from "../pokemon-card/hooks/usePokemonDetails";

const PokemonDetails = ({ name }) => {
  const { data: details, isError, isLoading } = usePokemonDetails({ name });

  if (isLoading) {
    return <div className="p-4">Loading...</div>;
  }

  if (isError || !details) {
    return <div className="p-4">Error loading Pokémon details.</div>;
  }

  return (
    <div className="mx-auto flex flex-col justify-center items-center pt-10 px-4">
      <div className="flex justify-center items-center space-x-4">
        <h1 className="md:text-3xl text-2xl font-bold capitalize">
          {details.name}
        </h1>
        <span className="md:text-3xl text-2xl font-bold text-zinc-500">
          #{details.id}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row   mt-10 lg:space-x-10">
        <div className="bg-gray-100 rounded-md flex justify-center items-center p-4">
          <Image
            src={details.sprites.other.home.front_default}
            alt={details.name}
            width={280}
            height={100}
          />
        </div>
        <div className="">
          <div className="bg-sky-600 p-6 rounded-lg mt-6 lg:mt-0 sm:min-w-80 text-white w-full">
            <ul className="space-y-2">
              <li>
                <span className="block">Height:</span>{" "}
                <span className="text-black text-lg"> {details.height}</span>
              </li>
              <li>
                <span className="block">Weight:</span>{" "}
                <span className="text-black text-lg"> {details.weight}</span>
              </li>
              <li>
                <span className="block">Base Experience:</span>{" "}
                <span className="text-black text-lg">
                  {details.base_experience}
                </span>
              </li>
              <li>
                <span className="block">Abilities:</span>
                {details.abilities.map((ability) => (
                  <span
                    key={ability.ability.name}
                    className="text-black text-lg mr-2 capitalize"
                  >
                    {ability.ability.name}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <span className="text-xl">Type</span>
            <div className="mt-4 flex flex-wrap">
              {details.types.map((type) => (
                <span
                  key={type.type.name}
                  className="bg-green-600 mr-2 mb-2  px-6 capitalize sm:py-2 py-1 text-white rounded-md"
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Shows stats according pokemon */}
      <div className="mt-10 w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Stats</h2>
        <div className="space-y-4">
          {details.stats.map((stat) => (
            <div key={stat.stat.name} className="flex items-center">
              <span className="capitalize w-32">{stat.stat.name}</span>
              <div className="flex-1 bg-gray-200 rounded h-4">
                <div
                  className="bg-sky-600 h-4 rounded"
                  style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                />
              </div>
              <span className="ml-2">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
