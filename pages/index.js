import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  const todos = await data.json()

  return {
    props: { todos }
  }
}

export default function Home({ todos }) {
  return (
    <>
      <h1>Git Test</h1>
      {/* <ul>
        <h2>
          {todos.name} #{todos.id}
        </h2>
        <img src={todos['sprites']['front_default']} alt="Charmander" />
        <p>{todos.next}</p>
      </ul> */}
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.name}>
            <a>{todo['name']}</a>
          </li>
        ))}
      </ul> */}
    </>
  )
}
