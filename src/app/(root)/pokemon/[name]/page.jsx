import PokemonDetails from "@/components/pokemon-details/PokemonDetails";
import React from "react";

const page =  async({ params }) => {

  const name = (await params).name

  return (
    <div className="pb-10">
       <PokemonDetails name={name}></PokemonDetails>
    </div>
  );
};

export default page;
