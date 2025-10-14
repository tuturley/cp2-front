// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      <div class="w-full max-w-md mx-auto">
        <div class="bg-white rounded-lg">
        <div class="px-4 py-3 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">POKEMON: BLASTOISE</h3>
      </div>
        <div>
          <p class=" px-4 py-5 text-gray-700">Pokemon aquatico, fraqueza apenas para tipo planta</p>
        </div>
          <div class="px-4 py-4 border-t border-gray-200">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ">
             Botão
            </button>
          </div>
  </div>
</div>
    </div>
  );
}