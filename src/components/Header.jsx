import React from 'react'
import '../Style/Header.css'

export function Header() {
  return (
    <header className="bg-white dark:bg-zinc-800 p-4 flex justify-between items-center">
  <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">My Website</h1>
  <nav className="space-x-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Home</button>
    <button className="bg-green-500 text-white py-2 px-4 rounded-lg">About</button>
    <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Contact</button>
  </nav>
</header>
  )
}

export default Header



