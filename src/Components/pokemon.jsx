import '../Components/Pokemon.css'
import { useEffect, useState } from "react";

export const FetchPokemonAPI = () => {
    
  const [apiData, setApiData] = useState(null); 
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('')

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";


  //Fetch data Using Promises
  const FetchPokemonAPI = () => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
        setApiData(data);
        setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setError(error);
      setLoading(false);
    }
    )
  };

  //Fetch Data Using asyn and wait
  const PokemonAPI = async() => {

    try {

      const res = await fetch(API);
      if (!res.ok) {
       throw new Error(`HTTP Error: ${res.status}`);
      }

      const data = await res.json();

      setApiData(data);
      setLoading(false);
      
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }

  };

  useEffect(() => {
    
    // FetchPokemonAPI();
    PokemonAPI();

  }, []);  

  console.log(apiData);

  if (isLoading) {
    return (
       <div>
         <h1>Loading....</h1>
       </div>
    );
  }

  if (error) {
   return(
     <div>
       <h1>
        Error:{error.message}
       </h1>
    </div>
   );
  }
 

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
            <div className='grid-three-cols'>
              <p className='pokemon-info'>
                 Height: <span>{apiData.height}</span>
              </p>

               <p className='pokemon-info'>
                   Weight: <span>{apiData.weight}</span>
              </p>

               <p className='pokemon-info'>
                   Speed: <span>{apiData.stats[5].base_stat}</span>
              </p>

            </div>


          </li>
        </ul>
      </section>
  )
};



