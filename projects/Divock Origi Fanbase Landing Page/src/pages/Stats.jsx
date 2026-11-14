export default function Stats() {
  // Data based on publicly verifiable milestones and known career trajectory.
  const statsData = [
    { label: 'Key Club History', value: '5 Major Clubs' }, // Lille, Liverpool, AC Milan, etc.
    { label: 'Major Trophy Wins', value: '1 (UCL)' }, // UEFA Champions League 2019
    { label: 'International Status', value: 'Belgium International' },
    { label: 'Career Highlights', value: 'Iconic Goalscorer' },
  ]

  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-red-700">Career Statistics & Milestones</h1>
      <p className="text-gray-600 mb-8">A summary of Divock Origi's incredible journey across European football, based on public records.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map(s => (
          <div key={s.label} className="p-6 bg-white border-t-4 border-red-600 rounded-xl shadow-lg transition hover:shadow-xl">
            <p className="text-sm font-medium text-gray-500">{s.label}</p>
            <p className="text-3xl font-extrabold text-gray-800 mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-xl shadow-md">
        <h3 className="font-bold text-xl mb-3 text-red-700">Key Milestones</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li className="font-medium">UEFA Champions League Winner: 2019</li>
          <li className="font-medium">Career spanning major leagues (Ligue 1, Premier League, Serie A).</li>
          <li className="font-medium">Known for clutch performances in high-pressure matches.</li>
        </ul>
      </div>
    </section>
  )
}
