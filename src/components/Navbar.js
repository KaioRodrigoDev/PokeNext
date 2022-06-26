import Link from 'next/link'
import Image from 'next/image'
import Pk from '../public/images/pokeball.png'

export default function Navbar() {
  return (
    <nav className="py-4 flex justify-around bg-slate-600 ">
      <div>
        <Image src={Pk} width="30" height="30" alt="PokeNext" />
      </div>
      <h1 className="text-red-600 text-2xl">PokeNext</h1>

      <ul className="flex space-x-4 self-center">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
