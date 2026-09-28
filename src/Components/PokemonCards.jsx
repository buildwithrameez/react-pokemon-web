export const PokemonCards = ({pokemonData}) => {
  return <li className="pokemon-card">
       <figure>
          <img
           src={pokemonData.sprites.other.dream_world.front_default}
           alt={pokemonData.name}
           className="pokemon-image"
        />
       </figure>

       <h1 className="pokemon-name">{pokemonData.name}</h1>

       <div className="pokemon-highlight pokemon-info">
        <p>{pokemonData.types.map((currType) => 
            currType.type.name).join(', ')}</p>
       </div>

    <div className="grid-three-cols">

  <p className="pokemon-info">
    <strong>{pokemonData.height}</strong>
    <span>Height</span>
   
  </p>

  <p className="pokemon-info">
    <strong>{pokemonData.weight}</strong>
    <span>Weight</span>
  </p>

  <p className="pokemon-info">
    <strong>{pokemonData.stats[5].base_stat}</strong>
    <span>Speed</span>
  </p>

  <p className="pokemon-info">
     <strong>{pokemonData.base_experience}</strong>
    <span>Experience</span>
  </p>

  <p className="pokemon-info">
    <strong>{pokemonData.stats[1].base_stat}</strong>
    <span>Attack</span>
  </p>

  <p className="pokemon-info">
     <strong>
      {pokemonData.abilities
        .map((abilitiesInfo) => abilitiesInfo.ability.name)
        .slice(0, 1)
        .join(", ")}
    </strong>
    <span>Abilities</span>
  </p>

</div>
  </li>
}; 