
import React from "react";
import PokemonList from "@/components/pokemon-list/PokemonList";

const page = () => (
  <div className="bg-gray-200/50 md:px-10 px-5 pt-10">
    <h1 className="md:text-3xl text-2xl font-bold text-center mb-4 ">
      Pokémon Explorer
    </h1>
    <PokemonList />
  </div>
);
export default page;
