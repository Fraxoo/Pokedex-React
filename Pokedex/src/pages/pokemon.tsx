import { useParams } from "react-router-dom";
import "../styles/pokemon.css"
import { PokemonItem } from "../models/PokemonItem";
import { useEffect, useState } from "react";
import PokemonData from "../components/pokemon-data";


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


                const pokemon = new PokemonItem(
                    data.id,
                    data.name,
                    data.apiTypes,
                    data.image,
                    data.stats.HP,
                    data.stats.attack,
                    data.stats.defense,
                    data.stats.speed
                );

                setPokemon(pokemon)
            } else {
                throw new Error("Erreur réseau : " + res.status);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [pokemon, setPokemon] = useState<PokemonItem>({ id: 0, name: "", types: [], image: "", hp: 0, attack: 0, defense: 0, speed: 0 })


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
        <PokemonData key={idNumber} pokemon={pokemon} />
    )

}