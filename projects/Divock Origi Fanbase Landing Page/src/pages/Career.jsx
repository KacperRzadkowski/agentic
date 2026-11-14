export default function Career() {
  const clubs = [
    { name: 'Lille OSC', years: '2010–2013', note: 'Youth to senior debut' },
    { name: 'Liverpool FC', years: '2014–2023', note: 'Champions League winner 2019' },
    { name: 'AC Milan', years: '2023–2024', note: 'Loan spell in Serie A' },
    { name: 'Nottingham Forest', years: '2024–2025', note: 'Premier League return' },
    { name: 'Al Shabab', years: '2025–', note: 'Saudi Pro League' },
  ]

  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Career Timeline</h1>
      <div className="space-y-4">
        {clubs.map(c => (
          <div key={c.name} className="border-l-4 border-red-700 pl-4 py-2">
            <h3 className="text-xl font-semibold">{c.name} <span className="text-gray-500 text-base">({c.years})</span></h3>
            <p className="text-gray-600">{c.note}</p>
          </div>
        ))}
      </div>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Goal_from_Divock_Origi_%2819128014363%29.jpg"
        alt="Divock Origi scoring"
        className="mt-8 w-full rounded-xl shadow"
      />
    </section>
  )
}
