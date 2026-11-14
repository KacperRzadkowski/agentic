export default function Home() {
  return (
    <>
    <section className="max-w-6xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/Divock_Origi_%2825273591916%29.jpg"
          alt="Divock Origi warming up for Liverpool"
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover"
        />
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-red-700 leading-tight">Divock Origi</h1>
          <p className="mt-4 text-xl text-gray-700">Belgian striker • Born 18 April 1995, Ostend</p>
          <p className="mt-4 text-gray-600 max-w-xl">
            Known as “Beast Mode” for his late goals and clutch moments at Liverpool. 
            Iconic Champions League and Premier League strikes that live forever at Anfield.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/career" className="px-5 py-2.5 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">Career</a>
            <a href="/stats" className="px-5 py-2.5 border rounded-lg hover:bg-white transition">Stats</a>
          </div>
        </div>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {[
          {title:'Iconic Moment', desc:'2019 Champions League semi-final vs Barcelona — the 3-0 comeback.'},
          {title:'Clubs', desc:'Lille, Liverpool, AC Milan, Nottingham Forest, Al Shabab.'},
          {title:'National Team', desc:'Belgium international with World Cup experience.'},
        ].map(card=>(
          <div key={card.title} className="p-6 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
