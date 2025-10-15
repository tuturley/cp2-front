// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <div>
        <nav className="flex flex-col md:flex-row gap-4 bg-blue-300 p-4 rounded-lg shadow-md">
          <a href="#" className="text-white px-4 py-2 rounded hover:bg-green-500  text-center">Link 1</a>
          <a href="#" className="text-white px-4 py-2 rounded hover:bg-green-500  text-center">Link 2</a>
          <a href="#" className="text-white px-4 py-2 rounded hover:bg-green-500  text-center">Link 3</a>
        </nav>
      </div>
    </div>
  );
}