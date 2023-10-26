import Link from 'next/link';
import styles from './page.module.css'
import { Metadata } from 'next';

type Pokemon = {
    name: string;
    url: string;
}

type PokemonListResponse = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export const metadata: Metadata = {
    title: 'Pokemon list',
    description: 'List of the first 151 pokemons ordered by their number',
    alternates: {
        canonical: '/pokemon',
        languages: {
          'de-DE': '/de-DE/pokemon',
        },
    }
  }
  
export default async function PokemonList() {
    const pokemonList: PokemonListResponse = await (
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    ).json();

    function capitalizeString(input: string): string {
        const firstLetter = input[0].toUpperCase();
        const restOfTheString = input.slice(1);
        
        return firstLetter + restOfTheString;
    }

    return (
        <ul className={styles.pokemonList}>
            {pokemonList.results.map((pokemon, index) => (
                <li key={`pokemon-${index}`}>
                    <Link href={`/pokemon/${pokemon.name}`}>
                        <strong>#{index+1}</strong> {capitalizeString(pokemon.name)}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
