import { useEffect, useState } from "react";
import { PokemonCards } from './PokemonCards';

export const FetchPokemonAPI = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   const API = 'https://pokeapi.co/api/v2/pokemon?limit=28';

  const FetchAPI = async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();

    const detailData = await Promise.all(
      data.results.map(async (curr) => {
        const res = await fetch(curr.url);
        const data = await res.json();

        return data;
      })
    );

    setData(detailData);
    setLoading(false);
    console.log(detailData);

  } catch (error) {
    console.error(error);
    setLoading(false);
    setError(error);
  }
};

   useEffect(() => {

    FetchAPI();

   }, []);

   if (loading) {
    return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <h1>Loading...</h1>
    </div>
  );
   }

   if (error) {
    return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" 
    }}>
      <h1>{error.message}</h1>
    </div>
  );
   }

   return(
    <section className="container">

        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>

        <div>
            <ul className="cards">
               {
                data.map((curr) => {
                    return <PokemonCards key={curr.id} pokemonData={curr} />
                })
               }
            </ul>
        </div>

        <div className="pokemon-info">

        </div>

     </section>
   );
     
};