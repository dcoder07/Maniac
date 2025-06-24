import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className='flex z-10'>
      <div className='flex justify-self-start'>
        <div className='max-sm:hidden h-[100vh]'>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
