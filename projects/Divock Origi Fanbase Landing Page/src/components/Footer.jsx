export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="text-white font-bold mb-2">Divock Origi Fanbase</h4>
          <p>Unofficial fan site celebrating Divock Origi’s career.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Pages</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/career" className="hover:underline">Career</a></li>
            <li><a href="/stats" className="hover:underline">Stats</a></li>
            <li><a href="/media" className="hover:underline">Media</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Legal</h4>
          <p>Images used under CC licenses from Wikimedia Commons.</p>
          <p className="mt-2">© 2026 Fanbase</p>
        </div>
      </div>
    </footer>
  )
}
