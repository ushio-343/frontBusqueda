import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (query) {
      fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          campo: 'Teléfono Contacto  ',
          valor: query,
        }),
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error:', error));
    } else {
      setData([]);
    }
  }, [query]);

  return (
    <div className="App bg-purple-900 min-h-screen">
      <div className="p-4 m-2 bg-purple-900"></div>
      <div className="flex flex-col gap-6 w-72">
  <div className="relative h-10 w-full min-w-[200px]">
    <input onChange={(event) => setQuery(event.target.value)} value={query} 
      className="peer h-full w-full rounded-[7px] border border-purple-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-purple-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-purple-200 placeholder-shown:border-t-purple-200 focus:border-2 focus:border-purple-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-purple-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-purple-200 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-purple-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-purple-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-purple-200 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-purple-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-purple-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-purple-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-purple-200">
      Outlined
    </label>
  </div>
</div>
      <div className="p-4 m-2 bg-purple-900"></div>
      {Array.isArray(data) ? (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-purple-200 dark:text-purple-400">
            <thead className="text-xs text-purple-700 uppercase bg-purple-50 dark:bg-purple-700 dark:text-purple-400">
              <tr>
              <th scope="col" className="px-6 py-3">Clave cliente</th>
                <th scope="col" className="px-6 py-3">Correo</th>
                <th scope="col" className="px-6 py-3">Nombre</th>
                <th scope="col" className="px-6 py-3">Teléfono Contacto</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-purple-700 dark:bg-purple-800">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-3">{item['Clave cliente']}</td>
                  <td className="px-6 py-3">{item['Correo ']}</td>
                  <td className="px-6 py-3">{item['   Nombre Contacto ']}</td>
                  <td className="px-6 py-3">{item['Teléfono Contacto  ']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-purple-200">Cargando...</p>
      )}
    </div>
  );
}

export default App;



