import { PokemonItem } from "../models/PokemonItem"
import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";



type PokemonDataProps = {
    pokemon: PokemonItem;
};



export default function PokemonData({ pokemon }: PokemonDataProps) {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [bg, setBg] = useState("");

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        img.onload = () => {
            const colorthief = new ColorThief();
            const [r, g, b] = colorthief.getColor(img);
            setBg(`rgb(${r},${g},${b})`);
        };
    }, [pokemon.image])

    useEffect(() => {
        if (bg) {
            document.body.style.backgroundColor = bg;
        }
    }, [bg]);

    return (

        <div className="pokemon-data">
            <div className="pokemon-info">
                <h3>#{pokemon.id}</h3>
                <h2>{pokemon.name}</h2>
            </div>
            <div className="pokemon-data-bottom">
                <div className="pokemon-img">
                    <img alt={pokemon.name} ref={imgRef} src={pokemon.image} crossOrigin="anonymous" />
                </div>
                <div className="pokemon-stats">
                    <div className="pokemon-stats-types">
                        {pokemon.types.map((type, i) => (
                            <img key={i} src={type.image} alt={type.name} />
                        ))}
                    </div>
                    <h1>Base stats :</h1>
                    <div className="pokemon-stats-info">
                        <h3>HP : {pokemon.hp}</h3>
                        <h3>ATTACK : {pokemon.attack}</h3>
                        <h3>DEFENSE : {pokemon.defense}</h3>
                        <h3>SPEED : {pokemon.speed}</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}



{/* <img alt={pokemon.name} ref={imgRef} src={pokemon.image} crossOrigin="anonymous" />
<h3>{pokemon.name}</h3> */}