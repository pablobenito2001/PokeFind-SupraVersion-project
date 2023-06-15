export default interface Pokemon {
    name: string;
    id: number;
    types: string[];
    image: string;
    height: number;
    weight: number;
    stats: { name: string, base_stat: number };
    abilities: { name: string, is_hidden: boolean };
}