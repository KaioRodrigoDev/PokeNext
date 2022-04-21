import Link from 'next/link'
import Image from 'next/image'
import Pk from '../public/images/pokeball.png'

export default function Navbar() {
  return (
    <nav className="NavBar">
      <div>
        <Image src={Pk} width="30" height="30" alt="PokeNext" />
        <h1 className="preto">PokeNext</h1>
      </div>
      <ul className="NavLinks">
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
