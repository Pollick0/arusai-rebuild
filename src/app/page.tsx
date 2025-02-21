export default function Home() {
  return (
    <main>
      <div className="w-[70%] p-48 border-x-2 border-x-[--border-color] mx-auto text-center">

        <h1 className="font-bold text-5xl">
          Streamline your advertising
          <br></br>
          with our website solutions 
        </h1>  

        <h2>
          Just a few clicks away.
        </h2>

        <button className="bg-red-950 p-2 px-8 my-2 rounded-md shadow-2xl shadow-red-800/50 font-bold text-md hover:shadow-red-900/50 hover:shadow-xl hover:bg-red-900">
          Start the journey 
        </button>
          


      </div>

      <div className="w-[70%] p-48 border-x-2 border-x-[--border-color] border-t-2 border-t-[--border-color] mx-auto text-left">

          <h1 className="bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text font-bold text-4xl inline mr-2">
            Custom hand-made 
          </h1>
          <h1 className="inline text-4xl font-bold ">
            websites just for you.
          </h1>

          <h1 className="ml-20 text-gray-300 text-xl">Not just a template.</h1>
      </div>
    </main>
  );
}
