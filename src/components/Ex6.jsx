// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:

// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
        <div className="grid h-[80px]">
          <header className="bg-blue-600 text-white flex items-center justify-center text-lg font-semibold">Cabeçalho</header>
          <main className="bg-gray-100 flex items-center justify-center">Conteúdo principal</main>
          <footer className="bg-blue-800 text-white flex items-center justify-center">Rodapé</footer>
        </div>
    </div>
  );
}
