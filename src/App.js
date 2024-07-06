function App() {
  return (
    <div className="border-black">
      <header className="bg-blue-500 flex justify-around py-8 text-white text-xl">
        <div>
          <h2 className="text-2xl">Tailwind</h2>
        </div>
        <div className="flex gap-5">
          <p>Home</p>
          <p>About</p>
          <p>Contact us</p>
        </div>
      </header>
      <main className="flex flex-col gap-1">
        <section className="bg-gray-300 h-[20vh] p-2">
          <p>This is the first section of the app</p>
          <button className="bg-blue-800 p-3 rounded-xl">Click me</button>
        </section>
        <section className="bg-gray-300 h-[20vh] p-2">
          <p>This is the first section of the app</p>
        </section>
        <section className="bg-gray-300 h-[30vh] p-2">
          <p>This is the first section of the app</p>
        </section>
      </main>
      <footer className="bg-blue-500 h-[100%] p-4 flex justify-around">
        <p>footer</p>
        <div className="flex flex-col">
          <a>home</a>
          <a>home</a>
          <a>home</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
