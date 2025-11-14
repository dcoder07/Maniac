import Accessbar from "./components/sections/Accessbar";
import Navbar from "./components/sections/Navbar";
import PostSec from "./components/sections/PostSec";
export default function Home() {
  return (
    <div className='flex border-amber-50'>
      <div className='flex-1/4 max-sm:hidden h-[100vh]'>
        <Navbar />
      </div>
      <div className='flex-2/4'>
        <PostSec />
      </div>
      <div className='flex-1/4'>
        <Accessbar />
      </div>
    </div>
  );
}
