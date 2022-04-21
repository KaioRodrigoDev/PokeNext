import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  const api = 'https://pokeapi.co/api/v2/pokemon'
  const maxpoke = 25
  const data = await fetch(`${api}/?limit=${maxpoke}`)
  const pokemons = await data.json()

  pokemons.results.forEach((item, index) => {
    item.id = index + 1
  })
  return {
    props: { pokemons: pokemons.results }
  }
}

export default function Todos({ pokemons }) {
  return (
    <>
      <h1 className="text-sky-600 uppercase">PokeNext</h1>
      <div></div>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Image
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
              width="120px"
              height="120px"
            />
            <h4>#{pokemon.id}</h4>
            <h2>{pokemon.name}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}
