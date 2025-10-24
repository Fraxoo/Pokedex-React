import { useEffect, useState } from "react";
import Headers from "../components/headers"
import PokemonCard from "../components/pokemon-card";
import { PokemonItem } from "../models/Pokemon";
import '../styles/home.css'
import { Link } from "react-router-dom";



export default function Home() {

    async function getAllPokemon() {
        try {
            const res = await fetch(
                `https://pokebuildapi.fr/api/v1/pokemon/limit/100`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                    }
                }
            );
            if (res.ok) {
                const data = await res.json();

                const pokemons = data.map((pokemon: any) => new PokemonItem(
                    pokemon.id,
                    pokemon.name,
                    pokemon.types,
                    pokemon.image,
                    pokemon.stats.hp,
                    pokemon.stats.attack,
                    pokemon.stats.defense,
                    pokemon.stats.speed
                ));

                setPokemons(pokemons)
            } else {
                throw new Error("Erreur réseau : " + res.status);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [pokemons, setPokemons] = useState<PokemonItem[]>([]);



    useEffect(() => {
        getAllPokemon();

    }, [])

    useEffect(() => {
        console.log(pokemons);

    }, [pokemons])


    return (
        <div>
            <Headers />
            <div className="pokemon-grid">
                {
                    pokemons.map((pokemon) => {
                        return (
                            <Link className="no-decoration" key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                                <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}