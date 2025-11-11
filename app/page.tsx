import Accessbar from "./components/sections/Accessbar";
import Navbar from "./components/sections/Navbar";
export default function Home() {
  return (
    <div className='flex border-amber-50'>
      <div className='flex-1/4 max-sm:hidden h-[100vh]'>
        <Navbar />
      </div>
      <div className='flex-2/4'>User tweets</div>
      <div className='flex-1/4'>
        <Accessbar />
      </div>
    </div>
  );
}
