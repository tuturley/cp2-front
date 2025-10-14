// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      <div className="flex flex-row justify-center space-x-5">
        <div className=" bg-red-500 w-12 h-12"></div>
        <div className=" bg-blue-500 w-12 h-12"></div>
        <div className="bg-green-500 w-12 h-12"></div>
      </div>
    </div>
  );
}
