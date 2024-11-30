import React from "react";
import PokemonDetails from "@/components/pokemon-details/PokemonDetails";


const page =  async({ params }) => {

  const name = (await params).name

  return (
    <div className="pb-10">
       <PokemonDetails name={name}/>
    </div>
  );
};

export default page;
