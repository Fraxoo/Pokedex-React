import { PokemonItem } from "../models/Pokemon"
import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";



type PokemonCardProps = {
    pokemon: PokemonItem;
};



export default function PokemonCard({ pokemon }: PokemonCardProps) {
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

    return (
        <div className="pokemon-card" style={{ backgroundColor: bg, padding: "10px", borderRadius: 8 }}>
            <img alt={pokemon.name} ref={imgRef} src={pokemon.image} crossOrigin="anonymous" />
            <h3>{pokemon.name}</h3>
        </div>
    );
}