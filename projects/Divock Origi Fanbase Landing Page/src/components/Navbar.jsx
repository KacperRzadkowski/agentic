import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/career', label: 'Career' },
    { to: '/stats', label: 'Stats' },
    { to: '/media', label: 'Media' },
    { to: '/about', label: 'About' },
  ]

  const isActive = (to) => location.pathname === to

  return (
    <nav className="bg-red-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight">Divock Origi</Link>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>☰</button>
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`hover:underline ${isActive(l.to) ? 'underline decoration-2' : ''}`}>{l.label}</Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="hover:underline">{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}
