import Image from 'next/image'
import Link from 'next/link'

export default function Card({ pokemon }) {
  return (
    <div className="border-8 ">
      <li className="border-2 border-slate-500 py-4" key={pokemon.id}>
        <div className="">
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="120px"
            height="120px"
          />
        </div>
        <h4>#{pokemon.id}</h4>
        <h2>{pokemon.name}</h2>
        <Link href={`/pokemon/${pokemon.id}`}>
          <a>Detalhes</a>
        </Link>
      </li>
    </div>
  )
}
