export default function Media() {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/9/92/Divock_Origi_%2825273591916%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Goal_from_Divock_Origi_%2819128014363%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/92/Divock_Origi_%2825273591916%29.jpg',
  ]

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Media Gallery</h1>
      <p className="text-gray-600 mb-6">Photos from matches, celebrations and fan moments.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {images.map((src,i) => (
          <img key={i} src={src} alt={`Divock Origi ${i+1}`} className="rounded-lg shadow hover:opacity-90 transition" />
        ))}
      </div>
      <div className="mt-8">
        <h3 className="font-bold mb-2">Fan Art & Highlights</h3>
        <p className="text-gray-600">This gallery is a tribute. All images are from Wikimedia Commons under CC licenses. Credit to original photographers.</p>
      </div>
    </section>
  )
}
