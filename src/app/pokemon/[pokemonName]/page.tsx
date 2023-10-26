import Image from 'next/image';

type PokemonResponse = {
    name: string;
    sprites: {
        front_default: string;
    };

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