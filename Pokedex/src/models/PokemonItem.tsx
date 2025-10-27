export interface PokemonType {
  name: string;
  image: string;
}

export class PokemonItem {
  id: number;
  name: string;
  types: PokemonType[];
  image: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;

  constructor(
    id: number,
    name: string,
    types: PokemonType[],
    image: string,
    hp: number,
    attack: number,
    defense: number,
    speed: number
  ) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
  }
}
