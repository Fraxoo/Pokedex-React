import { PokemonItem } from "../models/Pokemon"
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
        if(bg){
            document.body.style.backgroundColor = bg;
        }
    },[bg]);

    return (
        
        <div className="pokemon-data">
            <img alt={pokemon.name} ref={imgRef} src={pokemon.image} crossOrigin="anonymous" />
            <h3>{pokemon.name}</h3>
        </div>
    );
}