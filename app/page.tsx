import Sea from "./components/three/works/sea";

export default function Home() {
  return (
    <main className="h-screen w-full bg-primary-200 flex flex-col">
      <header className="border-b-2 border-black h-32 bg-light text-2xl text-black flex items-center font-bold px-4">BACKUP MILES</header>
      <section className="flex h-full">
        <aside className="bg-light md:block hidden flex-grow border-r-2 border-r-black"></aside>
        <div className="flex-grow-[10] grid relative place-items-center">
          <span className="absolute top-[20%] text-white text-2xl z-20 items-center justify-center">YUP, THIS IS WHAT A WORK IN PROGRESS LOOKS LIKE</span>
          <Sea />
        </div>
        <aside className="bg-light md:block hidden flex-grow border-l-2 border-l-black"></aside>
      </section>
      <footer className="border-t-2 border-black h-32 bg-light text-2xl text-black flex items-center font-bold px-4"></footer>
    </main>
  );
}
