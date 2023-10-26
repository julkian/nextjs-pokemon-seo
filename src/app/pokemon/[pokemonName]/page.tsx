import { Metadata } from 'next';
import Image from 'next/image';

type PokemonResponse = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

type RouteProps = {
    params: { pokemonName: string };
}

export async function generateMetadata(
    { params }: RouteProps,
  ): Promise<Metadata> {
    const pokemonName = params.pokemonName
   
    const pokemon: PokemonResponse = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    ).json();
   
    return {
        title: `Pokemon #${pokemon.id} ${pokemonName}`,
        // title: {
        //     absolute: `Pokemon #${pokemon.id} ${pokemonName}`,
        // },
        alternates: {
            canonical: `/pokemon/${params.pokemonName}`,
        },
        openGraph: {
            title: `Check my awesome ${pokemonName}!`,
            images: pokemon.sprites.front_default,
            type: 'website',
            url: `http://localhost:3000/pokemon/${params.pokemonName}`,
            siteName: 'https://pokeseo.com',
        },
    }
  }

export default async function PokemonList({ params }: { params: { pokemonName: string } }) {
    const pokemon: PokemonResponse = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
    ).json();

    function capitalizeString(input: string): string {
        const firstLetter = input[0].toUpperCase();
        const restOfTheString = input.slice(1);
        
        return firstLetter + restOfTheString;
    }

    return (<>
        <h1>{capitalizeString(pokemon.name)}</h1>
        <Image 
            src={pokemon.sprites.front_default} 
            alt={`${pokemon.name} front sprite`}
            width={192}
            height={192}
        />
    </>);
}