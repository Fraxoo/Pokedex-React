import { PokemonItem } from "../models/Pokemon"
type PokemonCardProps = {
    pokemon: PokemonItem;
};



export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name}></img>
        </div>
    )
}