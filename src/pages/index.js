import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '../components/Card'

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
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 text-center list-none ">
        {pokemons.map(pokemon => (
          <Card pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
