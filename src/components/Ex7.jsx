// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-t-lg shadow">
        <h1 className="text-lg font-semibold">Meu Dashboard</h1>
        <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-blue-100 transition-colors">Sair</button>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-b-lg shadow">
        <div className="border rounded-lg shadow p-4 bg-white">Card 1</div>
        <div className="border rounded-lg shadow p-4 bg-white">Card 2</div>
        <div className="border rounded-lg shadow p-4 bg-white">Card 3</div>
        <div className="border rounded-lg shadow p-4 bg-white">Card 4</div>
      </main>
    </div>
  );
}
