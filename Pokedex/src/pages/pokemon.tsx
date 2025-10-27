import { useParams } from "react-router-dom";
import "../styles/pokemon.css"
import { PokemonItem } from "../models/Pokemon";
import { useEffect, useState } from "react";


export default function Info() {

    async function getPokemonByID(id: number) {
        try {
            const res = await fetch(
                `https://pokebuildapi.fr/api/v1/pokemon/${id}`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                    }
                }
            );
            if (res.ok) {
                const data = await res.json();
                console.log(data);


                const pokemons = new PokemonItem(
                    data.id,
                    data.name,
                    data.types,
                    data.image,
                    data.stats.hp,
                    data.stats.attack,
                    data.stats.defense,
                    data.stats.speed
                );

                setPokemon(pokemons)
            } else {
                throw new Error("Erreur réseau : " + res.status);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [pokemon, setPokemon] = useState<PokemonItem>()


    const { id } = useParams();
    const idNumber = Number(id)
    console.log(id);
    

    useEffect(() => {
        getPokemonByID(idNumber)

    }, [])

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])




    return (
        <div>
            <p>{id}</p>
        </div>
    )
}