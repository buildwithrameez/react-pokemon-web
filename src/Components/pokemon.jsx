import '../Components/Pokemon.css'
import { useEffect, useState } from "react";

export const FetchPokemonAPI = () => {
    
  const [apiData, setApiData] = useState(null); 

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const FetchPokemonAPI = () => {

    fetch(API)
    .then((res) => res.json())
    .then((data) => {
        setApiData(data);
    })
    .catch((error) => console.error(error)
    )

  };

  useEffect(() => {
    
    FetchPokemonAPI();

  }, []);  

  console.log(apiData);
  
  if (apiData) {

    return ( 
      <section className="container">
        <header>
            <h1> Lets Catch Pokémon</h1>
        </header>

        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img 
                 src={apiData.sprites.other.dream_world.front_default} 
                 alt={apiData.name}
                 className='pokemon-image'
              />
            </figure> 
            <h1>{apiData.name}</h1>
          </li>
        </ul>
      </section>
  )
    
  }
};



